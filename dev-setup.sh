#!/bin/bash

# Emotion Reflection Tool - Development Setup Script
# This script sets up and runs both frontend and backend

echo "🚀 Emotion Reflection Tool - Development Setup"
echo "=============================================="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command_exists python3; then
    echo "❌ Python 3 is not installed. Please install Python 3.8 or higher."
    exit 1
fi

if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js 16 or higher."
    exit 1
fi

if ! command_exists npm; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ All prerequisites found!"

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
BACKEND_DIR="$SCRIPT_DIR/backend"
FRONTEND_DIR="$SCRIPT_DIR/frontend"

# Backend setup
echo ""
echo "🐍 Setting up backend..."
cd "$BACKEND_DIR"

if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

echo "Activating virtual environment..."
source venv/bin/activate

echo "Installing backend dependencies..."
pip install -r requirements.txt

echo "✅ Backend setup complete!"

# Frontend setup
echo ""
echo "⚛️  Setting up frontend..."
cd "$FRONTEND_DIR"

if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
else
    echo "Frontend dependencies already installed!"
fi

echo "✅ Frontend setup complete!"

# Start services
echo ""
echo "🚀 Starting services..."
echo "Backend will start on: http://localhost:8000"
echo "Frontend will start on: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all services"

# Start backend in background
cd "$BACKEND_DIR"
source venv/bin/activate
python start.py &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend
cd "$FRONTEND_DIR"
npm start &
FRONTEND_PID=$!

# Function to cleanup background processes
cleanup() {
    echo ""
    echo "🛑 Stopping services..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "👋 All services stopped!"
    exit 0
}

# Set up trap to cleanup on script exit
trap cleanup INT TERM

# Wait for user to stop
wait
