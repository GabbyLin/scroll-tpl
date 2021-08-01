const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const gulpPlumber = require('gulp-plumber');
const sass = require('gulp-sass');


const SOURCE_WATCH = 'src/css/**/*.scss';
const SOURCE = [SOURCE_WATCH, '!src/css/**/_*']; 


module.exports = function compileCss() {
    let s = sass({
            // outputStyle: 'compressed'
        });
    s = s.on('error', sass.logError);
    
    return gulp.src(SOURCE)
        .pipe(gulpPlumber())
        .pipe(sourcemaps.init())
        .pipe(s)
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
}