const { Product } = require('../postgresdb/index.js');
const Promise = require('bluebird');

module.exports = {
  fetch: (productId, callback) => {
    Product.findById(productId)
      .then(product => {
        callback(null, product);
      })
      .catch(err => {
        callback(err, null);
      });
  }
};
