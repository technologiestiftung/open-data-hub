'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var babel = require('gulp-babel');

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('scss/root.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('assets', function() {
    gulp.src('./assets/*/*.*')
        .pipe(gulp.dest('./dist/assets/'));
})

gulp.task('fonts', function() {
    gulp.src('./assets/fonts/*.otf')
        .pipe(gulp.dest('./dist/assets/fonts/'));
})

gulp.task('index-html', function() {
    gulp.src('./index.html')
        .pipe(gulp.dest('dist'));
})

gulp.task('js', function () {
    return gulp.src('*.js').pipe(babel({ presets: ['env'] })).pipe(gulp.dest('dist'));
});

gulp.task('useref', function () {
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});

gulp.task('build', ['sass', 'js', 'index-html', 'assets', 'useref', 'fonts']);

gulp.task('watch', ['browserSync', 'sass', 'fonts'], function () {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
});