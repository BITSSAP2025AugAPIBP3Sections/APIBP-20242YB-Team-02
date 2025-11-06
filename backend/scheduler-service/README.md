# Scheduler Service

Handles scheduling of posts and tasks for Flowcast.

## Endpoints

- `GET /` — Health check

## Scheduled Tasks

- Executes a stub task every minute (see `src/index.js`).

## Setup

```bash
npm install
npm start
```

## Docker

```bash
docker build -t scheduler-service .
docker run -p 3002:3002 scheduler-service
