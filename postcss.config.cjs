const fs = require('node:fs');
const path = require('node:path');

const hasModule = (moduleName) =>
  fs.existsSync(path.join(__dirname, 'node_modules', moduleName));

const plugins = [];

if (hasModule('tailwindcss')) {
  plugins.push(require('tailwindcss'));
} else {
  const fallbackPlugin = () => ({
    postcssPlugin: 'tailwindcss-fallback',
    AtRule: {
      tailwind: (atRule) => {
        atRule.remove();
      },
    },
  });

  fallbackPlugin.postcss = true;
  plugins.push(fallbackPlugin);
}

if (hasModule('autoprefixer')) {
  plugins.push(require('autoprefixer'));
}

module.exports = {
  plugins,
};
