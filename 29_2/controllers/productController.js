const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await new ProductModel().getAll();

  if (!products) return res.status(500).json({ message: "Error loading products. Try again later." })

  res.status(200).json(products);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = new ProductModel(name, brand);
    await newProduct.add();

    res.status(201).json(newProduct);
  } catch (_e) {
    res.status(500).json({
      message: 'Something went wrong when registering the product. Try again later.'
    });
  }
});

router.get('/:id', async (req, res) => {
  const product = await new ProductModel().getById(req.params.id);

  if (!product) return res.status(500).json({ message: 'Product not found.' });

  res.status(200).json(product);
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await new ProductModel().delete(req.params.id);

    res.status(200).json(products);
  } catch (_e) {
    res.status(500).json({
      message: 'Something went wrong when deleting the product. Try again later.'
    });
  }
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await new ProductModel(name, brand).update(req.params.id);

    res.status(200).json(products);
  } catch (_e) {
    res.status(500).json({
      message: 'Something went wrong when updating the product. Try again later.'
    });
  }
});

module.exports = router;
