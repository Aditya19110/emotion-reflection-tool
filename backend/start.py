"""
Startup script for the Emotion Reflection API
"""
import uvicorn
import sys
import os

def main():
    """Start the FastAPI server"""
    try:
        print("🚀 Starting Emotion Reflection API...")
        print("📍 Server will be available at: http://localhost:8000")
        print("📖 API Documentation: http://localhost:8000/docs")
        print("🔄 Health Check: http://localhost:8000/health")
        print("\n" + "="*50)
        
        uvicorn.run(
            "main:app",
            host="0.0.0.0",
            port=8000,
            reload=True,
            log_level="info"
        )
    except KeyboardInterrupt:
        print("\n👋 Server stopped by user")
    except Exception as e:
        print(f"❌ Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
