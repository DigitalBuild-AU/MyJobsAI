const jwt = require('jsonwebtoken'); // jwt used for token verification
const User = require('../models/User'); // User model for database interaction

// Middleware to authenticate requests using JWT
const auth = async (req, res, next) => {
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
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = auth;