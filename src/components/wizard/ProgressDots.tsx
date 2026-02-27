import React from "react";
import "./progressDots.css";

interface Props {
  step: number;
  total: number;
}

const ProgressDots: React.FC<Props> = ({ step, total }) => {
  return (
    <div className="dots">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`dot ${step === i + 1 ? "active" : ""}`} />
      ))}
    </div>
  );
};

export default ProgressDots;
