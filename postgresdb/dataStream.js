const { Readable } = require('stream');
const faker = require('faker');
faker.seed(42);

class DataStream extends Readable {
  constructor(options) {
    super(options);
    this.idCount = 0;
    this.possibleSizes = [
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
  }

  randInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
  }

  _read(size) {
    let product = '';
    //productId
    product += this.idCount + ',';
    this.idCount++;
    //name
    product += faker.commerce.productName() + ',';
    //images
    let imageCount = this.randInt(5, 11);
    product += '"{';
    for (let k = 0; k < imageCount; k++) {
      product +=
        'https://picsum.photos/1000/1000?image=' +
        ((this.idCount + k) % 1085) +
        (k === imageCount - 1 ? '}",' : ',');
    }
    //sizes
    let sizes = {};
    for (let size of this.possibleSizes) {
      if (Math.random() > 0.5) {
        sizes[size] = 1;
      }
    }
    product += '"' + JSON.stringify(sizes).replace(/"/g, '""') + '"' + ',';
    //retailPrice
    let retailPrice = faker.commerce.price();
    product += retailPrice + ',';
    //salePrice
    product += Math.floor(retailPrice * Math.random()) + ',';
    //reviewCount
    product += this.randInt(30, 1000) + ',';
    //reviewRating
    product += Math.random() * 2.5 + 2.5 + ',';
    //tags
    product += '"{' + faker.commerce.department() + '}",';
    //colors
    let colorCount = this.randInt(1, 5);
    product += '"{';
    for (let k = 0; k < colorCount; k++) {
      product += faker.commerce.color() + (k === colorCount - 1 ? '}",' : ',');
    }
    //heartToggle
    product += 'false';
    this.push(product + '\n');
    if (this.idCount === 1e7) this.push(null);
  }
}

module.exports = DataStream;
