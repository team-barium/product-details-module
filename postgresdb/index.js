const Sequelize = require('sequelize');
const sequelize = new Sequelize('abibas', 'minasorsok', '', {
  dialect: 'postgres'
});

const Product = sequelize.define(
  'product',
  {
    product_id: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.STRING,
    images: Sequelize.ARRAY(Sequelize.STRING),
    sizes: Sequelize.JSON,
    retail_price: Sequelize.REAL,
    sale_price: Sequelize.REAL,
    review_count: Sequelize.REAL,
    review_rating: Sequelize.REAL,
    tags: Sequelize.ARRAY(Sequelize.STRING),
    colors: Sequelize.ARRAY(Sequelize.STRING),
    heart_toggle: Sequelize.BOOLEAN
  },
  { timestamps: false }
);

module.exports.ProductPromise = sequelize
  .authenticate()
  .then(() => Product.sync());
module.exports.sequelize = sequelize;
