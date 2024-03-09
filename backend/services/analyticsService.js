/**
 * Calculates analytics based on user activities, including total applications, interviews, offers, and average response time.
 * @returns {Object} An object containing analytics data: total applications, interviews scheduled, offers received, and average response time in days.
 */
const UserActivity = require('../models/UserActivity');

async function calculateAnalytics() {
  const [totalApplications, interviewsScheduled, offersReceived, avgResponseData] = await Promise.all([
    UserActivity.countDocuments({ activityType: 'Application' }),
    UserActivity.countDocuments({ activityType: 'Interview' }),
    UserActivity.countDocuments({ activityType: 'Offer' }),
    UserActivity.aggregate([
      { $match: { activityType: 'Interview' } },
      { $group: {
          _id: null,
          avgResponse: { $avg: { $subtract: ["$date", "$createdAt"] } }
      }},
      { $project: {
          _id: 0,
          avgResponseInDays: { $divide: ["$avgResponse", 1000*60*60*24] }
      }}
    ])
  ]);

  const avgResponseTime = avgResponseData.length ? avgResponseData[0].avgResponseInDays.toFixed(2) : null;

  return {
    totalApplications,
    interviewsScheduled,
    offersReceived,
    avgResponseTime
  };
}

module.exports = {
  calculateAnalytics
};
