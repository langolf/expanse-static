let postcss = require('postcss');
let rfs = require('rfs/postcss.js');

module.exports = {
  plugins: [
    {
      postcssPlugin: 'grouped',
      Once(root, { result }) {
        return postcss([require('postcss-mixins')]).process(root, result.opts);
      },
    },
    require('tailwindcss'),
    require('postcss-nested'),
    require('rfs/postcss.js')({
      baseValue: 20,
      breakpoint: 1440,
      remValue: 17,
    }),
    require('autoprefixer'),
  ],
};
