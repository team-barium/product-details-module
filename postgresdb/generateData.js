const fs = require('fs');
const DataStream = require('../postgresdb/dataStream');

const writeDataToFile = () => {
  const file = fs.createWriteStream(`./postgresdb/data.csv`);
  const data = new DataStream();
  const write = data.pipe(file);
  return new Promise((resolve, reject) => {
    write.on('finish', resolve);
    write.on('error', reject);
  });
};

module.exports = writeDataToFile;
