var gulp=require('gulp');
var sass=require('gulp-sass');
var rename=require('gulp-rename');
var minifyCSS=require('gulp-minify-css');
var minifyhtml=require('gulp-minify-html');
var htmlInline = require('gulp-html-inline');
var replace=require('gulp-replace');
var md5=require('md5');

gulp.task('sass', function(){
  return gulp.src('./DaVinci/sass/style.scss')
    .pipe(rename("index_style.css"))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename("index_style.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./www/static/css/'));
});
gulp.task('template', function(){
  return gulp.src('./DaVinci/*.html')
    .pipe(minifyhtml())
    .pipe(htmlInline({ minifyCss: false, minifyJs: true }))
    .pipe(replace('CHANGE_VALUE_NO', 'WWB_' + md5(new Date().getTime())))
    .pipe(gulp.dest('./view/home/'))
});

gulp.task('sass:watch', function(){
  gulp.watch('./DaVinci/sass/*.scss', ['sass','template']);
  gulp.watch('./DaVinci/*.html', ['template']);
});