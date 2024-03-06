const express = require('express');
const { calculateAnalytics } = require('../services/jobListingService');
const router = express.Router();

router.get('/analytics', async (req, res) => {
  try {
    const analyticsData = await calculateAnalytics();
    res.json(analyticsData);
  } catch (error) {
    console.error(`Error fetching analytics data: ${error.stack}`);
    res.status(500).send({ error: 'Failed to fetch analytics data.' });
  }
});

module.exports = router;
