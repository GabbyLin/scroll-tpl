const gulp = require('gulp');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const path = require('path');


const SOURCE_WATCH = 'src/html/**/*.ejs';

const SOURCE = [
    SOURCE_WATCH,
    '!src/html/**/*.ejs',
];


module.exports = function clean() {
    return gulp.src('dist/**/*.ejs')
        .pipe(gulp.dest('dist'))
        .pipe(vinylPaths(del));
}
