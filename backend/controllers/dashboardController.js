const UserActivity = require('../models/UserActivity');
const JobListing = require('../models/JobListing');

exports.getDashboardSummary = async (req, res) => {
  try {
    const totalApplications = await UserActivity.countDocuments({ activityType: 'Application' });
    const interviewsScheduled = await UserActivity.countDocuments({ activityType: 'Interview' });
    const offersReceived = await UserActivity.countDocuments({ activityType: 'Offer' });
    res.json({ applicationsSent: totalApplications, interviewsScheduled, offersReceived });
  } catch (error) {
    console.error(`Dashboard summary error: ${error}`, error.stack);
    res.status(500).send({ message: 'Error fetching dashboard summary' });
  }
};