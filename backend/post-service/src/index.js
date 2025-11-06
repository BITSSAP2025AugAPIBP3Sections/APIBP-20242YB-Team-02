// Post Service Entry Point
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Post Service is running');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Example endpoint to create a post (stub)
app.post('/posts', (req, res) => {
  // Stub: Replace with real post creation logic
  res.json({ message: 'Post created', data: req.body });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Post Service listening on port ${PORT}`);
});
