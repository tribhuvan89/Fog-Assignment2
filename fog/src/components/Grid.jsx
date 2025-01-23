import React, { useState, useEffect } from "react";
import "./Grid.css";

const Grid = ({ rows = 15, cols = 20 }) => {
  const [waveIndex, setWaveIndex] = useState(0);
  const [waveDirection, setWaveDirection] = useState(5);
  const [waveColor, setWaveColor] = useState("blue");
  
  useEffect(() => {
    const colors = ["blue","purple","violet"];
    const interval = setInterval(() => {
      setWaveIndex((prev) => {
        let nextIndex = prev + waveDirection;
        if (nextIndex >= cols - 1 || nextIndex <= 0) {
          setWaveDirection(-waveDirection);
          setWaveColor(colors[Math.floor(Math.random() * colors.length)]);
        }
        return nextIndex;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [waveDirection, cols]);

  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "0px" }}>
      {[...Array(rows * cols)].map((_, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const intensity = Math.max(0.2, 1 - Math.abs(col - waveIndex) * 0.2);
        return (
          <div
            key={index}
            className="grid-item"
            style={{ backgroundColor: col >= waveIndex && col < waveIndex + 5 ? waveColor : "black", opacity: intensity, margin: "0px", padding: "0px" }}
          ></div>
        );
      })}
    </div>
  );
};

export default Grid;
