const bcrypt = require('bcryptjs');
const db = require('../models');

// register form
const registerForm = (req, res) => {
    res.render('users/new');
}

// register submission
const register = async (req, res) => {
    try {
        // const foundUserEmail = await db.User.findOne({email:req.body.email});
        // const foundUserName = await db.User.findOne({username: req.body.username});

        console.log('Register POST route hit');

    } catch (error) {
        console.log(error);
    }
}

// login form
const loginForm = (req, res) => {
    res.render('users/login');
}

// login submission
const login = async (req, res) => {
    try {
        
    } catch (error) {
        
    }

}

// show profile
const show = async (req, res) => {
    try {
        
    } catch (error) {
        
    }

}

// update form
const updateForm = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

// update submission
const update = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

// delete
const remove = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    registerForm,
    register,
    loginForm,
    login,
    show,
    updateForm,
    update,
    remove
}