"use client";

import styles from "./app.module.scss";
import { useState } from "react";
import CakeSparkler from "./CakeSparkler";

const DeepSeekSparkler = () => {
  const [intensity, setIntensity] = useState(5);
  const [speed, setSpeed] = useState(1);

  const customColors = [
    "#FF1493",
    "#00BFFF",
    "#FF00FF",
    "#32CD32",
    "#FFD700",
    "#FF4500",
  ];

  return (
    <div className={styles}>
      <h1>Enhanced Cake Sparkler</h1>

      <div className="controls">
        <label>
          Intensity:
          <input
            type="range"
            min="1"
            max="10"
            value={intensity}
            onChange={(e) => setIntensity(parseInt(e.target.value))}
          />
          {intensity}
        </label>

        <label>
          Speed:
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
          />
          {speed}x
        </label>
      </div>

      <div className="sparklers-container">
        <div className="sparkler-item">
          <h3>Default Sparkler</h3>
          <CakeSparkler
            size={180}
            intensity={intensity}
            animationSpeed={speed}
          />
        </div>

        <div className="sparkler-item">
          <h3>Custom Colors</h3>
          <CakeSparkler
            size={180}
            centerColor="#FF1493"
            sparkleColors={customColors}
            intensity={intensity}
            animationSpeed={speed}
          />
        </div>

        <div className="sparkler-item">
          <h3>High Intensity</h3>
          <CakeSparkler size={180} intensity={8} animationSpeed={speed} />
        </div>
      </div>
    </div>
  );
};

export default DeepSeekSparkler;
