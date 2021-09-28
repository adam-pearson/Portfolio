var gulp = require("gulp"),
    babel = require("gulp-babel"),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

gulp.task("styles", function () {
    return gulp.src('./src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task("babel", function () {
    return gulp.src("./src/js/**/*.js")
      .pipe(babel({presets: ['@babel/env']}))
      .pipe(gulp.dest("./dist/js"));
  });

gulp.task('watch', function() {
    gulp.watch('./src/js/**/*.js', gulp.series('babel'));
    gulp.watch('./src/scss/**/*.scss', gulp.series('styles'));
});