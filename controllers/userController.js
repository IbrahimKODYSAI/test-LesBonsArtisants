const User = require('../models/User');

module.exports = {
  signUp: async (req, res, next) => {

    const { email, password } = req.value.body;
    const newUser = new User({email, password });
    await newUser.save();

    res.json({ user: 'created' })
  },
}
