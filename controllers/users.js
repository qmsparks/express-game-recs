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
        res.send(error);
    }
}

// ANCHOR login form
const loginForm = (req, res) => {
    res.render('users/login');
}

// ANCHOR login submission
const login = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({
            username: req.body.username
        });

        if (!foundUser) {
            return res.redirect('/users/login');
        }

        const match = await bcrypt.compare(req.body.password, foundUser.password);

        if (!match) {
            return res.redirect('/users/login');
        }

        req.session.currentUser = {
            username: foundUser.username,
            id: foundUser._id
        }

        res.redirect(`/users/${req.session.currentUser.id}`);

    } catch (error) {
        res.send(error);
    }

}

// ANCHOR show profile
const show = async (req, res) => {
    try {
        const foundUser = await db.User.findById(req.params.id);
        const currentUser = await db.User.findById(req.session.currentUser.id);
        context = {
            profile: foundUser,
            user: currentUser
        };

        return res.render('users/show', context);
    } catch (error) {
        res.send(error);
    }

}

// ANCHOR logout
const logout = async (req, res) => {
    try {
        await req.session.destroy();
        return res.redirect('/');
    } catch (error) {
        res.send(error);
    }
}

// ANCHOR delete
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await db.User.findByIdAndDelete(req.session.currentUser.id);

        // await db.Comment.deleteMany({user: deletedUser._id});

        await req.session.destroy();

        console.log(deletedUser);
        res.redirect('/');
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    registerForm,
    register,
    loginForm,
    login,
    show,
    deleteUser,
    logout
}