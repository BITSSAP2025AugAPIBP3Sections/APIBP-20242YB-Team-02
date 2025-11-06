# Post Service

Handles creation and management of social media posts for Flowcast.

## Endpoints

- `GET /` — Health check
- `POST /posts` — Create a new post (stub)

## Setup

```bash
npm install
npm start
```

## Docker

```bash
docker build -t post-service .
docker run -p 3001:3001 post-service
