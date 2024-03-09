export const COVER_LETTER_TEMPLATES = ['Basic', 'Modern', 'Creative'];
export const COVER_LETTER_TONES = ['Professional', 'Friendly', 'Enthusiastic'];

export const validateCustomizationOptions = (template, tone) => {
  const isTemplateValid = COVER_LETTER_TEMPLATES.includes(template);
  const isToneValid = COVER_LETTER_TONES.includes(tone);
  return isTemplateValid && isToneValid;
};

export const mapCustomizationOptionsToAPIParams = (template, tone) => {
  const templateParam = template.toLowerCase();
  const toneParam = tone.toLowerCase();
  return { template: templateParam, tone: toneParam };
};
