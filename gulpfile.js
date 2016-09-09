var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require ('gulp-coffee');
var concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'];

gulp.task('coffee', function() {
    gulp.src(coffeeSources) //specify source files
        .pipe(coffee({bare: true}) //specify what to do
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts')) //specify destination folder
});

gulp.task('js', function() {
    gulp.src(jsSources) //specify source files
        .pipe(concat('script.js')) //specify what to do
        .pipe(gulp.dest('builds/development/js')) //specify destination folder
});
