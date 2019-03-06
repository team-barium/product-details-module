const { dbFetch, dbCreate, dbUpdate, dbDelete } = require('./dbHelpers.js');
let genericProduct = {
  name: 'Awesome Plastic Chair',
  images: [
    'https://picsum.photos/1000/1000?image=673',
    'https://picsum.photos/1000/1000?image=674',
    'https://picsum.photos/1000/1000?image=675',
    'https://picsum.photos/1000/1000?image=676',
    'https://picsum.photos/1000/1000?image=677',
    'https://picsum.photos/1000/1000?image=678'
  ],
  sizes: {
    '5': 1,
    '6': 1,
    '7': 1,
    '8': 1,
    '10': 1,
    '6h': 1,
    '8h': 1,
    '10h': 1,
    '11h': 1
  },
  retailPrice: 561,
  salePrice: 394,
  reviewCount: 998,
  reviewRating: 4.61981,
  tags: ['Health'],
  colors: ['gold', 'indigo'],
  heartToggle: false
};
describe('DB CRUD Operations', () => {
  test('can fetch from DB', async () => {
    let productId = Math.floor(Math.random() * 1e6 + 9e6);
    let product = await dbFetch(productId);
    expect(product).toEqual(
      expect.objectContaining({
        productId: expect.any(Number),
        name: expect.any(String),
        images: expect.any(Array),
        sizes: expect.any(Object),
        retailPrice: expect.any(Number),
        salePrice: expect.any(Number),
        reviewCount: expect.any(Number),
        reviewRating: expect.any(Number),
        tags: expect.any(Array),
        colors: expect.any(Array),
        heartToggle: expect.any(Boolean)
      })
    );
  });

  test('can create new product', async () => {
    let productId = await dbCreate(genericProduct);
    let newProduct = await dbFetch(productId);
    return expect(newProduct).toEqual(
      Object.assign(
        {
          productId
        },
        genericProduct
      )
    );
  });

  test('can update product', async () => {
    let productId = Math.floor(Math.random() * 1e6 + 9e6);
    await dbUpdate(productId, genericProduct);
    let updatedProduct = await dbFetch(productId);
    return expect(updatedProduct).toEqual(genericProduct);
  });

  test('can delete product', async () => {
    let productId = Math.floor(Math.random() * 1e6 + 9e6);
    let res = await dbDelete(productId);
    let response = await dbFetch(productId);
    expect(response).toBe(undefined);
  });
});
