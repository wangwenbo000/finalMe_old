var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function() {
  return gulp.src('./index_sass_style/style.scss')
    .pipe(rename("index_style.css"))
    //.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    //.pipe(sourcemaps.write())
    .pipe(rename("index_style.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./www/static/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./index_sass_style/style.scss', ['sass']);
});