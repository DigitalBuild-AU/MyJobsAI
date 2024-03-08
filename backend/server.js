const express = require('express');
require('dotenv').config({ path: './backend/.env' }); // Ensure the correct path to your .env file
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const jobListingsRouter = require('./routes/jobListings');
const authRoutes = require('./routes/authRoutes');
const gptRoutes = require('./routes/gptRoutes'); // Import GPT routes
const emailRoutes = require('./routes/emailRoutes'); // Import Email routes
const interviewRoutes = require('./routes/interviewRoutes'); // Import Interview routes
const analyticsRoutes = require('./routes/analyticsRoutes'); // Analytics routes import
const fetchJobInfoRoutes = require('./routes/fetchJobInfoRoutes'); // Import Fetch Job Info routes
const { debugLog } = require('./utils/debugLogger');
const dashboardRoutes = require('./routes/dashboardRoutes'); // Import Dashboard routes

app.use(express.json());

debugLog('Setting up middleware.');
app.use((req, res, next) => {
  debugLog(`Request for static file detected: ${req.path}`);
  next();
});

// Serve frontend static files
app.use(express.static('frontend'));
debugLog('Static files middleware for frontend setup completed.');

// Serve static files like 'quotes.json' from the 'public' directory
app.use(express.static('public'));
debugLog('Static files middleware for public directory setup completed.');

debugLog('Connecting to MongoDB at URI: ' + process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => debugLog('MongoDB Connected'))
  .catch(err => {
    debugLog('MongoDB connection error:', err, true); // Ensure detailed logging
    process.exit(1); // Ensure the process exits on database connection failure
  });

app.get('/', (req, res) => {
  debugLog('Welcome to MyJobsAI');
  res.send('Welcome to MyJobsAI'); // gpt_pilot_debugging_log
});

app.use('/api/joblistings', jobListingsRouter);
app.use('/api/auth', authRoutes);
app.use('/api/gpt', gptRoutes); // Setup GPT routes
app.use('/api/email', emailRoutes); // Setup Email routes
app.use('/api/interviews', interviewRoutes); // Setup Interview routes
app.use('/api', analyticsRoutes); // Setup Analytics routes
app.use('/api/fetch-job-info', fetchJobInfoRoutes); // Setup Fetch Job Info routes
app.use('/api/dashboard', dashboardRoutes); // Setup Dashboard routes

app.listen(PORT, () => {
  debugLog(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  debugLog(`Server start-up error: ${err}, Stack: ${err.stack}`, err, true); // Ensure detailed logging for server start-up errors
});