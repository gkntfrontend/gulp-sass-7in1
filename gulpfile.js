'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/sass/main.scss')
    .pipe(sass({
      outputStyle: ':compact'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./src/assets/styles/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/styles/sass/**/*.scss', gulp.series('sass'));
});
