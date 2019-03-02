const { fetch } = require('../postgresdb/models.js');

module.exports = {
  fetchProduct: (req, res) => {
    let productId = req.query.id;
    fetch(productId, (err, data) => {
      if (err) {
        res.status(404).end();
      } else {
        res.status(200).send(data);
      }
    });
  }
};
