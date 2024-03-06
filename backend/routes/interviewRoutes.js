const express = require('express');
const Interview = require('../models/Interview');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const interview = new Interview(req.body);
    await interview.save();
    return res.status(201).json(interview);
  } catch (error) {
    console.error(`Interview creation failed: ${error.stack}`);
    res.status(400).send(error.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const interviews = await Interview.find({});
    return res.status(200).json(interviews);
  } catch (error) {
    console.error(`Fetching interviews failed: ${error.stack}`);
    res.status(500).send(error.message);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const interview = await Interview.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!interview) {
      return res.status(404).send('Interview not found');
    }
    return res.status(200).json(interview);
  } catch (error) {
    console.error(`Interview update failed: ${error.stack}`);
    res.status(400).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const interview = await Interview.findByIdAndDelete(req.params.id);
    if (!interview) {
      return res.status(404).send('Interview not found');
    }
    return res.status(204).send();
  } catch (error) {
    console.error(`Interview deletion failed: ${error.stack}`);
    res.status(500).send(error.message);
  }
});

module.exports = router;