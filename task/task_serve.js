const gulp = require('gulp');

const css = require('./task_css');
const js = require('./task_js');
const html = require('./task_html');
const image = require('./task_image');

const font = require('./task_font');
const file = require('./task_file');
const api = require('./task_api');


const server = require('browser-sync').create();


module.exports = function serve(cb) {
  server.init({
    port: 3000,
    // open: OPEN_BROWSER,
    files: ['dist/**/*/*'],
    server: {
        baseDir: './dist/',
        // middleware: [proxy],
    },
    ui: {
        port: 3001,
    },
  });
  gulp.watch('src/img/**/*.(jpg|png|gif|svg|ico)', gulp.series(image)).on('change', server.reload);
  gulp.watch('src/css/**/*.scss', gulp.series(css)).on('change', server.reload);
  gulp.watch('src/js/**/*.js', gulp.series(js)).on('change', server.reload);
  gulp.watch('!*src/fonts/**/_*', gulp.series(font));
  gulp.watch('!*src/files/**/_*', gulp.series(file));
  gulp.watch('!*src/api/**/_*', gulp.series(api));
  gulp.watch('src/html/**/*.ejs', gulp.series(html));
  gulp.watch('dist/*.html').on('change', server.reload);

  return cb()
};