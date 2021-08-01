const gulp = require('gulp');
const ejs = require("gulp-ejs");
const merge = require('merge-stream');
const moment = require('moment');
const insert = require('gulp-insert');
const extender = require('gulp-html-extend');
const log = require('fancy-log')
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

const request = require('request');

// const templatePath = `${__dirname}/../mail_templates/test.ejs`;

const SOURCE_WATCH = './src/html/**/*.ejs';
const SOURCE = [
    SOURCE_WATCH,
    `src/html/${__dirname}/*.ejs`,
];


// module.exports = function compileHTML() {
//     let data = {};
//     let options = {};
//     let settings = {
//         ext: '.html',
//     };

//     const htmlTask = gulp.src('./src/html/**/*.ejs')
//         .pipe(extender({annotations:true,verbose:false})) // default options
//         .pipe(gulp.dest('dist/'))
//         .pipe(ejs({}, {ext:'.html'}))
//         .pipe(gulp.dest('dist/'));

//     const ejsTask = gulp.src('./src/html/**/*.ejs')
//         .pipe(extender({annotations:true,verbose:false})) // default options
//         .pipe(gulp.dest('dist/'));


//     return merge(htmlTask, ejsTask);
// }


module.exports = function compileHTML() {
    return gulp.src(['src/html/**/*.ejs', '!.src/html/**/*.ejs'])
    .pipe(extender({annotations:true,verbose:false})) 
    .pipe(ejs({}, {ext:'.html'}))
    .pipe($.rename({ extname: '.html' }))
    // .pipe($.if(options.env === 'prod', $.htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest('dist'))
}