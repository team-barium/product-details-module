const { Readable } = require('stream');
const faker = require('faker');
faker.seed(42);
const randInt = (low, high) => {
  return Math.floor(Math.random() * (high - low) + low);
};
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
class DataStream extends Readable {
  constructor(options) {
    super(options);
    this.idCount = 0;
  }

  _read(size) {
    // if (this.idCount === 0) {
    //   let header = '';
    //   header += 'productId' + ',';
    //   header += 'name' + ',';
    //   header += 'images' + ',';
    //   header += 'sizes' + ',';
    //   header += 'retailPrice' + ',';
    //   header += 'salePrice' + ',';
    //   header += 'reviewRating' + ',';
    //   header += 'tags' + ',';
    //   header += 'colors' + ',';
    //   header += 'heartToggle' + ',';
    //   this.push(header + '\n');
    // }
    let product = '';
    product += this.idCount + ',';
    this.idCount++;
    product += faker.commerce.productName() + ',';
    let imageCount = randInt(5, 11);
    product += '"{';
    for (let k = 0; k < imageCount; k++) {
      product +=
        'https://picsum.photos/1000/1000?image=' +
        ((this.idCount + k) % 1085) +
        (k === imageCount - 1 ? '}",' : ',');
    }
    let sizes = {};
    for (let size of possibleSizes) {
      if (Math.random() > 0.5) {
        sizes[size] = 1;
      }
    }
    product += '"' + JSON.stringify(sizes).replace(/"/g, '""') + '"' + ',';
    let retailPrice = faker.commerce.price();
    product += retailPrice + ',';
    product += Math.floor(retailPrice * Math.random()) + ',';
    product += randInt(30, 1000) + ',';
    product += Math.random() * 2.5 + 2.5 + ',';
    product += '"{' + faker.commerce.department() + '}",';
    let colorCount = randInt(1, 5);
    product += '"{';
    for (let k = 0; k < colorCount; k++) {
      product += faker.commerce.color() + (k === colorCount - 1 ? '}",' : ',');
    }
    product += 'false';
    this.push(product + '\n');
    if (this.idCount === 1e7) this.push(null);
  }
}

module.exports = DataStream;
