const fs = require('fs');
const path = require('path');
const { Product } = require('./index.js');
// require('./generateData');
const  seedData =  async (data)  => {
  return Product.insertMany(data);
};

// seedData(data);
const insertAll =  async ()  =>{
for(let i=0; i< 1000; i++){
  await seedData(JSON.parse(fs.readFileSync(path.resolve(__dirname, `./data/${i}.json`))));
  console.log('seeded file ' + i);
}
};

insertAll();

