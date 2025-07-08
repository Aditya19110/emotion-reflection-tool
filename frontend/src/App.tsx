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
      setError("Failed to analyze emotion. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#333" }}>
        Emotion Reflection Tool 💬
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <textarea
          style={{
            width: "100%",
            padding: "1rem",
            borderRadius: 10,
            border: "1px solid #ccc",
            resize: "none",
            fontSize: "1rem",
            marginBottom: "1rem",
          }}
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
            fontSize: "1rem",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            height: "48px",
          }}
          disabled={loading}
        >
          {loading ? <div className="spinner" /> : "Submit"}
        </button>

        {error && (
          <p style={{ color: "red", marginTop: "1rem", textAlign: "center" }}>{error}</p>
        )}
      </form>

      {result && (
        <div style={{ marginTop: "2rem", width: "100%", maxWidth: "500px" }}>
          <EmotionCard emotion={result.emotion} confidence={result.confidence} />
        </div>
      )}
    </div>
  );
}

export default App;