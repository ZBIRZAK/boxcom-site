import React, { useEffect, useRef } from "react";

const Ball = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 480;
    const H = 320;
    canvas.width = W;
    canvas.height = H;

    const groundY = H - 20;
    const gravity = 2000; // px/s^2
    const restitution = 0.82;
    const airDrag = 0.0008;
    const surfaceFriction = 0.98;

    const ball = {
      x: W * 0.25,
      y: 60,
      vx: 140,
      vy: 0,
      r: 16,
    };

    const boost = () => {
      ball.vy -= 600;
      if (Math.abs(ball.vx) < 80) {
        ball.vx += (Math.random() < 0.5 ? -1 : 1) * 120;
      }
    };

    canvas.addEventListener("click", boost);
    canvas.addEventListener("touchstart", (e) => {
      e.preventDefault();
      boost();
    });

    let last = performance.now();
    let frameId;

    function loop(now) {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      update(dt);
      draw();
      frameId = requestAnimationFrame(loop);
    }

    function update(dt) {
      ball.vy += gravity * dt;
      ball.vx *= 1 - airDrag * Math.abs(ball.vx);
      ball.x += ball.vx * dt;
      ball.y += ball.vy * dt;

      if (ball.y + ball.r > groundY) {
        ball.y = groundY - ball.r;
        if (ball.vy > 0) ball.vy = -ball.vy * restitution;
        ball.vx *= surfaceFriction;
      }
      if (ball.x - ball.r < 10) {
        ball.x = 10 + ball.r;
        ball.vx = Math.abs(ball.vx) * restitution;
      } else if (ball.x + ball.r > W - 10) {
        ball.x = W - 10 - ball.r;
        ball.vx = -Math.abs(ball.vx) * restitution;
      }
    }

    function drawGround() {
      ctx.beginPath();
      ctx.moveTo(0, groundY + 0.5);
      ctx.lineTo(W, groundY + 0.5);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#d1d5db";
      ctx.stroke();
    }

    function drawShadow() {
      const maxSpread = 28;
      const minSpread = 8;
      const height = Math.max(0, groundY - (ball.y + ball.r));
      const t = Math.max(0, Math.min(1, 1 - height / (groundY - 30)));
      const rx = minSpread + (maxSpread - minSpread) * t;
      const ry = 5 - 3 * t;

      ctx.save();
      ctx.globalAlpha = 0.25 + 0.35 * t;
      ctx.beginPath();
      ctx.ellipse(ball.x, groundY, rx, Math.max(2, ry), 0, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.restore();
    }

    function drawBall() {
      const speed = Math.abs(ball.vy);
      const squash = Math.min(0.25, speed / 2200);
      const sx = 1 + squash;
      const sy = 1 - squash;

      ctx.save();
      ctx.translate(ball.x, ball.y);
      ctx.scale(sx, sy);
      const r = ball.r;
      const grd = ctx.createRadialGradient(
        -r * 0.4,
        -r * 0.4,
        r * 0.3,
        0,
        0,
        r
      );
      grd.addColorStop(0, "#ff8a5b");
      grd.addColorStop(1, "#ff5a2f");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(-r * 0.4, -r * 0.5, r * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      ctx.fill();
      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, W, H);
      drawGround();
      drawShadow();
      drawBall();
    }

    frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener("click", boost);
    };
  }, []);

  return (
    <div className="p-4 text-center">
      <canvas
        ref={canvasRef}
        width={480}
        height={320}
        className="block mx-auto"
      />
    </div>
  );
};

export default Ball;
