const bcrypt = require('bcryptjs');
const { render } = require('ejs');
const db = require('../models');

// register form
const registerForm = (req, res) => {
    context = {
        message: ''
    }
    res.render('users/new', context);
}

// register submission
const register = async (req, res) => {
    try {
        const foundUserEmail = await db.User.findOne({email:req.body.email});
        const foundUserName = await db.User.findOne({username: req.body.username});

        if (foundUserEmail || foundUserName) {
            return res.redirect('/users/new');
        }

        if (req.body.password === req.body.confirm) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);
            const createdUser = await db.User.create({
                username: req.body.username,
                email: req.body.email,
                password: hash
            });

            console.log(createdUser);
            res.redirect('/');
        } else {
            return res.redirect('/users/new');
        }

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