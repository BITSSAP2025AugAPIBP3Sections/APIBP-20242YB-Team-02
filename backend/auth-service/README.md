# Auth Service

Handles authentication and JWT token management for Flowcast.

## Endpoints

- `GET /` — Health check
- `POST /login` — Returns JWT token (stub)

## Setup

```bash
npm install
npm start
```

## Docker

```bash
docker build -t auth-service .
docker run -p 3000:3000 auth-service
