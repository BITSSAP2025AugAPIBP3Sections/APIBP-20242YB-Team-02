
// Analytics Service Entry Point
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Analytics Service is running');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Example endpoint to fetch analytics (stub)
app.get('/metrics', (req, res) => {
  // Stub: Replace with real analytics logic
  res.json({ metrics: { likes: 0, shares: 0, comments: 0 } });
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Analytics Service listening on port ${PORT}`);
});
