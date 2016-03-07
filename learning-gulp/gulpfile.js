var gulp = require('gulp');
var sass = require('gulp-sass');
var shell = require('gulp-shell');

gulp.task('default', function () {
    console.log('Hello World')
});

gulp.task('task1', function(){
    console.log('task1')
});

gulp.task('task2', ['task1'], function(){
    console.log('task2')
});

gulp.task('compile-sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
});

gulp.task('compile-modernizr',
    shell.task('modernizr -c modernizr-config.json -d public/js/vendor')
);

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['compile-sass']);
    gulp.watch('modernizr-config.json', ['compile-modernizr'])
});