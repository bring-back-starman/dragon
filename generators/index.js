const storeGenerator = require('./store/index.js');
const componentGenerator = require('./component/index.js');

module.exports = plop => {
  plop.setGenerator('store', storeGenerator);
  plop.setGenerator('component', componentGenerator);
};
