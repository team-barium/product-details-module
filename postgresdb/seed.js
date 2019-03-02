const { ProductPromise, sequelize } = require('./index.js');
const generateData = require('./generateData');
const cmd = require('node-cmd');
const path = require('path');
const Promise = require('bluebird');
Promise.promisifyAll(cmd);
ProductPromise.then(Product => {
  Product.findAll().then(result => {
    if (result.length === 0) {
      // generateData().then(() => {
      console.log('data generated');
      sequelize
        .query(
          `\COPY products FROM '${path.resolve(
            __dirname,
            './data.csv'
          )}' WITH (FORMAT csv);`
        )
        .spread(() => {
          console.log('Insertion complete');
        });
      // });
    }
  });
});
