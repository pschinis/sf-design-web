// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(cb) {
  console.log('Compiling SASS');
  gulp
    .src('app.scss')
    .pipe(sass())
    .pipe(
      gulp.dest(function(f) {
        return f.base;
      })
    );
  cb();
});

gulp.task('default',
  gulp.series('sass', function(cb) {
    gulp.watch('app.scss', gulp.series('sass'));
    cb();
  })
);