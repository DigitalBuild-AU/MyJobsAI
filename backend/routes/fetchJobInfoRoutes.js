const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

router.post('/', async (req, res) => {
    const { url } = req.body;

    try {
        if (!url) {
            return res.status(400).json({ error: 'URL is required.' });
        }

        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const jobTitle = $('h1').text().trim() || 'Not found';
        const company = $('h2').text().trim() || 'Not found';
        const location = $('h3').text().trim() || 'Not found';
        const jobDescription = $('p.description').text().trim() || 'Not found';

        res.json({
            jobTitle,
            company,
            location,
            jobDescription
        });

    } catch (error) {
        console.error(`Failed to fetch job info: ${error.stack}`);
        res.status(500).json({ error: 'Failed to fetch job information.' });
    }
});

module.exports = router;