var gulp=require('gulp');
var sass=require('gulp-sass');
var rename=require('gulp-rename');
var minifyCSS=require('gulp-minify-css');
var minifyejs=require('gulp-minify-ejs');
var replace=require('gulp-replace');
var md5=require('md5');
var htmloptimize=require('gulp-htmloptimize');

gulp.task('sass', function(){
  return gulp.src('./DaVinci/sass/style.scss')
    .pipe(rename("index_style.css"))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename("index_style.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./www/static/css/'));
});
gulp.task('home', function(){
  return gulp.src('./DaVinci/home/*.html')
    .pipe(minifyejs())
    .pipe(htmloptimize({}))
    .pipe(gulp.dest('./view/home/'))
});
gulp.task('home-a', function(){
  return gulp.src('./DaVinci/article/*.html')
    .pipe(minifyejs())
    .pipe(htmloptimize({}))
    .pipe(gulp.dest('./view/home/article/'))
});
gulp.task('home-p', function(){
  return gulp.src('./DaVinci/public/*.html')
    .pipe(minifyejs())
    //.pipe(htmloptimize({}))
    .pipe(replace('CHANGE_VALUE_NO', 'WWB_' + md5(new Date().getTime())))
    .pipe(gulp.dest('./view/home/public/'))
});

gulp.task('sass:watch', function(){
  gulp.watch('./DaVinci/sass/style.scss', ['sass']);
  gulp.watch('./DaVinci/home/*.html', ['home']);
  gulp.watch('./DaVinci/article/*.html', ['home-a']);
  gulp.watch('./DaVinci/public/*.html', ['home-p']);
});