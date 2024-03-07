const { generateCvCustomizationSuggestions } = require('../utils/gptHelper');
const { OpenAI } = require('openai');

jest.mock('openai', () => ({
  OpenAI: jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn()
      }
    }
  }))
}));

describe('generateCvCustomizationSuggestions', () => {
  const mockJobDescription = "Software Engineer with 5 years of experience";
  const mockUserCV = "Experienced developer in JavaScript";
  const mockSuggestions = "Consider highlighting your JavaScript experience prominently.";

  beforeEach(() => {
    OpenAI.mockClear();
    OpenAI().chat.completions.create.mockClear();
    OpenAI().chat.completions.create.mockResolvedValue({
      choices: [{ message: { content: mockSuggestions } }]
    });
  });

  test('successfully generates CV customization suggestions', async () => {
    const suggestions = await generateCvCustomizationSuggestions(mockJobDescription, mockUserCV);
    expect(suggestions).toEqual(mockSuggestions);
    expect(OpenAI().chat.completions.create).toHaveBeenCalledWith({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output a list of CV customization suggestions based on the job description in plain text."
        },
        {
          role: "user",
          content: `Please analyze the CV in comparison to the job description and provide customization suggestions.\nJob Description: ${mockJobDescription}\nUser CV: ${mockUserCV}`
        }
      ],
      model: "gpt-3.5-turbo",
    });
  });

  test('handles errors gracefully', async () => {
    OpenAI().chat.completions.create.mockRejectedValue(new Error('API error'));
    await expect(generateCvCustomizationSuggestions(mockJobDescription, mockUserCV)).rejects.toThrow('API error');
  });

  test('handles empty job description and user CV', async () => {
    const emptySuggestions = "No suggestions available.";
    OpenAI().chat.completions.create.mockResolvedValueOnce({
      choices: [{ message: { content: emptySuggestions } }]
    });
    const suggestions = await generateCvCustomizationSuggestions('', '');
    expect(suggestions).toEqual(emptySuggestions);
  });

  test('handles unusual characters in inputs', async () => {
    const unusualJobDescription = "Software Engineer @@@###$$$";
    const unusualUserCV = "Developer ***&&&";
    const suggestions = await generateCvCustomizationSuggestions(unusualJobDescription, unusualUserCV);
    expect(suggestions).toEqual(mockSuggestions);
    expect(OpenAI().chat.completions.create).toHaveBeenCalledWith({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output a list of CV customization suggestions based on the job description in plain text."
        },
        {
          role: "user",
          content: `Please analyze the CV in comparison to the job description and provide customization suggestions.\nJob Description: ${unusualJobDescription}\nUser CV: ${unusualUserCV}`
        }
      ],
      model: "gpt-3.5-turbo",
    });
  });
});
