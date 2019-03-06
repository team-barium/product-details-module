const app = require('./app');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const myEnv = dotenv.config();
dotenvExpand(myEnv);

app.listen(process.env.PORT, () =>
  console.log('Listening on PORT', process.env.PORT)
);
