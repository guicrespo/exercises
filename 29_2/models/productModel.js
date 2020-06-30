const connection = require('./connection');
const { ObjectId } = require('mongodb');

class Product {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  async getAll() {
    const db = await connection();
    const products = await db.collection('products').find().toArray();
    return products;
  }

  async getById(id) {
    const db = await connection();
    const product = await db.collection('products').findOne({ id: parseInt(id) });
    return product;
  }

  async add() {
    const db = await connection();
    const newProduct = await db.collection('products').insertOne(this);
    return newProduct;
  }

  async delete(id) {
    const db = await connection();
    const product = await db.collection('products').deleteOne({ id: parseInt(id) });
    return product;
  }

  async update(id) {
    const db = await connection();
    const product = await db.collection('products').updateOne({ id: parseInt(id) }, { $set: this });
    return product;
  }
}

module.exports = Product;
