// Notification Service Entry Point
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

const app = express();
app.use(express.json());

// In-memory notifications array (mock DB)
let notifications = [];

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Notification Service',
    uptime: process.uptime(),
    notificationCount: notifications.length,
    timestamp: new Date().toISOString()
  });
});

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// POST /notify - Send a notification (stub)
app.post('/notify', (req, res) => {
  const { to, message } = req.body;
  if (!to || !message) {
    return res.status(400).json({ error: 'Missing recipient or message' });
  }
  const id = notifications.length ? notifications[notifications.length - 1].id + 1 : 1;
  const notification = { id, to, message, sentAt: new Date().toISOString() };
  notifications.push(notification);
  console.log(`[LOG] Notification sent: ${JSON.stringify(notification)}`);
  res.status(201).json({ notification });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Notification Service listening on port ${PORT}`);
});
