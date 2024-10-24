import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';

const port = process.env.PORT;

 const app = express();

 app.get('/', (req, res) => {
    res.send('API is running....');
 });

 app.get('/api/products', (req, res) => {
    res.json(products);
 });

 app.get('/api/products/:id', (req, res) => {
    res.json(products.find(product => product._id === req.params.id))
 });

 app.listen(port, () => console.log(`Server is running on port ${port}`));