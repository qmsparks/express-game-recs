// ANCHOR external imports
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// ANCHOR internal imports
const routes = require('./routes');

// ANCHOR instanced modules
const app = express();

// ANCHOR config
require("dotenv").config();
const PORT = process.env.PORT || 3001;
app.set('view engine', 'ejs');


// ANCHOR middleware
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// ANCHOR routes
app.use('/users', routes.users);

// ANCHOR connection
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));