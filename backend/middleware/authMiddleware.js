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
 * Verifies and decodes the JWT token.
 * @param {string} token - The JWT token to verify.
 * @returns {Object} The decoded token.
 * @throws {Error} If token verification fails.
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
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = auth;