export default function Sparkler({ count = 16 }) {
  // Generate sparks with random angles, radii, and delays
  const sparks = Array.from({ length: count }).map((_, i) => {
    const angle = i * (360 / count) + Math.random() * 20 - 10; // base + jitter
    const rad = Math.random() * 20 + 20; // distance 20–40
    const dx = Math.cos((angle * Math.PI) / 180) * rad;
    const dy = Math.sin((angle * Math.PI) / 180) * rad;
    const delay = Math.random() * 1000; // ms
    const size = 5 + Math.random() * 4; // 5–9px

    const colors = ["gold", "white", "soft"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return { dx, dy, delay, size, color, key: i };
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-60 -60 120 120"
      width="300"
      height="300"
    >
      <style>{`
        .spark {
          transform-origin: 0 0;
          animation: fly 900ms cubic-bezier(.2,.9,.2,1) infinite;
          opacity: 0;
        }
        .star {
          transform-origin: 0 0;
          animation: twinkle 850ms ease-in-out infinite;
        }
        @keyframes fly {
          0%   { transform: translate(0,0) scale(0.6); opacity: 1; }
          60%  { transform: translate(var(--dx), var(--dy)) scale(1); opacity: 1; }
          100% { transform: translate(calc(var(--dx) * 1.25), calc(var(--dy) * 1.25)) scale(0.9); opacity: 0; }
        }
        @keyframes twinkle {
          0%   { transform: scale(1); opacity: 1; }
          50%  { transform: scale(1.4); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }
        .gold { fill: #ffd86b; stroke: #ffd86b; }
        .white { fill: #ffffff; stroke: #fff; opacity: 0.95; }
        .soft { fill: #ffecb3; stroke: #ffecb3; opacity: 0.9; }
        .trail { stroke-width: 1.5; stroke-linecap: round; opacity: 0.8; }
      `}</style>

      <defs>
        <symbol id="star" viewBox="-4 -4 8 8">
          <path
            d="M0,-3 L0.9,-0.9 L3,-1 L1.3,0.5 L1.8,3 L0,1.6 L-1.8,3 L-1.3,0.5 L-3,-1 L-0.9,-0.9 Z"
            vectorEffect="non-scaling-stroke"
          />
        </symbol>
      </defs>

      {sparks.map(({ dx, dy, delay, size, color, key }) => (
        <g
          key={key}
          className="spark"
          style={{
            "--dx": `${dx}px`,
            "--dy": `${dy}px`,
            animationDelay: `${delay}ms`,
          }}
        >
          <line
            className={`trail ${color}`}
            x1="0"
            y1="0"
            x2={dx * 0.4}
            y2={dy * 0.4}
          />
          <use
            className={`star ${color}`}
            href="#star"
            x={dx * 0.6}
            y={dy * 0.6}
            width={size}
            height={size}
          />
        </g>
      ))}

      <circle cx="0" cy="0" r="3" fill="#fff7db" opacity="0.95" />
    </svg>
  );
}
