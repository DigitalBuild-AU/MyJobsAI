/**
 * gptUtils.js
 * This file contains utility functions for interacting with the OpenAI API to generate cover letters. 
 * Functions include generating cover letters based on job descriptions and user CVs, logging generation events, 
 * and handling errors during the cover letter generation process.
 */

const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateCoverLetter(jobDescription, userCV) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Generate a cover letter based on the following job description and user's CV:\nJob Description: ${jobDescription}\nUser CV: ${userCV}`,
    temperature: 0.7,
    max_tokens: 1024,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  return response.data.choices[0].text.trim();
}

function logCoverLetterGeneration() {
  console.log("Cover letter analysis and feedback generated successfully.");
}

function handleCoverLetterError(error, res) {
  console.error(`Error processing cover letter request: ${error.message}, Stack: ${error.stack}`);
  res.status(500).json({ error: "Failed to generate cover letter analysis." });
}

module.exports = {
  generateCoverLetter,
  logCoverLetterGeneration,
  handleCoverLetterError,
};
