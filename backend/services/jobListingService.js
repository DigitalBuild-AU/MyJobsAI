const JobListing = require('../models/JobListing');
const UserActivity = require('../models/UserActivity'); // Importing UserActivity model

const addJobListing = async (jobListingData) => {
    const newJobListing = new JobListing(jobListingData);
    try {
        const savedJobListing = await newJobListing.save();
        console.log(`Job listing added: ${savedJobListing.jobTitle}`);
        return savedJobListing;
    } catch (error) {
        console.error(`Error adding job listing: ${error.stack}`);
        throw error;
    }
};

const findAllJobListings = async () => {
    try {
        const listings = await JobListing.find({});
        console.log(`Fetched all job listings, count: ${listings.length}`);
        return listings;
    } catch (error) {
        console.error(`Error fetching all job listings: ${error.stack}`);
        throw error;
    }
};

const findJobListingById = async (id) => {
    try {
        const listing = await JobListing.findById(id);
        if (!listing) {
            console.log(`Job listing with ID ${id} not found.`);
        } else {
            console.log(`Fetched job listing: ${listing.jobTitle}`);
        }
        return listing;
    } catch (error) {
        console.error(`Error fetching job listing by ID: ${error.stack}`);
        throw error;
    }
};

const updateJobListingById = async (id, updateData) => {
    try {
        const updatedListing = await JobListing.findByIdAndUpdate(id, updateData, { new: true });
        if (updatedListing) {
            console.log(`Job listing updated: ${updatedListing.jobTitle}`);
        } else {
            console.log(`No job listing found with ID to update: ${id}`);
        }
        return updatedListing;
    } catch (error) {
        console.error(`Error updating job listing: ${error.stack}`);
        throw error;
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
        console.error(`Error deleting job listing: ${error.stack}`);
        throw error;
    }
};

const calculateAnalytics = async () => {
  try {
    const totalApplications = await UserActivity.countDocuments({ activityType: 'Application' });
    const interviewsScheduled = await UserActivity.countDocuments({ activityType: 'Interview' });
    const offersReceived = await UserActivity.countDocuments({ activityType: 'Offer' });

    const avgResponseTime = await UserActivity.aggregate([
      { $match: { activityType: 'Interview' } },
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
      totalApplications,
      interviewsScheduled,
      offersReceived,
      avgResponseTime: avgResponseTime.length ? avgResponseTime[0].avgResponseInDays.toFixed(2) : null
    };
  } catch (error) {
    console.error(`Error calculating analytics: ${error.stack}`);
    throw error;
  }
};

module.exports = {
    addJobListing,
    findAllJobListings,
    findJobListingById,
    updateJobListingById,
    deleteJobListingById,
    calculateAnalytics // Export the analytics function
};