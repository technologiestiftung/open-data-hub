var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
        baseDir: './'
        },
    })
})

gulp.task('sass', function(){
    return gulp.src('scss/root.scss')
      .pipe(sass())
      .pipe(gulp.dest(''))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

gulp.task('useref', function(){
return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest(''))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('scss/**/*.scss', ['sass']); 
    gulp.watch('index.html', browserSync.reload); 
    gulp.watch('index.js', browserSync.reload); 
  });