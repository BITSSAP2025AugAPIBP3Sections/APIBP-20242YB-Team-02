# Social Integration Service

Handles integration with external social media APIs for Flowcast.

## Endpoints

- `GET /` — Health check
- `POST /integrate` — Stub endpoint for integration requests

## Setup

```bash
npm install
npm start
```

## Docker

```bash
docker build -t social-integration-service .
docker run -p 3003:3003 social-integration-service
