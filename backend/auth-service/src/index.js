
// Auth Service Entry Point
const express = require('express');
const jwt = require('jsonwebtoken');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Auth Service is running');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Example login endpoint (stub)
app.post('/login', (req, res) => {
  // Stub: Replace with real authentication logic
  const token = jwt.sign({ user: 'demo' }, 'secret', { expiresIn: '1h' });
  res.json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Auth Service listening on port ${PORT}`);
});
