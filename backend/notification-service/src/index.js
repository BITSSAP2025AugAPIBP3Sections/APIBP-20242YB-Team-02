
// Notification Service Entry Point
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Notification Service is running');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Example endpoint to send notification (stub)
app.post('/notify', (req, res) => {
  // Stub: Replace with real notification logic
  res.json({ message: 'Notification sent', data: req.body });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Notification Service listening on port ${PORT}`);
});
