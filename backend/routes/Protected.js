const express = require('express');
const router = express.Router();

// Middleware to protect the route
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).send('You need to log in to access this route.');
  }
};

// Protected route
router.get('/protected', isAuthenticated, (req, res) => {
  res.send('Welcome to the protected route!');
});

module.exports = router;
