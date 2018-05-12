import sass from 'rollup-plugin-sass';
import url from "rollup-plugin-url";

export default {
  input: 'src/js/app.js',
  output: {
    file: 'dist/app.generated.js',
    format: 'umd'
  },
  plugins: [
    sass(),
    url({
      limit: 10 * 1024, // inline files < 10k, copy files > 10k
      include: ["**/*.svg"], // defaults to .svg, .png, .jpg and .gif files
      emitFiles: true // defaults to true
    })
  ],
};