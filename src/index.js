const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

//middleware
app.use(express.json());

//routes

//start server
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));