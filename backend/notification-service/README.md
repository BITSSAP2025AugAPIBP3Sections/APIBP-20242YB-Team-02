# Notification Service

Handles sending notifications for Flowcast.

## Endpoints

- `GET /` — Health check
- `POST /notify` — Send a notification (stub)

## Setup

```bash
npm install
npm start
```

## Docker

```bash
docker build -t notification-service .
docker run -p 3005:3005 notification-service
