const { Product } = require('./index.js');
const generateData = require('./generateData');
const cmd = require('node-cmd');
const path = require('path');
const Promise = require('bluebird');
cmd = Promise.promisifyAll(cmd);

Product.find().then(result => {
  if (result.length === 0) {
    generateData().then(() => {
      console.log('generated data');
      cmd
        .runAsync(
          `mongoimport --db abibas --collection products --file ${path.resolve(
            __dirname,
            './data.json'
          )} --jsonArray`
        )
        .then(() => {
          console.log('Insertion complete');
        });
    });
  }
});
