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

/**
 * Verifies the provided JWT token.
 * @param {String} token - The JWT token to verify.
 * @returns {Object} The decoded token if verification is successful.
 * @throws {Error} If the token is invalid or expired.
 */
  
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token.');
  }
};
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      throw new Error('Token not provided.');
    }
    const decoded = verifyToken(token);
    const user = await User.findOne({ _id: decoded.userId, 'tokens.token': token });
    if (!user) {
      throw new Error('User not found or session expired.');
    }
    req.user = user;

    // Attach authenticated user to the request object
    req.user = user;
    next();
  } catch (error) {
    handleError(res, 'Please authenticate.', 401);
  }
};

module.exports = auth;