import React from "react";

interface EmotionCardProps {
  emotion: string;
  confidence: number;
}

const getEmoji = (emotion: string) => {
  const map: { [key: string]: string } = {
    Happy: "😊",
    Sad: "😢",
    Angry: "😠",
    Anxious: "😟",
    Excited: "🤩",
    Calm: "😌"
  };
  return map[emotion] || "🙂";
};

const EmotionCard: React.FC<EmotionCardProps> = ({ emotion, confidence }) => {
  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "2rem",
        background: "#f9fafb",
        border: "1px solid #e0e0e0",
        borderRadius: "1.25rem",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
        textAlign: "center",
        maxWidth: "450px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#333", marginBottom: "1rem" }}>
        Emotion Detected
      </h2>
      <p
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          background: "linear-gradient(to right, #007bff, #00b4d8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: 0,
        }}
      >
        {getEmoji(emotion)} {emotion}
      </p>
      <p style={{ fontSize: "0.95rem", color: "#666", marginTop: "0.75rem" }}>
        Confidence: {(confidence * 100).toFixed(1)}%
      </p>
    </div>
  );
};

export default EmotionCard;