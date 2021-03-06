var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'
];

var sassSources = ['components/sass/style.scss']

gulp.task('coffee', function() {
    gulp.src(coffeeSources) //specify source files
        .pipe(coffee({bare: true}) //specify what to do
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts')) //specify destination folder
});

gulp.task('js', function() {
    gulp.src(jsSources) //specify source files
        .pipe(concat('script.js')) //specify what to do
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js')) //specify destination folder
});

gulp.task('compass', function() {
    gulp.src(sassSources) //specify source files
        .pipe(compass( {
            sass: 'components/sass',
            image: 'builds/development/images',
            style: 'expanded'
    }) //specify what to do
            .on('error', gutil.log))
        .pipe(gulp.dest('builds/development/css')) //specify destination folder
});

gulp.task('watch', function () {
    gulp.watch(coffeeSources, ['coffee']);
    gulp.watch(jsSources, ['js']);
    gulp.watch('components/sass/*.scss', ['compass']); //Monitor all .scss files for changes
});

gulp.task('default', ['coffee', 'js', 'compass', 'watch']);