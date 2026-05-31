# Technical Assessment Report: Full-Stack Event Invitation System

This repository hosts a state-of-the-art, fully responsive corporate event platform designed for **Cogent Solutions**, co-organized by **Accelalpha & Oracle**. It combines a premium React/Next.js frontend in a Turborepo workspace and a robust FastAPI backend featuring a custom Retrieval-Augmented Generation (RAG) SCM schedule matching pipeline.

---

## Live Gateways (Hosted URLs)

- **Live Frontend Interface (Vercel)**:
  [https://accelalpha-oracle-event-frontend.vercel.app/](https://accelalpha-oracle-event.vercel.app) _(Note: If Vercel generated a unique project name like `accelalpha-oracle-event-web.vercel.app` upon deployment, you can access that link directly.)_
- **Live Running Backend API (Render)**:
  [https://accelalpha-oracle-event.onrender.com](https://accelalpha-oracle-event.onrender.com)
- **Generate Invitation Endpoint (RAG POST)**:
  [https://accelalpha-oracle-event.onrender.com](https://accelalpha-oracle-event.onrender.com/api/v1/generate-invitation)

---

## Local Setup Guide

Follow these simple terminal commands to clone the repository, install dependencies, and run both modules locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Kavindacc/accelalpha-oracle-event.git
cd accelalpha-oracle-event
```

### 2. Configure & Run Python Backend

The Python backend uses FastAPI to run the SCM RAG pipeline and matches visitor challenges against `agenda.txt`.

```bash
# Navigate to backend
cd backend

# Create and activate virtual environment
python -m venv venv
# On Windows (PowerShell):
.\venv\Scripts\Activate.ps1
# On macOS/Linux:
source venv/bin/activate

# Install required dependencies
pip install -r requirements.txt

# Configure your environment variables (.env)
# Create a .env file based on .env.example and add your GEMINI_API_KEY / OPENAI_API_KEY
cp .env.example .env

# Run the FastAPI server locally
uvicorn app.main:app --reload
```

_The backend API documentation will be available locally at `http://127.0.0.1:8000/docs`._

### 3. Configure & Run Next.js Frontend

The frontend uses Next.js App Router, Tailwind CSS v4, and Lucide React.

```bash
# Open a new terminal and navigate to frontend
cd ../frontend

# Install monorepo dependencies
npm install

# Run the local Next.js development server
npm run dev
```

_The interactive web interface will be available locally at `http://localhost:3000`._

---

## Content Creation Check: LinkedIn Promotional Post

Copy and paste this high-converting, 3-sentence promotional post introducing this interactive system to corporate event planners:

> Attention corporate conference planners: the future of high-value attendee engagement has officially arrived! We have designed and built a first-of-its-kind interactive event platform that uses GenAI SCM logic to match visitor focus challenges directly to conference agendas, drafting custom B2B invitations live. Say goodbye to static landing pages and elevate your next high-volume corporate summit into a personalized, high-conversion executive journey today.

---

## LLM Prompt & Anti-Hallucination Strategy

To guarantee absolute data integrity and strictly prevent the LLM from inventing or hallucinating sessions, speakers, or timings, we implemented a layered defensive prompting strategy:

1. **Deterministic Grounding**: The FastAPI backend parses the local `agenda.txt` file and extracts only the relevant matching session block as a static text string.
2. **Context-Locked Roleplaying**: In the system prompt, the LLM is restricted to act strictly as a _GCC Schedule Registrar_. The model is given a single, non-negotiable instruction: _"You are strictly a formatting engine. You must write an invitation based ONLY on the session data supplied below."_
3. **Strict Negative Constraints**: The prompt explicitly declares: _"Do NOT under any circumstances invent or extrapolate session titles, change schedule timings, fabricate speakers, or add extra days not present in the provided session data. If a detail is missing, omit it entirely rather than hallucinating."_
4. **Static Verification Fallback**: The response returns a validated JSON structure, ensuring the frontend only displays the exact matched session name logged on the backend server.
