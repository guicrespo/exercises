const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', (_req, res, _next) => {
  const products = new ProductModel().getAll();

  if (!products) return res.status(500).json({ message: "Error loading products. Try again later." })

  res.status(200).json(products);
});

router.get('/:id', (req, res, _next) => {
  const product = new ProductModel().getById(req.params.id);

  if (!product) return res.status(500).json({ message: 'Product not found.' });

  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = new ProductModel(name, brand);
    newProduct.add();

    res.status(201).json(newProduct);
  } catch (_e) {
    res.status(500).json({
      message: 'Something went wrong when registering the product. Try again later.'
    });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const products = new ProductModel().delete(req.params.id);

    res.status(200).json(products);
  } catch (_e) {
    res.status(500).json({
      message: 'Something went wrong when deleting the product. Try again later.'
    });
  }
});

router.put('/:id', (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = new ProductModel(name, brand).addOrUpdate(req.params.id);

    res.status(200).json(products);
  } catch (_e) {
    res.status(500).json({
      message: 'Something went wrong when updating the product. Try again later.'
    });
  }
});

module.exports = router;
