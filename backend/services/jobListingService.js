const JobListing = require('../models/JobListing');
const UserActivity = require('../models/UserActivity'); // Importing UserActivity model

const addJobListing = async (jobListingData) => {
    const newJobListing = new JobListing(jobListingData);
    try {
        const savedJobListing = await newJobListing.save();
        console.log(`Job listing added: ${savedJobListing.jobTitle}`);
        return savedJobListing;
    } catch (error) {
        return { error: `Error adding job listing: ${error.message}` };
    }
};

const findAllJobListings = async () => {
/**
 * Adds a new job listing to the database.
 * @param {Object} jobListingData - The data for the new job listing.
 * @returns {Object} The saved job listing object or an error object if the operation fails.
 */
    try {
        const listings = await JobListing.find({});
        console.log(`Fetched all job listings, count: ${listings.length}`);
        return listings;
    } catch (error) {
        return { error: `Error fetching all job listings: ${error.message}` };
    }
};

const findJobListingById = async (id) => {
/**
 * Retrieves all job listings from the database.
 * @returns {Array} An array of job listings or an error object if the operation fails.
 */
    try {
        const listing = await JobListing.findById(id);
        if (!listing) {
            console.log(`Job listing with ID ${id} not found.`);
        } else {
            console.log(`Fetched job listing: ${listing.jobTitle}`);
        }
        return listing;
    } catch (error) {
        return { error: `Error fetching job listing by ID: ${error.message}` };
    }
};

const updateJobListingById = async (id, updateData) => {
/**
 * Finds a job listing by its ID.
 * @param {String} id - The ID of the job listing to find.
 * @returns {Object|null} The found job listing object or null if not found, or an error object if the operation fails.
 */
    try {
        const updatedListing = await JobListing.findByIdAndUpdate(id, updateData, { new: true });
        if (updatedListing) {
            console.log(`Job listing updated: ${updatedListing.jobTitle}`);
        } else {
            console.log(`No job listing found with ID to update: ${id}`);
        }
        return updatedListing;
    } catch (error) {
        return { error: `Error updating job listing: ${error.message}` };
    }
};

const deleteJobListingById = async (id) => {
    try {
        const deletedListing = await JobListing.findByIdAndDelete(id);
        if (deletedListing) {
            console.log(`Job listing deleted: ${deletedListing.jobTitle}`);
        } else {
            console.log(`No job listing found with ID to delete: ${id}`);
        }
        return deletedListing;
    } catch (error) {
        return { error: `Error deleting job listing: ${error.message}` };
    }
};

/**
 * Calculates analytics based on user activities.
 * This function aggregates data from the UserActivity model to calculate the total number of job applications submitted, interviews scheduled, offers received, and the average response time in days from application to interview.
 * It does not take any parameters.
 * @returns {Object} An object containing the calculated analytics data: totalApplications, interviewsScheduled, offersReceived, and avgResponseTime (average response time in days, formatted to two decimal places or null if not applicable).
 */
const calculateAnalytics = async () => {
  try {
    const totalApplications = await UserActivity.countDocuments({ activityType: 'Application' });
    const interviewsScheduled = await UserActivity.countDocuments({ activityType: 'Interview' });
    const offersReceived = await UserActivity.countDocuments({ activityType: 'Offer' });

    const avgResponseTime = await UserActivity.aggregate([
      { $match: { activityType: 'Interview' } },
      { $hint: 'activityType_1' },
      { $group: {
          _id: null,
          avgResponse: { $avg: { $subtract: ["$date", "$createdAt"] } }
      }},
      { $project: {
          _id: 0,
          avgResponseInDays: { $divide: ["$avgResponse", 1000*60*60*24] }
      }}
    ]);

    console.log('Analytics calculated successfully.');
    return {

    return {
      totalApplications,
      interviewsScheduled,
/**
 * Calculates analytics based on user activities.
 * @returns {Object} An object containing analytics data or an error object if the operation fails.
 */
    console.log('Analytics calculated successfully.');
    return {

    return {
      totalApplications,
      interviewsScheduled,
/**
 * Deletes a job listing by its ID.
 * @param {String} id - The ID of the job listing to delete.
 * @returns {Object|null} The deleted job listing object or null if not found, or an error object if the operation fails.
 */
      offersReceived,
      avgResponseTime: avgResponseTime.length ? avgResponseTime[0].avgResponseInDays.toFixed(2) : null
    };
  } catch (error) {
        return { error: `Error calculating analytics: ${error.message}` };
  }
};

module.exports = {
    addJobListing,
    findAllJobListings,
    findJobListingById,
    updateJobListingById,
    deleteJobListingById,
    // Removed calculateAnalytics as it's now handled in analyticsService.js
};