import sass from 'rollup-plugin-sass';
import url from "rollup-plugin-url";
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'src/js/app.js',
  output: {
    file: 'public/app.generated.js',
    format: 'umd'
  },
  sourceMap: true,
  plugins: [
    sass(),
    url({
      limit: 10 * 1024, // inline files < 10k, copy files > 10k
      include: ["**/*.svg","**/*.png","**/*.jpg","**/*.mov"], // defaults to .svg, .png, .jpg and .gif files
      emitFiles: true // defaults to true
    }),
    sourcemaps(),
  ],
};