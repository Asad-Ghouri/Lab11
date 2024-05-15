const express = require('express');
const productsRouter = express.Router();


let products = [];

productsRouter.get('/', (req, res) => {
  res.json(products);
});

productsRouter.get('/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find(product => product.id === productId);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    res.json(product);
  }
});

productsRouter.post('/', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

productsRouter.put('/:id', (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  let productIndex = products.findIndex(product => product.id === productId);
  if (productIndex === -1) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    res.json(products[productIndex]);
  }
});

productsRouter.delete('/:id', (req, res) => {
  const productId = req.params.id;
  products = products.filter(product => product.id !== productId);
  res.json({ message: 'Product deleted' });
});

module.exports = productsRouter;
