const bcrypt = require('bcryptjs');
const db = require('../models');

// register form
const registerForm = (req, res) => {
    res.render('users/new');
}

// register submission
const register = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

// login form
const loginForm = (req, res) => {
    console.log('Login GET route hit');
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