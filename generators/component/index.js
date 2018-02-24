/* eslint strict: ["off"] */

'use strict';

module.exports = {
  description: 'Create a component',
  prompts: [
    {
      type: 'input',
      name: 'directory',
      message: 'In which directory?',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }

        return 'The directory is required';
      },
    },
    {
      type: 'input',
      name: 'name',
      message: 'Name of component?',
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
        path:
          '../src/components/{{ properCase directory }}/{{ properCase name }}.js',
        templateFile: './component/template.js.hbs',
        abortOnFail: true,
      },
    ];
  },
};
