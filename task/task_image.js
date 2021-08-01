const gulp = require('gulp');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const merge = require('merge-stream');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
// const $ = require('gulp-load-plugins')();


const DIST = 'dist/img';
const IMG_SRC = ['src/img/**/*.+(jpg|jpeg|png|gif|svg|ico)', '!src/img/_*'];
const OTHER_IMG = [];
IMG_SRC.forEach((value) => {
    if (value.indexOf('!') === -1) {
        OTHER_IMG.push(`!${value}`);
    } else {
        OTHER_IMG.push(value.substr(1));
    }
});

module.exports = function compileIMG() {
    const taskOtherIMG = gulp.src(OTHER_IMG)
        .pipe($.changed(DIST))
        .pipe($.size({
            title: '',
            showFiles: true,
        }))
        .pipe(gulp.dest(DIST));

    const taskIMGSRC = gulp.src(IMG_SRC)
        .pipe($.changed(DIST))
        .pipe($.size({
            title: '',
            showFiles: true,
        }))
        .pipe($.imagemin({
            plugins: [
                imageminPngquant({
                    quality:[0.8]
                }),
                imageminMozjpeg({
                    quality:[0.8]
                })
            ]
        }))
        .pipe(gulp.dest(DIST))
        .pipe($.size({
            title: 'dist',
        }));

    return merge(taskOtherIMG, taskIMGSRC);
}


