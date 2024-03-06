const express = require('express');
const router = express.Router();
const { validateJobListing, validateJobListingUpdate } = require('../middleware/validateRequest');
const {
    addJobListing,
    findAllJobListings,
    findJobListingById,
    updateJobListingById,
    deleteJobListingById
} = require('../services/jobListingService');
const JobListing = require('../models/JobListing'); // Required for filtering operation

router.get('/filter', async (req, res) => {
  const { page = 0, limit = 10, status, company } = req.query;
  try {
    let query = {};
    if (status) query.status = status;
    if (company) query.company = new RegExp(company, 'i');

    const listings = await JobListing.find(query)
                                     .limit(limit * 1)
                                     .skip(page * limit)
                                     .exec();
    const count = await JobListing.countDocuments(query);

    res.json({
      listings,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page)
    });
    console.log(`Filtered job listings fetched successfully with status: ${status}, company: ${company}, page: ${page}, limit: ${limit}`);
  } catch (error) {
    console.error(`Error processing filter request: ${error}`, error.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', validateJobListing, async (req, res) => {
    try {
        const savedListing = await addJobListing(req.body);
        console.log(`Job listing added: ${JSON.stringify(savedListing)}`); // gpt_pilot_debugging_log
        res.status(201).json(savedListing);
    } catch (error) {
        console.error(`Add job listing failed with error: ${error.stack}`); // gpt_pilot_debugging_log
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const listings = await findAllJobListings();
        console.log(`Fetched job listings: ${JSON.stringify(listings)}`); // gpt_pilot_debugging_log
        res.json(listings);
    } catch (error) {
        console.error(`Fetching job listings failed with error: ${error.stack}`); // gpt_pilot_debugging_log
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const listing = await findJobListingById(req.params.id);
        if (!listing) {
            console.log(`Listing not found for ID: ${req.params.id}`); // gpt_pilot_debugging_log
            return res.status(404).json({ error: 'Listing not found' });
        }
        console.log(`Fetched job listing: ${JSON.stringify(listing)}`); // gpt_pilot_debugging_log
        res.json(listing);
    } catch (error) {
        console.error(`Fetching job listing failed with error: ${error.stack}`); // gpt_pilot_debugging_log
        res.status(500).json({ error: error.message });
    }
});

router.patch('/:id', validateJobListingUpdate, async (req, res) => {
    try {
        console.log(`Attempting to update job listing with ID: ${req.params.id} with data: ${JSON.stringify(req.body)}`); // gpt_pilot_debugging_log
        const updatedListing = await updateJobListingById(req.params.id, req.body);
        if (!updatedListing) {
            console.log(`Listing not found for update with ID: ${req.params.id}`); // gpt_pilot_debugging_log
            return res.status(404).json({ error: 'Listing not found' });
        }
        console.log(`Updated job listing: ${JSON.stringify(updatedListing)}`); // gpt_pilot_debugging_log
        res.json(updatedListing);
    } catch (error) {
        console.error(`Updating job listing failed with error: ${error.stack}`); // gpt_pilot_debugging_log
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedListing = await deleteJobListingById(req.params.id);
        if (!deletedListing) {
            console.log(`Listing not found for deletion with ID: ${req.params.id}`); // gpt_pilot_debugging_log
            return res.status(404).json({ error: 'Listing not found' });
        }
        console.log(`Deleted job listing: ${JSON.stringify(deletedListing)}`); // gpt_pilot_debugging_log
        res.json({ message: 'Listing deleted successfully' });
    } catch (error) {
        console.error(`Deleting job listing failed with error: ${error.stack}`); // gpt_pilot_debugging_log
        res.status(500).json({ error: error.message });
    }
});

// Added new GET route for filtering job listings
router.get('/filter', async (req, res) => {
  const { location, jobType, keywords } = req.query;
  let queryObj = {};
  if (location) queryObj['location'] = { $regex: location, $options: 'i' };
  if (jobType) queryObj['jobType'] = jobType;
  if (keywords) {
    queryObj['$text'] = { $search: keywords }; // Ensure JobListing schema has a text index for this to work
  }
  try {
    const filteredListings = await JobListing.find(queryObj);
    console.log(`Filtered job listings fetched successfully: ${JSON.stringify(filteredListings)}`); // gpt_pilot_debugging_log
    res.json(filteredListings);
  } catch (error) {
    console.error(`Failed to fetch filtered job listings: ${error.message}, Stack: ${error.stack}`); // gpt_pilot_debugging_log
    res.status(500).json({ error: 'Failed to fetch filtered job listings.' });
  }
});

module.exports = router;