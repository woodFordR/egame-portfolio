'use strict';

const CssImport = require('postcss-import');
const TailwindPostCSS = require('@tailwindcss/postcss');
const Autoprefixer = require('autoprefixer');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: CssImport,
            options: {
              path: ['node_modules'],
            },
          },
          {
            module: TailwindPostCSS,
          },
          {
            module: Autoprefixer,
          },
        ],
      },
    },
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    staticEmberSource: true,
    staticAddonTrees: true,
    staticAddonTestSupportTrees: true,
  });
};
