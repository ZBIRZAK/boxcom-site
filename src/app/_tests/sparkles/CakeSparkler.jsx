import React, { useState, useEffect } from "react";

const CakeSparkler = ({
  size = 200,
  centerColor = "#FFD700",
  sparkleColors = [
    "#FF4500",
    "#FF6347",
    "#FFA500",
    "#FF8C00",
    "#FFFF00",
    "#FF69B4",
    "#00FFFF",
    "#7FFF00",
  ],
  intensity = 5,
  animationSpeed = 1,
  className = "",
}) => {
  const [sparkles, setSparkles] = useState([]);

  // Generate random sparkles based on intensity
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      const sparkleCount = 10 + intensity * 5;

      for (let i = 0; i < sparkleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 15 + Math.random() * 35;
        const size = 0.5 + Math.random() * 2.5;

        newSparkles.push({
          id: i,
          cx: 100 + Math.cos(angle) * distance,
          cy: 100 + Math.sin(angle) * distance,
          r: size,
          color:
            sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
          duration: (0.5 + Math.random() * 1.5) / animationSpeed,
          delay: Math.random() * 2,
          direction: Math.random() > 0.5 ? 1 : -1,
        });
      }

      setSparkles(newSparkles);
    };

    generateSparkles();
  }, [intensity, sparkleColors, animationSpeed]);

  return (
    <div
      className={`sparkler-container ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="cake-sparkler"
      >
        {/* Central sparkle with glow effect */}
        <g className="central-sparkle">
          <circle cx="100" cy="100" r="4" fill={centerColor} opacity="0.9">
            <animate
              attributeName="r"
              values="4;6;4"
              dur={`${1 / animationSpeed}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur={`${1 / animationSpeed}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="100" cy="100" r="8" fill={centerColor} opacity="0.3">
            <animate
              attributeName="r"
              values="8;12;8"
              dur={`${1.5 / animationSpeed}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.2;0.4;0.2"
              dur={`${1.5 / animationSpeed}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Dynamic sparkles */}
        {sparkles.map((sparkle) => (
          <circle
            key={sparkle.id}
            cx={sparkle.cx}
            cy={sparkle.cy}
            r={sparkle.r}
            fill={sparkle.color}
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur={`${sparkle.duration}s`}
              begin={`${sparkle.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values={`${sparkle.r};${sparkle.r * 1.5};${sparkle.r}`}
              dur={`${sparkle.duration}s`}
              begin={`${sparkle.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              values={`${sparkle.cx};${
                sparkle.cx + (Math.random() * 8 - 4) * sparkle.direction
              }`}
              dur={`${sparkle.duration}s`}
              begin={`${sparkle.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${sparkle.cy};${
                sparkle.cy + (Math.random() * 8 - 4) * sparkle.direction
              }`}
              dur={`${sparkle.duration}s`}
              begin={`${sparkle.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Subtle glow effect */}
        <radialGradient
          id="sparklerGlow"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor={centerColor} stopOpacity="0.2" />
          <stop offset="70%" stopColor={centerColor} stopOpacity="0.1" />
          <stop offset="100%" stopColor={centerColor} stopOpacity="0" />
        </radialGradient>
        <circle cx="100" cy="100" r="60" fill="url(#sparklerGlow)" />
      </svg>
    </div>
  );
};

export default CakeSparkler;
