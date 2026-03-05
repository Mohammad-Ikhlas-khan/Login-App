const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

router.post("/login", ( req, res ) => {
    try{ 
        const { username, password } = req.body;
    if(username === 'admin' && password === 'admin') {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ success: true, message: 'Login successful!', token });
    } else {
        res.status(401).json({ success: false, error: 'Invalid credentials!' });
    }
}catch(error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, error: 'An error occurred during login. Please try again later.' });
}
});

module.exports = router;