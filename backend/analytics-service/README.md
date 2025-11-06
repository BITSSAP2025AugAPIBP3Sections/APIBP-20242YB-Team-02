# Analytics Service

Aggregates and provides engagement metrics for Flowcast.

## Endpoints

- `GET /` — Health check
- `GET /metrics` — Fetch engagement metrics (stub)

## Setup

```bash
npm install
npm start
```

## Docker

```bash
docker build -t analytics-service .
docker run -p 3004:3004 analytics-service
