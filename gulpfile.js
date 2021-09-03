var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

sass.compiler = require('node-sass');

//convert sass to css
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// uglify css
gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('run', gulp.series('sass','css'));

gulp.task('watch', function() {
    gulp.watch('./scss/*.scss', gulp.series('sass'));
    gulp.watch('./css/*.css', gulp.series('css'));
});

gulp.task('default', gulp.series('run', 'watch'));