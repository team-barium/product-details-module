const { Product } = require('./index.js');
const Promise = require('bluebird');

module.exports = {
  fetch: (productId, callback) => {
    Product.findOne({ productId: productId })
      .then(product => {
        callback(null, product);
      })
      .catch(err => {
        callback(err, null);
      });
  }
};
