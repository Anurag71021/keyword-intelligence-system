# Keyword Intelligence Platform

AI-powered SEO intelligence dashboard built with modern full-stack technologies.

## Features

- Google autocomplete keyword mining
- Keyword metrics via DataForSEO
- CPC & competition analytics
- PostgreSQL database integration
- Modern SaaS dashboard UI
- Dark / Light mode
- Responsive design
- Animated UX

---

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

### Backend
- FastAPI
- PostgreSQL
- SQLAlchemy
- DataForSEO API

---

## Setup

### Backend

```bash
cd backend

pip install -r requirements.txt

python3 -m uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Create `.env` inside backend:

```env
DATABASE_URL=postgresql://USERNAME:PASSWORD@localhost:5432/keywords

DATAFORSEO_LOGIN=your_login
DATAFORSEO_PASSWORD=your_password
```

---


## Author

Anurag
