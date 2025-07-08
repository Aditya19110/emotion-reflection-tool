from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

class Reflection(BaseModel):
    text: str

@app.post("/analyze")
async def analyze_emotion(reflection: Reflection):
    emotions = ["Happy", "Sad", "Angry", "Anxious", "Excited", "Calm"]
    response = {
        "emotion": random.choice(emotions),
        "confidence": round(random.uniform(0.6, 0.99), 2)
    }
    return response