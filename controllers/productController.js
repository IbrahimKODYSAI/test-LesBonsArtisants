const Product = require('../models/Product');

module.exports = {
  addProduct: async (req, res) => {
    const product = new Product({
      name: req.body.name,
      type: req.body.type,
      price: req.body.price,
      rating: req.body.rating,
      warranty_years: req.body.warranty_years,
      available: req.body.available,
    });
    try {
      const savedProduct = await product.save();
      res.json(savedProduct);
    }
    catch (err) {
      res.json({ message: err });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    }
    catch (err) {
      res.json({ message: err });
    }
  },

  getOneProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);
      res.json(product);
    }
    catch (err) {
      res.json({ message: err });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const updateProduct = await Product.updateOne({ _id: req.params.productId }, req.body);
      res.json(updateProduct);
    }
    catch (err) {
      res.json({ message: err });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const updateProduct = await Product.updateOne({ _id: req.params.productId }, req.body);
      res.json(updateProduct);
    }
    catch (err) {
      res.json({ message: err });
    }
  },
};
