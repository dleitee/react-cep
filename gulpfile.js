/**************************************************************************************************************
*
* GulpFile.js
*
**************************************************************************************************************/

var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    buffer = require('vinyl-buffer');

var browserSync = require('browser-sync').create();

gulp.watch('js/**/*.jsx', ['js']);

gulp.task('js', function () {

  browserify({
    entries: './js/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('dist'));

});

gulp.task('server', ['js'], function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('default', ['server'], function(){

});