var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack/dev.config.js-bak');
var imagemin = require('gulp-imagemin');
var notify = require('gulp-notify');

gulp.task("webpack1", function() {
    var myConfig = Object.create(webpackConfig);
    return gulp
        .src('/src/App.js')
        .pipe(webpack(myConfig))
        .pipe(gulp.dest('./build'));
});

/**
 * 压缩图片
 */
gulp.task('images', function() {
    return gulp.src('src/images/**')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});

gulp.task("default",function () {
    gulp.watch('./js/App.js', ['clean'],function () {
        gulp.start('images');
    });
});

gulp.task('watch', function() {
    // Watch .scss files
    //gulp.watch('src/styles/**/*.scss', ['styles']);
    // Watch .js files
    //gulp.watch('src/scripts/**/*.js', ['scripts']);
    // Watch image files
    gulp.watch('src/images/**/*', ['images']);
});