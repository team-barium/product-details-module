const { Product } = require('./index.js');
const data = require('./seedData.json');


const seedData = (data) => {
  Product.insertMany(data);
};

seedData(data);
