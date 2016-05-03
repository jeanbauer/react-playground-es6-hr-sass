const path = require('path');

module.exports = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.resolve(__dirname, '../../public')
    }
  }
};
