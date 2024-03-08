/**
 * Utility functions for handling requests to OpenAI's GPT models.
 * Includes functions for generating CV suggestions, cover letters, and CV customization based on user inputs.
 */
const { OpenAI } = require('openai');
const openai = new OpenAI();

/**
 * Generates suggestions for CV improvement based on a job description and user's CV.
 * @param {string} jobDescription - The job description.
 * @param {string} userCV - The user's CV.
 * @returns {Object} An object containing CV suggestions.
 */
async function handleCvSuggestions(jobDescription, userCV) {
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
      model: "gpt-4", // Updated model as per the latest format
    });
    return { suggestions: response.choices[0].message.content.trim() };
  } catch (error) {
    throw new Error("Failed to generate CV suggestions.");
  }
}

async function handleCoverLetter(jobDescription, userCV) {
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
      model: "gpt-3.5-turbo",
    });
    return { analysisResults: response.choices[0].message.content.trim() };
  } catch (error) {
    throw new Error("Error customizing cover letter.");
  }
}

async function handleCvCustomization(jobDescription, userCV) {
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
    return { analysisResults: response.choices[0].message.content.trim() };
/**
 * Generates a cover letter based on a job description and user's CV.
 * @param {string} jobDescription - The job description.
 * @param {string} userCV - The user's CV.
 * @returns {Object} An object containing the generated cover letter.
 */
  } catch (error) {
    throw new Error("Failed to generate CV customization suggestions.");
  }
}

module.exports = { handleCvSuggestions, handleCoverLetter, handleCvCustomization };
/**
 * Provides CV customization suggestions based on a job description and user's CV.
 * @param {string} jobDescription - The job description.
 * @param {string} userCV - The user's CV.
 * @returns {Object} An object containing customization suggestions.
 */
