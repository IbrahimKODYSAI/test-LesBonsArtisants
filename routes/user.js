const router = require('express-promise-router')();
const passport = require('passport');
const productController = require('../controllers/productController');

const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

// GET ALL THE PRODUCT

router.route('/')
  .get(productController.getAllProducts)
  .post(productController.addProduct);

module.exports = router;
