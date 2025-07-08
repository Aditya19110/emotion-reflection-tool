import React from "react";

interface EmotionCardProps {
  emotion: string;
  confidence: number;
}

const EmotionCard: React.FC<EmotionCardProps> = ({ emotion, confidence }) => {
  return (
    <div
      style={{
        marginTop: "1.5rem",
        padding: "1.25rem",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "1rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        textAlign: "center",
        maxWidth: "400px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#333", marginBottom: "0.75rem" }}>
        Emotion Detected
      </h2>
      <p style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#007bff", margin: 0 }}>
        {emotion}
      </p>
      <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.75rem" }}>
        Confidence: {(confidence * 100).toFixed(1)}%
      </p>
    </div>
  );
};

export default EmotionCard;