const { OpenAI } = require('openai');
const openai = new OpenAI();

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
      model: "gpt-3.5-turbo",
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
  } catch (error) {
    throw new Error("Failed to generate CV customization suggestions.");
  }
}

module.exports = { handleCvSuggestions, handleCoverLetter, handleCvCustomization };
