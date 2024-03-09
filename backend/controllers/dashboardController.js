const UserActivity = require('../models/UserActivity');
const JobListing = require('../models/JobListing');

/**
 * Retrieves a summary of user activities including total applications, interviews scheduled, and offers received.
 * @param {Object} req - The request object containing user data.
 * @param {Object} res - The response object used to return data and messages.
 * @returns {Object} JSON object containing the counts of applications, interviews, and offers.
 */
exports.getDashboardSummary = async (req, res) => {
  try {
    const totalApplications = await UserActivity.countDocuments({ activityType: 'Application' });
    const interviewsScheduled = await UserActivity.countDocuments({ activityType: 'Interview' });
    const offersReceived = await UserActivity.countDocuments({ activityType: 'Offer' });
    res.json({ applicationsSent: totalApplications, interviewsScheduled, offersReceived });
  } catch (error) {
    const { logError } = require('../utils/logger');
    logError(error);
    res.status(500).send({ message: 'Error fetching dashboard summary' });
  }
};
const fetchDashboardData = async () => {
  const totalApplications = await UserActivity.countDocuments({ activityType: 'Application' });
  const interviewsScheduled = await UserActivity.countDocuments({ activityType: 'Interview' });
  const offersReceived = await UserActivity.countDocuments({ activityType: 'Offer' });
  return { totalApplications, interviewsScheduled, offersReceived };
};

exports.getDashboardSummary = async (req, res) => {
  try {
    const { totalApplications, interviewsScheduled, offersReceived } = await fetchDashboardData();
    res.json({ applicationsSent: totalApplications, interviewsScheduled, offersReceived });
  } catch (error) {
    logError(error);
    res.status(500).send({ message: 'Error fetching dashboard summary' });
  }
};
/**
 * Fetches dashboard data including total applications, interviews scheduled, and offers received.
 * @returns {Object} An object containing counts of total applications, interviews scheduled, and offers received.
 */
const fetchDashboardData = async () => {