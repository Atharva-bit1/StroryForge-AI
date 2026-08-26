<div align="center">

# ✦ AI StoryForge

### A Memory-Augmented Multimodal AI Storytelling System

<p>
  <i>Transform ideas into immersive, personalized stories with the power of Generative AI.</i>
</p>

<br/>

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
<img src="https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=celery&logoColor=white" />
<img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />

<br/><br/>

<a href="#-features">Features</a>
&nbsp; • &nbsp;
<a href="#-architecture">Architecture</a>
&nbsp; • &nbsp;
<a href="#-tech-stack">Tech Stack</a>
&nbsp; • &nbsp;
<a href="#-installation">Installation</a>
&nbsp; • &nbsp;
<a href="#-roadmap">Roadmap</a>

</div>

---

## ✦ About The Project

**AI StoryForge** is a memory-augmented AI storytelling platform designed to turn simple ideas into rich, personalized narratives.

Users can provide a story concept, choose a genre, define creative preferences, and let **Google Gemini** transform their ideas into complete stories.

The system combines:

- 🧠 Memory-augmented context
- ✨ Generative AI
- ⚡ Asynchronous task processing
- 🔐 User authentication
- 💾 Persistent story storage
- 🐳 Containerized deployment

The goal is to create an intelligent storytelling experience where stories become more **personalized, contextual, and immersive** over time.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🧠 Memory-Augmented Storytelling

Maintain relevant context and previous story information to generate more consistent and personalized narratives.

</td>

<td width="50%">

### ✨ AI Story Generation

Use Google's Gemini models to transform user ideas and creative preferences into complete stories.

</td>
</tr>

<tr>
<td width="50%">

### ⚡ Async AI Processing

Celery and Redis handle long-running AI generation tasks without blocking the main application.

</td>

<td width="50%">

### 🔐 Authentication

Secure user authentication allows users to maintain their own stories and personalized experience.

</td>
</tr>

<tr>
<td width="50%">

### 💾 Persistent Storage

MongoDB stores users, generated stories, preferences, and contextual information.

</td>

<td width="50%">

### 🐳 Dockerized

The backend infrastructure is containerized for consistent development and deployment.

</td>
</tr>
</table>

---

## 🎨 How It Works

```text
                    ┌──────────────────────┐
                    │        USER          │
                    │                      │
                    │  Genre + Idea +      │
                    │  Creative Preferences│
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    NEXT.JS FRONTEND  │
                    │                      │
                    │  Story Configuration │
                    │  Authentication      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    FASTAPI BACKEND   │
                    │                      │
                    │  API + Authentication│
                    │  Story Management    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    CELERY + REDIS    │
                    │                      │
                    │  Background Task     │
                    │     Processing       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    GOOGLE GEMINI     │
                    │                      │
                    │   AI Story Creation  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       MONGODB        │
                    │                      │
                    │ Users + Stories +    │
                    │ Context + Memory     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    GENERATED STORY   │
                    │                      │
                    │  Personalized AI     │
                    │      Narrative       │
                    └──────────────────────┘
