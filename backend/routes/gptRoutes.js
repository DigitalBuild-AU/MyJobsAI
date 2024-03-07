const express = require('express');
const { OpenAI } = require('openai');
const dotenv = require('dotenv');

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
  const { jobDescription, userCV } = req.body;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to analyze a CV against a job description and provide feedback with green, red, and yellow highlights."
        },
        {
          role: "user",
          content: `Analyze the CV in comparison to the job description and provide feedback with green, red, and yellow highlights.\nJob Description: ${jobDescription}\nUser CV: ${userCV}`
        }
      ],
      model: "gpt-4",
    });
    console.log("CV analysis and customization suggestions generated successfully."); // gpt_pilot_debugging_log
    res.json({ analysisResults: response.choices[0].message.content.trim() });
});

module.exports = router;
// Resume Customization Route using Chat Completions
router.post('/cv_customization', async (req, res) => {
  const { jobDescription, userCV } = req.body;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output a list of CV customization suggestions based on the job description in plain text."
        },
        {
          role: "user",
          content: `Please analyze the CV in comparison to the job description and provide customization suggestions.\nJob Description: ${jobDescription}\nUser CV: ${userCV}`
        }
      ],
      model: "gpt-3.5-turbo",
    });
    console.log("CV customization suggestions generated successfully."); // gpt_pilot_debugging_log
    res.json({ analysisResults: response.choices[0].message.content.trim() });
// Generate Customized CV in PDF Format
router.post('/generate_cv_pdf', async (req, res) => {
  const { customizedContent } = req.body;
  // Placeholder for PDF generation logic
  console.log("Generating PDF...");
  // Simulate PDF generation and sending the file
  res.status(200).send("PDF generated and sent.");
});

// Generate Customized CV in DOC Format
router.post('/generate_cv_doc', async (req, res) => {
  const { customizedContent } = req.body;
  // Placeholder for DOC generation logic
  console.log("Generating DOC...");
  // Simulate DOC generation and sending the file
  res.status(200).send("DOC generated and sent.");
});

// Download Customized CV in PDF Format
router.get('/download_cv/pdf', async (req, res) => {
  // Placeholder for PDF download logic
  console.log("Downloading PDF...");
  // Simulate sending the PDF file for download
  res.status(200).send("PDF file sent for download.");
});

// Download Customized CV in DOC Format
router.get('/download_cv/doc', async (req, res) => {
  // Placeholder for DOC download logic
  console.log("Downloading DOC...");
  // Simulate sending the DOC file for download
  res.status(200).send("DOC file sent for download.");
});
  } catch (error) {
    console.error(`Error processing CV customization request: ${error.message}, Stack: ${error.stack}`); // gpt_pilot_debugging_log
    res.status(500).json({ error: "Failed to generate CV customization suggestions." });
  }
});