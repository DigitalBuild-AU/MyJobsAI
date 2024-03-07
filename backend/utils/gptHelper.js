const { OpenAI } = require('openai');

const openai = new OpenAI();

async function generateCvCustomizationSuggestions(jobDescription, userCV) {
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
  return response.choices[0].message.content.trim();
}

module.exports = { generateCvCustomizationSuggestions };
/**
 * Utility functions for interacting with OpenAI's GPT models to generate CV customization suggestions.
 */
/**
 * Generates CV customization suggestions based on a job description and user's CV.
 * @param {string} jobDescription - The job description to compare the CV against.
 * @param {string} userCV - The user's CV that needs customization suggestions.
 * @returns {Promise<string>} A string containing CV customization suggestions.
 */
