"use client";

import { useEffect, useRef, useState } from "react";

// Simon pads & tones
const COLORS = ["green", "red", "yellow", "blue"];
const TONES = {
  green: 329.63, // E4
  red: 261.63, // C4
  yellow: 220.0, // A3
  blue: 164.81, // E3
};

export default function SimonGame() {
  const [sequence, setSequence] = useState([]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [activeColor, setActiveColor] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | showing | waiting | gameover
  const [round, setRound] = useState(0);
  const [message, setMessage] = useState("Click Start to play!");

  // Audio context kept across renders
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const lockingInputRef = useRef(false); // avoids rapid double clicks during light flash
  const isUnmountedRef = useRef(false);

  useEffect(() => {
    return () => {
      isUnmountedRef.current = true;
      // clean audio on unmount
      try {
        audioCtxRef.current?.close?.();
      } catch {}
    };
  }, []);

  const ensureAudio = async () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      masterGainRef.current = audioCtxRef.current.createGain();
      masterGainRef.current.gain.value = 0.25; // master volume
      masterGainRef.current.connect(audioCtxRef.current.destination);
    }
    if (audioCtxRef.current.state === "suspended") {
      await audioCtxRef.current.resume();
    }
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const playTone = async (freq, duration = 500) => {
    await ensureAudio();
    const ctx = audioCtxRef.current;
    const master = masterGainRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // soft attack/decay to avoid clicks
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(1.0, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration / 1000);

    osc.connect(gain);
    gain.connect(master);
    osc.start();
    osc.stop(now + duration / 1000);
  };

  const flashPad = async (color, toneMs = 550, gapMs = 200) => {
    lockingInputRef.current = true;
    setActiveColor(color);
    playTone(TONES[color], toneMs).catch(() => {});
    await sleep(toneMs);
    setActiveColor(null);
    await sleep(gapMs);
    lockingInputRef.current = false;
  };

  const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

  const startGame = async () => {
    await ensureAudio();
    setSequence([randomColor()]);
    setPlayerIndex(0);
    setRound(1);
    setStatus("showing");
    setMessage("Watch the sequence…");
  };

  // Show sequence whenever we enter "showing" or the sequence grows
  useEffect(() => {
    if (status !== "showing" || sequence.length === 0) return;

    let cancelled = false;
    (async () => {
      setMessage(`Round ${sequence.length} — Watch…`);
      // Tempo scales slightly with length
      const toneMs = Math.max(300, 650 - sequence.length * 20);
      const gapMs = 160;

      for (const color of sequence) {
        if (cancelled || isUnmountedRef.current) return;
        await flashPad(color, toneMs, gapMs);
      }
      if (cancelled || isUnmountedRef.current) return;
      setPlayerIndex(0);
      setStatus("waiting");
      setMessage("Your turn!");
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, sequence]);

  const handlePadClick = async (color) => {
    if (status !== "waiting" || lockingInputRef.current) return;

    // feedback flash for player's press
    setActiveColor(color);
    playTone(TONES[color], 300).catch(() => {});
    setTimeout(() => setActiveColor((c) => (c === color ? null : c)), 200);

    if (color === sequence[playerIndex]) {
      // correct so far
      if (playerIndex + 1 === sequence.length) {
        // completed round
        setMessage("Nice! Next round…");
        setStatus("showing");
        setRound((r) => r + 1);
        await sleep(600);
        setSequence((prev) => [...prev, randomColor()]);
      } else {
        setPlayerIndex((i) => i + 1);
      }
    } else {
      // mistake
      setStatus("gameover");
      setMessage("Game Over! Click Start to play again.");
      // short error tone
      playTone(110, 600).catch(() => {});
      setActiveColor(null);
    }
  };

  const resetGame = () => {
    setSequence([]);
    setPlayerIndex(0);
    setRound(0);
    setStatus("idle");
    setMessage("Click Start to play!");
    setActiveColor(null);
  };

  // Simple styles (works even without Tailwind)
  const padStyle = (baseColor, isActive) => ({
    width: 140,
    height: 140,
    borderRadius: 16,
    opacity: isActive ? 1 : 0.8,
    transform: isActive ? "scale(1.05)" : "scale(1)",
    transition: "transform 120ms, opacity 120ms, filter 120ms",
    border: "4px solid rgba(255,255,255,0.12)",
    boxShadow: isActive ? "0 0 18px rgba(255,255,255,0.35)" : "none",
    background: baseColor,
    cursor: status === "waiting" ? "pointer" : "default",
    filter: status === "waiting" ? "brightness(1)" : "brightness(0.9)",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
          Simon
        </h1>
        <p style={{ opacity: 0.9, marginBottom: 16 }}>{message}</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            marginBottom: 20,
            justifyItems: "center",
          }}
        >
          <button
            aria-label="Green"
            onClick={() => handlePadClick("green")}
            style={padStyle(
              "linear-gradient(180deg,#16a34a,#15803d)",
              activeColor === "green"
            )}
            disabled={status !== "waiting"}
          />
          <button
            aria-label="Red"
            onClick={() => handlePadClick("red")}
            style={padStyle(
              "linear-gradient(180deg,#dc2626,#b91c1c)",
              activeColor === "red"
            )}
            disabled={status !== "waiting"}
          />
          <button
            aria-label="Yellow"
            onClick={() => handlePadClick("yellow")}
            style={padStyle(
              "linear-gradient(180deg,#eab308,#ca8a04)",
              activeColor === "yellow"
            )}
            disabled={status !== "waiting"}
          />
          <button
            aria-label="Blue"
            onClick={() => handlePadClick("blue")}
            style={padStyle(
              "linear-gradient(180deg,#2563eb,#1d4ed8)",
              activeColor === "blue"
            )}
            disabled={status !== "waiting"}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {status === "idle" || status === "gameover" ? (
            <button
              onClick={startGame}
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                background: "#22c55e",
                border: "none",
                color: "#0b1324",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Start
            </button>
          ) : (
            <button
              onClick={resetGame}
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                background: "#f97316",
                border: "none",
                color: "#0b1324",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Reset
            </button>
          )}
          <span style={{ opacity: 0.9 }}>
            Round: <strong>{round}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
