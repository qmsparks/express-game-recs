const bcrypt = require('bcryptjs');
const { render } = require('ejs');
const db = require('../models');

// ANCHOR register form
const registerForm = (req, res) => {
    context = {
        message: ''
    }
    res.render('users/new', context);
}

// ANCHOR register submission
const register = async (req, res) => {
    try {
        const foundUserEmail = await db.User.findOne({email:req.body.email});
        const foundUserName = await db.User.findOne({username: req.body.username});

        if (foundUserEmail || foundUserName) {
            return res.redirect('/users/new');
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const createdUser = await db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });

        console.log(createdUser);
        // TODO automatically log in newly registered users
        return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

// ANCHOR login form
const loginForm = (req, res) => {
    res.render('users/login');
}

// login submission
const login = async (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        
    }

}

// ANCHOR show profile
const show = async (req, res) => {
    try {
        
    } catch (error) {
        
    }

}

// ANCHOR update form
const updateForm = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

// ANCHOR update submission
const update = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

// ANCHOR delete
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