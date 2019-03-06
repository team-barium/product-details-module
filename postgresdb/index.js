const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const myEnv = dotenv.config();
dotenvExpand(myEnv);

const Sequelize = require('sequelize');

const { Pool } = require('pg');
const pgPool = new Pool();

const sequelize = new Sequelize('abibas', 'minasorsok', '', {
  dialect: 'postgres',
  logging: () => {}
});

const Product = sequelize.define(
  'product',
  {
    productId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    images: Sequelize.ARRAY(Sequelize.STRING),
    sizes: Sequelize.JSON,
    retailPrice: Sequelize.REAL,
    salePrice: Sequelize.REAL,
    reviewCount: Sequelize.REAL,
    reviewRating: Sequelize.REAL,
    tags: Sequelize.ARRAY(Sequelize.STRING),
    colors: Sequelize.ARRAY(Sequelize.STRING),
    heartToggle: Sequelize.BOOLEAN
  },
  { timestamps: false },
  { indexes: [{ fields: ['name'] }] }
);

sequelize.authenticate().then(() => Product.sync());

module.exports.sequelize = sequelize;
module.exports.pgPool = pgPool;
