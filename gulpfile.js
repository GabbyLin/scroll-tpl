const gulp = require('gulp');
const clean = require('./task/task_clean');
const css = require('./task/task_css');
const js = require('./task/task_js');
const html = require('./task/task_html');
const image = require('./task/task_image');
const serve = require('./task/task_serve');

const font = require('./task/task_font');
const file = require('./task/task_file');
const api = require('./task/task_api');

const dev = gulp.parallel(html ,css, js, image, font, file, api);

exports.default = gulp.series(
  clean,
  dev,
  serve
);