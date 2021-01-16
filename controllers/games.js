const db = require('../models');

const index = async (req, res) => {
    try {
        res.render('games/index');
    } catch (error) {
        
    }
}

const gameForm = (req, res) => {
    res.render('games/new');
}

const addGame = async (req, res) => {
    try {
        const newGameObj = req.body;
        newGameObj.gm = (req.body.gm === 'on') ? true : false;

        const addedGame = await db.Game.create(newGameObj);
        console.log(addedGame);
        
    } catch (error) {
        res.send(error);
    }
}

const show = async (req, res) => {
    try {
        // const foundGame = await db.Game.findById(req.params.id);

        // context = {foundGame};

        res.send('Game Show Route Hit')
    } catch (error) {
        
    }
}

module.exports = {
    gameForm,
    addGame,
    show,
    index
}