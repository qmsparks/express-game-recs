// ANCHOR external imports
const express = require('express');

// ANCHOR internal imports
const routes = require('./routes');
const db = require('./models');

// ANCHOR config
// require("dotenv").config();
const PORT = process.env.PORT || 3001;
const app = express();

// ANCHOR middleware

// ANCHOR routes

// ANCHOR connection
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));