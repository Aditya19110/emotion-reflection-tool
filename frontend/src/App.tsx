import React, { useState } from "react";
import EmotionCard from "./components/EmotionCard";
import "./App.css";

interface EmotionResult {
  emotion: string;
  confidence: number;
  description: string;
  suggestions: string[];
}

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<EmotionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      console.error("Error:", err);
      if (err.message.includes("Failed to fetch")) {
        setError("Cannot connect to server. Please make sure the backend is running on port 8000.");
      } else {
        setError("Failed to analyze emotion. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="hero-section">
        <h1 className="main-title">
          <span className="emoji">💭</span>
          Emotion Reflection Tool
        </h1>
        <p className="subtitle">
          Share your thoughts and discover the emotions behind your words
        </p>
      </div>

      <div className="content-container">
        <form onSubmit={handleSubmit} className="reflection-form">
          <div className="form-group">
            <label htmlFor="reflection-text" className="form-label">
              How are you feeling today?
            </label>
            <textarea
              id="reflection-text"
              className="reflection-textarea"
              placeholder="Express your thoughts and feelings here..."
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              maxLength={1000}
            />
            <div className="char-counter">
              {text.length}/1000 characters
            </div>
          </div>
          
          <button
            type="submit"
            className={`submit-button ${loading ? 'loading' : ''}`}
            disabled={loading || !text.trim()}
          >
            {loading ? (
              <>
                <div className="spinner" />
                Analyzing...
              </>
            ) : (
              <>
                <span className="button-icon">🔍</span>
                Analyze Emotions
              </>
            )}
          </button>

          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}
        </form>

        {result && (
          <div className="result-container">
            <EmotionCard 
              emotion={result.emotion} 
              confidence={result.confidence}
              description={result.description}
              suggestions={result.suggestions}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;