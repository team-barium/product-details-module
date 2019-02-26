const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const PORT = 3002;

const { fetchProduct } = require('./controllers.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use('/abibas/product', fetchProduct);
app.use('/abibas/color', fetchProduct);

app.listen(PORT, () => console.log('Listening on PORT', PORT));
