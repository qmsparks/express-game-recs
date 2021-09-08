const passport = require('../config/ppConfig');
const {User} = require('../models');

const registerPage = (req, res) => {
  res.render('auth/signup');
}

const loginPage = (req, res) => {
  res.render('auth/login');
}

const logout = (req, res) => {
  req.logOut();
  req.flash('success', 'Logging out... See you next time!');
  res.redirect('/');
}

const register = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { firstName, lastName, password }
  });

  if (created) {
      // if created, success and we will redirect back to / page
      console.log(`----- ${user.firstName} ${user.lastName} was created -----`);
      const successObject = {
          successRedirect: '/',
          successFlash: `Welcome ${user.firstName}. Account was created and logging in...`
      }
      // 
      passport.authenticate('local', successObject)(req, res);
  } else {
    // Send back email already exists
    req.flash('error', 'Email already exists');
    res.redirect('/auth/signup'); // redirect the user back to sign up page to try again
  }
  } catch (err) {
    console.log(err)
  }
}

const login = async (req, res) => {
  try {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/auth/login',
      successFlash: 'Welcome back ...',
      failureFlash: 'Either email or password is incorrect' 
    })
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  registerPage,
  loginPage,
  register,
  login,
  logout
}