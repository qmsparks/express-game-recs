const {User, Game, Review} = require('./models');

const addUser = async (userObj) => {
  try {
    const {firstName, lastName, email, password} = userObj;
    const newUser = await User.create({firstName, lastName, email, password});
    console.log(newUser.toJSON());
  } catch (err) {
    console.log(err);
  }
}

const testUser = {
  firstName: 'Brick',
  lastName: 'Sparks',
  email: 'brick@test.co',
  password: 'password'
}

// addUser(testUser);

const addGame = async (gameObj) => {
  try {
    const {name, author, publisher, description, minPlayers, maxPlayers, playTime, requiresGM, storeLink, price} = gameObj;
    
    const [game, created] = await Game.findOrCreate({
      where: {name, author},
      defaults: {publisher, description, minPlayers, maxPlayers, playTime, requiresGM, storeLink, price}
    })

    console.log('GAME: ', game.toJSON());
    console.log('WAS CREATED: ', created);
  } catch (err) {
    console.log(err);
  }
}

const testGame = {
  name: 'The Quiet Year',
  author: 'Avery Alder',
  publisher: 'Buried Without Ceremony',
  description: 'The Quiet Year is a map game. You define the struggles of a community living after the collapse of civilization, and attempt to build something good within their quiet year. Every decision and every action is set against a backdrop of dwindling time and rising concern.',
  minPlayers: 2,
  maxPlayers: 4,
  playTime: '3-4 hours',
  requiresGM: false,
  storeLink: 'https://store.buriedwithoutceremony.com/collections/frontpage/products/the-quiet-year',
  price: 51.87
}

// addGame(testGame);


const addReview = async (userId, gameId, reviewObj) => {
  try {
    const {rating, content} = reviewObj;

    const foundUser = await User.findOne({
      where: {id: userId}
    });

    const foundGame = await Game.findOne({
      where: {id: gameId}
    });
    
    const newReview = await foundUser.createReview({rating, content});

    await foundGame.addReview(newReview);

    console.log(newReview);

    
  } catch (err) {
    console.log(err);
  }
}

const testReview = {
  rating: 5,
  content: `Holy goddamn that's a good game`
}

addReview(1, 1, testReview);