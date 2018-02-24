const storeGenerator = require('./store/index.js');

module.exports = plop => {
  plop.setGenerator('store', storeGenerator);
  plop.addHelper('ucFirst', txt => txt[0].toUpperCase() + txt.slice(1));
  plop.addHelper('uc', txt => txt.toUpperCase());
};
