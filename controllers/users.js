const profilePage = (req, res) => {
  const {id, firstName, lastName, email} = req.user.get();

  context = {id, firstName, lastName, email}
  res.render('profile', context);
}

module.exports = {
  profilePage
}