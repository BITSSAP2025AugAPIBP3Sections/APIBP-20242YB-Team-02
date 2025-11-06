// Post Service Entry Point
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

const app = express();
app.use(express.json());

// In-memory posts array (mock DB)
let posts = [];
// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Post Service',
    uptime: process.uptime(),
    postCount: posts.length,
    timestamp: new Date().toISOString()
  });
});


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// POST /posts - Create a new post (stub)
app.post('/posts', (req, res) => {
  const { content, author } = req.body;
  if (!content || !author) {
    return res.status(400).json({ error: 'Missing content or author' });
  }
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  const post = { id, content, author, createdAt: new Date().toISOString() };
  posts.push(post);
  console.log(`[LOG] Post created: ${JSON.stringify(post)}`);
  res.status(201).json({ post });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Post Service listening on port ${PORT}`);
});
