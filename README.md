````markdown
# AI StoryForge

> A Memory-Augmented Multimodal AI Storytelling System

AI StoryForge is an AI-powered storytelling platform that uses **Google Gemini** to generate personalized, context-aware stories based on user inputs, genres, and creative preferences.

## Features

- AI-powered story generation
- Genre and story preference selection
- Memory-augmented storytelling
- Personalized user experience
- Secure authentication
- Asynchronous story generation
- Persistent story storage
- Modern responsive UI
- Dockerized backend

## Tech Stack

### Frontend
- Next.js
- React
- Tailwind CSS

### Backend
- Python
- FastAPI
- Celery
- Redis

### AI
- Google Gemini API

### Database
- MongoDB

### Deployment
- Docker
- Docker Compose

## Architecture

```text
User
 │
 ▼
Next.js Frontend
 │
 ▼
FastAPI Backend
 │
 ├── Authentication
 ├── Story Management
 └── AI Generation
        │
        ▼
     Celery + Redis
        │
        ▼
   Google Gemini API
        │
        ▼
      MongoDB
        │
        ▼
 Generated Story
````

## Project Structure

```text
AI-StoryForge/
│
├── frontend/          # Next.js frontend
│
├── backend/           # FastAPI backend
│   ├── app/
│   ├── tasks/
│   ├── models/
│   └── ...
│
├── docker-compose.yml
├── .env.example
└── README.md
```

## How It Works

1. User signs up or logs into the platform.
2. User selects a genre and provides a story concept.
3. The request is sent to the FastAPI backend.
4. Celery places the story-generation task in the queue.
5. Redis acts as the message broker.
6. The task sends a structured prompt to Google Gemini.
7. The generated story is stored in MongoDB.
8. The frontend displays the generated story to the user.

## Environment Variables

Create a `.env` file and configure the required environment variables:

```env
GEMINI_API_KEY=your_gemini_api_key

MONGO_URI=your_mongodb_connection_string

REDIS_URL=redis://redis:6379/0

SECRET_KEY=your_secret_key
```

## Running with Docker

Clone the repository:

```bash
git clone https://github.com/your-username/AI-StoryForge.git
cd AI-StoryForge
```

Start the application:

```bash
docker compose up --build
```

Stop the application:

```bash
docker compose down
```

## Development

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Celery Worker

```bash
celery -A app.celery_app worker --loglevel=info
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Future Improvements

* Multimodal story generation
* AI-generated illustrations
* Story continuation using memory
* Character memory and persistent personalities
* Voice narration
* Story export to PDF
* Advanced personalization
* Multiple AI model support

## License

This project is currently developed for educational and research purposes.

```
```
