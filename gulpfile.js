var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-clean-css');
var del = require('del');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(function(path) {
      path.basename = 'style';
    }))
    .pipe(gulp.dest('dist/css/'))
    .pipe(cssmin())
    .pipe(rename(function(path) {
      path.basename = 'style.min';
    }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('clean', function() {
  return del('dist/*');
});

gulp.task('assets', function() {
  return gulp.src(['src/index.html', 'src/font/**', 'src/img/**', 'src/js/**'], {base: 'src'})
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'dist'
  });

  browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', ['watch', 'serve']);
gulp.task('dist', ['clean', 'sass', 'assets']);
