const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use(limiter);
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("", userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Login App API");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});