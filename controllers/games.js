const {Game} = require('../models');

const index = async (req, res) => {
  try {
    const allGames = await Game.findAll();
    const games = allGames.map(game => game.toJSON());
    context = {games}

    return res.render('games/index', context);
  } catch (err) {
    console.log(err);
  }
}

const show = async (req, res) => {
  try {
    const foundGame = await Game.findOne({
      where: {id: req.params.id}
    })
    
    context = {game: foundGame.toJSON()}

    return res.render('games/show', context);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  index,
  show
}