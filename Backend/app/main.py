from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.auth import router as auth_router
from app.core.database import client, initialize_database


@asynccontextmanager
async def lifespan(app: FastAPI):
    await initialize_database()

    yield

    await client.close()


app = FastAPI(
    title="StoryForge AI API",
    description="Backend API for StoryForge AI",
    version="1.0.0",
    lifespan=lifespan,
)


app.include_router(auth_router)


@app.get("/")
async def root():
    return {
        "message": "StoryForge AI API is running"
    }


@app.get("/health")
async def health_check():
    try:
        await client.admin.command("ping")

        return {
            "status": "healthy",
            "database": "connected",
        }

    except Exception as exc:
        return {
            "status": "unhealthy",
            "database": "disconnected",
            "error": str(exc),
        }