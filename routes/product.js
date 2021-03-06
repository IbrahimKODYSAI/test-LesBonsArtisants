const router = require('express-promise-router')();
const productController = require('../controllers/productController');


// GET ALL THE PRODUCT

router.route('/')
  .get(productController.getAllProducts)
  .post(productController.addProduct)

router.route('/:productId')
  .delete(productController.deleteProduct)
  .get(productController.getOneProduct)
  .put(productController.updateProduct)

module.exports = router;
