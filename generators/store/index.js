/* eslint strict: ["off"] */

'use strict';

module.exports = {
  description: 'Create a store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Name of the store?',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    return [
      {
        type: 'add',
        path: '../src/store/{{ name }}/actions.js',
        templateFile: './store/actions.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/store/{{ name }}/constants.js',
        templateFile: './store/constants.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/store/{{ name }}/reducer.js',
        templateFile: './store/reducer.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/store/{{ name }}/selector.js',
        templateFile: './store/selector.js.hbs',
        abortOnFail: true,
      },
    ];
  },
};
