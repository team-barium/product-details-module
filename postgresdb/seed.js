const { ProductPromise, sequelize } = require('./index.js');
const generateData = require('./generateData');
const path = require('path');
const fs = require('fs');
const Promise = require('bluebird');

ProductPromise.then(Product => {
  Product.findAll({ limit: 10 }).then(result => {
    if (result.length === 0) {
      console.log('db empty beginning data generation');
      generateData().then(() => {
        console.log('data generated, beginning seeding');
        sequelize
          .query(
            `COPY products("name","images","sizes","retailPrice","salePrice","reviewCount","reviewRating","tags","colors","heartToggle") FROM '${path.resolve(
              __dirname,
              './data.csv'
            )}' WITH (FORMAT csv);`
          )
          .spread(() => {
            fs.unlink(path.resolve(__dirname, './data.csv'), () => {});
            console.log('seeding complete, deleting csv');
          });
      });
    }
  });
});
