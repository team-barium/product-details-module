const { Product } = require('./index.js');
const Promise = require('bluebird');


module.exports = {
  fetch: (productId, callback) => {
    Product.findOne({ productId: productId })
      .then((data) => {
        let promises = [];

        for (let id of data.availableColors) {
          promises.push(new Promise((resolve, reject) => {
            Product.findOne({ productId: id }, ['images'])
              .then((data) => {
                resolve(data.images[0]);
              })
              .catch((err) => {
                reject(err);
              });
          }));
        }

        Promise.all(promises)
          .then((colorThumbnails) => {
            let details = { product: data, colorThumbnails };
            callback(null, details);
          })
          .catch((err) => {
            callback(err, null);
          });
      })
      .catch((err) => {
        callback(err, null);
      });
  }
};
