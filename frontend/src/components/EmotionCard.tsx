import React from "react";

interface EmotionCardProps {
  emotion: string;
  confidence: number;
  description: string;
  suggestions: string[];
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

const getEmotionColor = (emotion: string) => {
  const colorMap: { [key: string]: string } = {
    Happy: "#10B981",
    Sad: "#6366F1", 
    Angry: "#EF4444",
    Anxious: "#F59E0B",
    Excited: "#8B5CF6",
    Calm: "#06B6D4"
  };
  return colorMap[emotion] || "#6B7280";
};

const EmotionCard: React.FC<EmotionCardProps> = ({ emotion, confidence, description, suggestions }) => {
  const emotionColor = getEmotionColor(emotion);
  
  return (
    <div className="emotion-card">
      <div className="emotion-header">
        <div className="emotion-emoji" style={{ color: emotionColor }}>
          {getEmoji(emotion)}
        </div>
        <h2 className="emotion-title">Emotion Detected</h2>
      </div>
      
      <div className="emotion-result">
        <span className="emotion-name" style={{ color: emotionColor }}>
          {emotion}
        </span>
        <div className="confidence-badge">
          <span className="confidence-label">Confidence</span>
          <span className="confidence-value" style={{ color: emotionColor }}>
            {(confidence * 100).toFixed(1)}%
          </span>
        </div>
      </div>
      
      <div className="confidence-bar-container">
        <div 
          className="confidence-bar"
          style={{ 
            width: `${confidence * 100}%`,
            backgroundColor: emotionColor
          }}
        />
      </div>
      
      <p className="emotion-description">{description}</p>
      
      <div className="suggestions-section">
        <h3 className="suggestions-title">💡 Suggestions</h3>
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="suggestion-item">
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmotionCard;