var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');

gulp.task('tinypng', function (done) {
  gulp.src('img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'p8Oik4c2N3f9ggYFaq4ZB7Q5z8LF9iFG'
    }))
    .pipe(gulp.dest('images'));
    done();
});

