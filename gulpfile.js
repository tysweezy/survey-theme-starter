var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

// concat to one theme.less -- for production
// only run this command/task for production purposes
// for theme builder
// will need to update this if adding less file to
// less directory
gulp.task('theme', function() {
  return gulp.src([
      'less/_variables.less',
      'less/_mixins.less',
      'less/_normalize.less',
      'less/_layout.less',
      'less/_typography.less',
      'less/_forms.less',
      'less/_alerts.less',
      'less/_progress.less',
      'less/_brand.less'
  ])
    .pipe(concat('theme.less'))
    .pipe(gulp.dest('./less/build/'));
});

// build less to css
gulp.task('less', function() {
  return gulp.src('./less/_base.less')
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./build/'));
});

// watch for changes
gulp.task('watch', function() {
  gulp.watch('./less/*.less', ['less']);
});

gulp.task('default', ['watch']);
