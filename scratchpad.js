const {User, Game, Review} = require('./models');

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

// const testGame = {
//   name: 'The Quiet Year',
//   author: 'Avery Alder',
//   publisher: 'Buried Without Ceremony',
//   description: 'The Quiet Year is a map game. You define the struggles of a community living after the collapse of civilization, and attempt to build something good within their quiet year. Every decision and every action is set against a backdrop of dwindling time and rising concern.',
//   minPlayers: 2,
//   maxPlayers: 4,
//   playTime: '3-4 hours',
//   requiresGM: false,
//   storeLink: 'https://store.buriedwithoutceremony.com/collections/frontpage/products/the-quiet-year',
//   price: 51.87
// }

// addGame(testGame);

const addReview = async (userId, gameId, reviewInfo) => {
try {
  const {rating, content} = reviewInfo;

  const review = await Review.create({
    UserId: userId,
    GameId: gameId,
    rating,
    content
  })
  console.log(review.toJSON());
} catch (err) {
  console.log(err);
}
}

const testReview = {
  rating: 5,
  content: 'Holy hell I love this game'
}

addReview(1, 1, testReview)
