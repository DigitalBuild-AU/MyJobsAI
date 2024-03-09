// This middleware handles errors globally across the MyJobsAI backend, ensuring a consistent error response format.
/**
 * Handles errors thrown in the application.
 *
 * Parameters:
 * - err: The error object thrown.
 * - req: The request object.
 * - res: The response object.
 * - next: The next middleware function in the stack.
 *
 * Does not return a value but sends a response with a 500 status code and a JSON object containing an error message.
 */
const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
};

module.exports = errorHandler;
