from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI(
    title="Emotion Reflection API",
    description="A mock API that returns fake emotion analysis based on user reflection.",
    version="1.0.0"
)

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"]
)

class Reflection(BaseModel):
    text: str

class EmotionResponse(BaseModel):
    emotion: str
    confidence: float

@app.post("/analyze", response_model=EmotionResponse)
async def analyze_emotion(reflection: Reflection):
    """Analyze a reflection and return a fake emotion with confidence."""
    emotions = ["Happy", "Sad", "Angry", "Anxious", "Excited", "Calm"]
    return {
        "emotion": random.choice(emotions),
        "confidence": round(random.uniform(0.6, 0.99), 2)
    }