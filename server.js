// ANCHOR external imports
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

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
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET,
    store: new MongoStore({
        url: process.env.MONGODB_URI || 'mongodb://localhost:27017/recs-sessions'
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
}))

// ANCHOR routes
app.use('/users', routes.users);
app.use('/games', routes.games);

// ANCHOR connection
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));