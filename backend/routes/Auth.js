const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(200).send('Registration successful!');
  } catch (err) {
    res.status(500).send('Error registering new user.');
  }
});

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('Logged in successfully!');
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.send('Logged out successfully!');
  });
});

module.exports = router;
