'use strict'

const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecção DB
mongoose.connect('mongodb://localhost:27017/nodestore', { useNewUrlParser : true});

//Carregamento Models
const Product = require('./models/product');

//Loading routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;