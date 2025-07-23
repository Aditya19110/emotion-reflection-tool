![React](https://img.shields.io/badge/frontend-react-blue)
![FastAPI](https://img.shields.io/badge/backend-fastapi-green)
![TypeScript](https://img.shields.io/badge/language-typescript-lightblue)

# 💭 Emotion Reflection Tool

A modern web application that analyzes emotions in your text reflections and provides personalized insights and suggestions for emotional well-being.

## ✨ Features

- **Smart Emotion Detection**: Advanced keyword-based emotion analysis
- **Confidence Scoring**: Get confidence levels for detected emotions
- **Personalized Suggestions**: Receive tailored advice based on your emotional state
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Real-time Analysis**: Instant emotion analysis as you type
- **Health Monitoring**: Built-in API health checks
- **Error Handling**: Graceful error handling with user-friendly messages

## 🎯 Supported Emotions

- 😊 **Happy** - Joy, contentment, and positive feelings
- 😢 **Sad** - Sorrow, disappointment, and melancholy
- 😠 **Angry** - Frustration, irritation, and rage
- 😟 **Anxious** - Worry, stress, and nervousness
- 😌 **Calm** - Peace, tranquility, and balance
- 🤩 **Excited** - Enthusiasm, energy, and anticipation

## 🚀 Quick Start

### Prerequisites

- Python 3.8+ 
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the server:**
   ```bash
   python start.py
   ```
   
   Or use uvicorn directly:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

   🌐 **API will be available at:** http://localhost:8000  
   📖 **API Documentation:** http://localhost:8000/docs  
   🔄 **Health Check:** http://localhost:8000/health

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   🌐 **Application will be available at:** http://localhost:3000

## 📊 API Endpoints

### `POST /analyze`
Analyzes text for emotional content.

**Request:**
```json
{
  "text": "I'm feeling really happy today!"
}
```

**Response:**
```json
{
  "emotion": "Happy",
  "confidence": 0.85,
  "description": "You're experiencing positive emotions and joy!",
  "suggestions": [
    "Keep doing what makes you happy!",
    "Share your joy with others",
    "Practice gratitude"
  ]
}
```

### `GET /health`
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "message": "Emotion Reflection API is running"
}
```

## 🛠 Technology Stack

### Backend
- **FastAPI** - Modern, fast web framework for building APIs
- **Pydantic** - Data validation using Python type annotations
- **Uvicorn** - Lightning-fast ASGI server

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Modern styling with animations and gradients

## 🎨 Design Features

- **Glassmorphism** - Modern glass-like UI elements
- **Gradient Backgrounds** - Beautiful color transitions
- **Smooth Animations** - Engaging user interactions
- **Responsive Design** - Works on all device sizes
- **Accessibility** - WCAG compliant design

## 👨‍💻 Developed By

**Aditya Kulkarni**  
📧 aditya.kulkarnicse@gmail.com

---

**Made with ❤️ for emotional well-being**
