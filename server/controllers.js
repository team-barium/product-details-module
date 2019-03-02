const {
  dbFetch,
  dbCreate,
  dbUpdate,
  dbDelete
} = require('../postgresdb/models.js');

module.exports = {
  getProduct: (req, res) => {
    let productId = Number(req.params.id);
    dbFetch(productId)
      .then(product => res.status(200).json(product))
      .catch(() => res.status(404).end());
  },
  createProduct: (req, res) => {
    let product = req.body.product;
    dbCreate(product)
      .then(product => res.status(201).json(product))
      .catch(() => res.status(404).end());
  },
  updateProduct: (req, res) => {
    let newProduct = req.body.product;
    let productId = Number(req.params.id);
    if (productId !== newProduct.productId) return res.status(404).end();
    dbUpdate(productId, newProduct)
      .then(() => res.status(200).json('update successful'))
      .catch(() => res.status(404).end());
  },
  deleteProduct: (req, res) => {
    let productId = Number(req.params.id);
    dbDelete(productId)
      .then(() => res.status(200).json('delete successful'))
      .catch(() => res.status(404).end());
  }
};
