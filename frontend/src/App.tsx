import React, { useState } from "react";
import EmotionCard from "./components/EmotionCard";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<{ emotion: string; confidence: number } | null>(null);
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
    } catch (err) {
      setError("Failed to analyze emotion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{ padding: "2rem", maxWidth: 500, margin: "0 auto" }}>
      <h1>Emotion Reflection Tool</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          style={{ width: "100%", padding: "1rem", borderRadius: 8, marginBottom: "1rem" }}
          placeholder="How are you feeling today?"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Submit"}
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {result && (
        <div style={{ marginTop: "2rem" }}>
          <EmotionCard emotion={result.emotion} confidence={result.confidence} />
        </div>
      )}
    </div>
  );
}

export default App;