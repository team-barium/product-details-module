const { ProductPromise } = require('../postgresdb/index.js');
const Promise = require('bluebird');

module.exports = {
  dbFetch: productId => {
    return ProductPromise.then(Product =>
      Product.findOne({ where: { productId } })
    );
  },

  dbCreate: product => {
    return ProductPromise.then(Product => Product.create(product));
  },

  dbUpdate: (productId, newProduct) => {
    return ProductPromise.then(Product =>
      Product.findOne({ where: { productId } }).then(product =>
        product.update(newProduct)
      )
    );
  },

  dbDelete: productId => {
    return ProductPromise.then(Product =>
      Product.findOne({ where: { productId } }).then(product =>
        product.destroy()
      )
    );
  }
};
