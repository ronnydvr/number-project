const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  try {
    const filePath = path.join(process.cwd(), 'data', 'prices.json');
    fs.writeFileSync(filePath, event.body);
    return { statusCode: 200, body: 'Prices updated successfully!' };
  } catch (err) {
    return { statusCode: 500, body: 'Error updating prices: ' + err.message };
  }
};