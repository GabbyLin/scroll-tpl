const gulp = require('gulp');
// const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const gulpPlumber = require('gulp-plumber');
const rollup = require("gulp-better-rollup");
const babel = require("rollup-plugin-babel");
 

const SOURCE_WATCH = 'src/js/**/*.js';

const SOURCE = [
    SOURCE_WATCH,
    '!*src/js/**/_*',
];




module.exports = function compileJs() {
    return gulp.src(SOURCE)
        .pipe(gulpPlumber())
        .pipe(sourcemaps.init())
        .pipe(rollup({
            plugins: [babel()]
        },{
            format: "iife"
        }))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
}

