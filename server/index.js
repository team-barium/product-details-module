const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const PORT = 3000;

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client/dist')));


app.listen(PORT, () => console.log('Listening on PORT', PORT));
