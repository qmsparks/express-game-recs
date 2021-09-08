// ANCHOR external imports
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');

// ANCHOR internal imports
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const ctrl = require('./controllers');

// ANCHOR instantiated modules
const app = express();

// ANCHOR config
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const SECRET_SESSION = process.env.SECRET_SESSION;
app.set('view engine', 'ejs');

// ANCHOR middleware
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(session({
  secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
  resave: false,             // Save the session even if it's modified, make this false
  saveUninitialized: true    // If we have a new session, we save it, therefore making that true
}));
app.use(flash());            // flash middleware

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// ANCHOR routes
app.get('/', (req, res) => {
  return res.render('index');
})

app.get('/profile', isLoggedIn, (req, res) => {
  const {id, firstName, lastName, email} = req.user.get();

  context = {id, firstName, lastName, email}
  res.render('profile', context);
})

app.use('/auth', ctrl.auth);

// ANCHOR listener
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;