/**************************************************************************************************************
*
* GulpFile.js
*
**************************************************************************************************************/

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    buffer = require('vinyl-buffer');

gulp.watch('js/**/*.jsx', ['js']);

gulp.task('js', function () {

  browserify({
    entries: './js/app.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(["reactify"])
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./public/'));

});

gulp.task('deploy', function(){

    gulp.src(['./bower_components/jquery/dist/jquery.min.js', './bower_components/material-design-lite/material.min.js', './bower_components/material-design-lite/material.min.css'])
      .pipe(gulp.dest('./public/'));

});

gulp.task('default', ['js'], function(){

});