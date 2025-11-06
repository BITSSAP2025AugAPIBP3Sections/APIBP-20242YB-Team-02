
// Scheduler Service Entry Point
const express = require('express');
const cron = require('node-cron');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Scheduler Service is running');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Example scheduled task (stub)
cron.schedule('* * * * *', () => {
  console.log('Scheduled task executed every minute');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Scheduler Service listening on port ${PORT}`);
});
