const jwt = require('jsonwebtoken'); // jwt used for token verification
const User = require('../models/User'); // User model for database interaction

// Middleware to authenticate requests using JWT
/**
 * Middleware to authenticate requests using JWT. Attaches the authenticated user to the request object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function in the stack.
 * @throws {Error} If authentication fails.
 */
const auth = async (req, res, next) => {
const { handleError } = require('../middleware/middlewareUtils');
  try {
    // Extract token from Authorization header by removing 'Bearer '
    const token = req.header('Authorization').replace('Bearer ', '');
    // Verify the token using JWT_SECRET & decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Find the user in the database using decoded userId and token
    const user = await User.findOne({ _id: decoded.userId, 'tokens.token': token });

    // If no matching user found, user is not authenticated
    if (!user) {
      throw new Error();
    }

    // Attach authenticated user to the request object
    req.user = user;
    next();
  } catch (error) {
    handleError(res, 'Please authenticate.', 401);
  }
};

module.exports = auth;