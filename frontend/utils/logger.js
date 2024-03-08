export const logInfo = (message, ...data) => {
  console.log(message, ...data);
};

export const logWarning = (message, ...data) => {
  console.warn(message, ...data);
};

export const logError = (message, error) => {
  console.error(message, error);
};
