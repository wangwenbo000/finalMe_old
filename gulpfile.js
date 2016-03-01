var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var minifyejs = require('gulp-minify-ejs');

gulp.task('sass', function () {
  return gulp.src('./index_sass_style/style.scss')
      .pipe(rename("index_style.css"))
      //.pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      //.pipe(sourcemaps.write())
      .pipe(rename("index_style.css"))
      .pipe(minifyCSS())
      .pipe(gulp.dest('./www/static/css/'));
});
gulp.task('home', function () {
  return gulp.src('./home-min/home/*.html')
      .pipe(minifyejs())
      .pipe(gulp.dest('./view/home/'))
});
gulp.task('home-a', function () {
  return gulp.src('./home-min/article/*.html')
      .pipe(minifyejs())
      .pipe(gulp.dest('./view/home/article/'))
});
gulp.task('home-p', function () {
  return gulp.src('./home-min/public/*.html')
      .pipe(minifyejs())
      .pipe(gulp.dest('./view/home/public/'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./index_sass_style/style.scss', ['sass']);
  gulp.watch('./home-min/home/*.html', ['home']);
  gulp.watch('./home-min/article/*.html', ['home-a']);
  gulp.watch('./home-min/public/*.html', ['home-p']);
});