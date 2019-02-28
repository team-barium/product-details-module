const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/abibas', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;
db.on('error', err => console.log('Failed to connect to database', err));
db.once('open', () => {
  console.log('Connected to database');
});

const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    unique: true,
    required: true
  },
  name: String,
  images: {
    type: [String]
  },
  sizes: {
    '5': Number,
    '5h': Number,
    '6': Number,
    '6h': Number,
    '7': Number,
    '7h': Number,
    '8': Number,
    '8h': Number,
    '9': Number,
    '9h': Number,
    '10': Number,
    '10h': Number,
    '11': Number,
    '11h': Number,
    '12': Number
  },
  retailPrice: Number,
  salePrice: Number,
  reviewCount: Number,
  reviewRating: Number,
  tags: [String],
  colors: [String],
  heartToggle: Boolean
});

const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;
module.exports.db = db;
