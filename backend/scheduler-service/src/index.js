
// Scheduler Service Entry Point
const express = require('express');
const cron = require('node-cron');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

const app = express();
app.use(express.json());

// In-memory job storage (mock DB)
let jobs = [
  {
    id: 1,
    name: 'Stub Task',
    schedule: '* * * * *',
    status: 'scheduled',
    history: []
  }
];

// Enhanced health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Scheduler Service',
    uptime: process.uptime(),
    jobCount: jobs.length,
    runningJobs: jobs.filter(j => j.status === 'scheduled').length,
    timestamp: new Date().toISOString()
  });
});

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Schedule all jobs on startup
jobs.forEach(job => {
  if (job.status === 'scheduled') {
    cron.schedule(job.schedule, () => {
      job.status = 'completed';
      job.history.push({ event: 'completed', at: new Date().toISOString() });
      // Mock RabbitMQ publish
      console.log(`[RabbitMQ] Published job: ${JSON.stringify(job)}`);
    });
  }
});
