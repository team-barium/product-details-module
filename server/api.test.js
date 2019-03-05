const app = require('./app');
const request = require('supertest');

describe('API CRUD Operations', () => {
  test('server responds to GET request', async () => {
    let response = await request(app).get('/abibas/product/8989898');
    return expect(response.body).toEqual(
      expect.objectContaining({
        productId: 8989898,
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

  test('server responds to POST request', async () => {
    let response = await request(app)
      .post('/abibas/product')
      .send({
        product: {
          productId: 18989898,
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
        }
      });
    return expect(response.body).toEqual({
      productId: 18989898,
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
    });
  });

  test('server responds to PUT request', async () => {
    await request(app)
      .put('/abibas/product/18989898')
      .send({
        product: {
          productId: 18989898,
          name: 'Awesome Plastic Table',
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
        }
      });
    let response = await request(app).get('/abibas/product/18989898');

    return expect(response.body).toEqual({
      productId: 18989898,
      name: 'Awesome Plastic Table',
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
    });
  });

  test('server responds to DELETE request', async () => {
    await request(app).delete('/abibas/product/18989898');
    let response = await request(app).get('/abibas/product/18989898');
    expect(response.status).toBe(404);
  });
});
