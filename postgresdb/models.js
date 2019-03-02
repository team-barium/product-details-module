const { ProductPromise } = require('../postgresdb/index.js');
const Promise = require('bluebird');

module.exports = {
  fetch: (productId, callback) => {
    ProductPromise.then(Product => {
      Product.find({ productId })
        .then(product => {
          callback(null, product);
        })
        .catch(err => {
          callback(err, null);
        });
    });
  }
};
