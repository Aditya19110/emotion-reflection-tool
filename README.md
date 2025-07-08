# Emotion Reflection Tool 

A simple mobile-first web app that allows users to reflect on their emotions by entering a short piece of text (e.g., “I feel nervous about my first job interview”). It uses a mock backend to return a fake "emotion analysis" with a confidence score.

---

## ✨ Features

- Clean React + TypeScript frontend
- Python FastAPI backend with fake emotion analysis
- Emotion & confidence visually displayed
- Loading animation while waiting for response
- Graceful error handling

---

## Setup Instructions

### Backend (FastAPI)

1. Navigate to the backend folder:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On macOS/Linux
   # On Windows: venv\Scripts\activate
   ```

2. Install FastAPI and Uvicorn:
   ```bash
   pip install fastapi uvicorn
   ```

3. Run the API server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

### Frontend (React + TypeScript)

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## What Was Assessed

- Code quality & structure
- API integration approach
- UI/UX polish and responsiveness

# 👨‍💻 Developed By

Aditya Kulkarni
aditya.kulkanicse@gmail.com