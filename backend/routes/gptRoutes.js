const express = require('express');
const dotenv = require('dotenv');
const { generateCvCustomizationSuggestions } = require('../utils/gptHelper');

dotenv.config({ path: './backend/.env' });

const router = express.Router();
const openai = new OpenAI();

// CV Suggestions Route using Chat Completions
router.post('/cv_suggestions', async (req, res) => {
  const { jobDescription, userCV } = req.body;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output a list of suggestions for CV improvement in plain text."
        },
        {
          role: "user",
          content: `Extract keywords from this job description and compare to a CV.\nJob Description: ${jobDescription}\nUser CV: ${userCV}`
        }
      ],
      model: "gpt-3.5-turbo",
    });
    console.log("CV suggestions generated successfully."); // gpt_pilot_debugging_log
    res.json({ suggestions: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error(`Error processing CV suggestion request: ${error.message}, Stack: ${error.stack}`); // gpt_pilot_debugging_log
    res.status(500).json({ error: "Failed to generate CV suggestions." });
  }
});

// Cover Letter Route using Chat Completions
router.post('/cover_letter', async (req, res) => {
  const { jobDescription, userName, userSkills, userExperience } = req.body;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output a personalized cover letter for a job application in plain text."
        },
        {
          role: "user",
          content: `Please generate a personalized cover letter using the provided details.\nJob Description: ${jobDescription}\nName: ${userName}\nSkills: ${userSkills}\nExperience: ${userExperience}`
        }
      ],
      model: "gpt-3.5-turbo",
    });
    console.log("Cover letter generated successfully."); // gpt_pilot_debugging_log
    res.json({ coverLetter: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error(`Error generating cover letter: ${error.message}, Stack: ${error.stack}`); // gpt_pilot_debugging_log
    res.status(500).json({ error: "Failed to generate cover letter." });
  }
});

module.exports = router;
// Resume Customization Route using Chat Completions
router.post('/cv_customization', async (req, res) => {
  const { jobDescription, userCV } = req.body;
  generateCvCustomizationSuggestions(jobDescription, userCV)
    .then(suggestions => {
      console.log("CV customization suggestions generated successfully."); // gpt_pilot_debugging_log
      res.json({ analysisResults: suggestions });
    })
    .catch(error => {
      console.error(`Error processing CV customization request: ${error.message}, Stack: ${error.stack}`); // gpt_pilot_debugging_log
      res.status(500).json({ error: "Failed to generate CV customization suggestions." });
    });
  } catch (error) {
    console.error(`Error processing CV customization request: ${error.message}, Stack: ${error.stack}`); // gpt_pilot_debugging_log
    res.status(500).json({ error: "Failed to generate CV customization suggestions." });
  }
});