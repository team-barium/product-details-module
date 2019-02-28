const faker = require('faker');
const fs = require('fs');

faker.seed(42);

const randInt = (low, high) => {
  return Math.floor(Math.random() * (high - low) + low);
};
let idCount = 0;
for (let i = 0; i < 1000; i++) {
  let data = [];
  for (let j = 0; j < 10000; j++) {
    let product = {};
    product.productId = idCount;
    idCount++;
    product.name = faker.commerce.productName();
    product.images = [];
    let imageCount = randInt(5, 11);
    for (let k = 0; k < imageCount; k++) {
      product.images.push(
        'https://picsum.photos/1000/1000?image=' + ((j + k) % 1085)
      );
    }

    product.sizes = {};
    const possibleSizes = [
      '5',
      '5h',
      '6',
      '6h',
      '7',
      '7h',
      '8',
      '8h',
      '9',
      '9h',
      '10',
      '10h',
      '11',
      '11h',
      '12',
      '12h',
      '13'
    ];
    for (let size of possibleSizes) {
      if (Math.random() > 0.5) {
        product.sizes[size] = 1;
      }
    }
    product.retailPrice = faker.commerce.price();
    product.salePrice = Math.floor(product.retailPrice * Math.random());
    product.reviewCount = randInt(30, 1000);
    (product.reviewRating = Math.random() * 2.5 + 2.5),
      (product.tags = faker.commerce.department().split(' '));
    product.colors = [];
    let colorCount = randInt(1, 5);
    for (let j = 0; j < colorCount; j++) {
      product.colors.push(faker.commerce.color());
    }
    product.heartToggle = false;
    data.push(product);
  }
  fs.writeFileSync(`./db/data/${i}.json`, JSON.stringify(data));
}
