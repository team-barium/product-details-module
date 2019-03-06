const { pgPool } = require('./index');

module.exports = {
  dbFetch: productId => {
    console.log(productId);
    return pgPool
      .query(
        `SELECT * 
      FROM products 
      WHERE "productId" = ${productId};`
      )
      .then(res => {
        console.log(res);
        return res.rows[0];
      });
  },

  dbCreate: product => {
    return pgPool
      .query(
        `INSERT INTO products("name","images","sizes","retailPrice","salePrice","reviewCount","reviewRating","tags","colors","heartToggle") 
        VALUES (
          '${product.name}',
          '{${product.images.toString()}}',
          '${JSON.stringify(product.sizes)}',
          ${product.retailPrice},
          ${product.salePrice},
          ${product.reviewCount},
          ${product.reviewRating},
          '{${product.tags.toString()}}',
          '{${product.colors.toString()}}',
          ${product.heartToggle}
        ) RETURNING "productId";`
      )
      .then(res => {
        console.log(res);
        return res.rows[0].productId;
      });
  },

  dbUpdate: (productId, newProduct) => {
    return pgPool
      .query(
        `UPDATE products
        SET "name" =  '${newProduct.name}',
            "images" = '{${newProduct.images.toString()}}',
            "sizes" = '${JSON.stringify(newProduct.sizes)}',
            "retailPrice" =  ${newProduct.retailPrice},
            "salePrice" = ${newProduct.salePrice},
            "reviewCount" = ${newProduct.reviewCount},
            "reviewRating" = ${newProduct.reviewRating},
            "tags"=   '{${newProduct.tags.toString()}}',
            "colors" = '{${newProduct.colors.toString()}}',
            "heartToggle" = ${newProduct.heartToggle}
        WHERE "productId" = ${productId};`
      )
      .then(res => res.rows[0]);
  },

  dbDelete: productId => {
    return pgPool
      .query(
        `DELETE FROM products
      WHERE "productId" = ${productId};`
      )
      .then(res => res.rows[0]);
  }
};
