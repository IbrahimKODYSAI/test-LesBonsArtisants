const router = require('express-promise-router')();
const passport = require('passport');
const userController = require('../controllers/userController');

const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

// GET ALL THE PRODUCT

router.route('/')
  .get(userController.getAllProducts)
  .post(userController.signUp);

module.exports = router;
