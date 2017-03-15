var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify		 = require('gulp-uglify'),
    bowerFiles = require('main-bower-files');


gulp.task('default', ['app', 'css', 'libs']);

gulp.task('libs', function() {
  return gulp.src([
      './lib/jquery/dist/jquery.min.js',
      './lib/angular/angular.min.js',
      './lib/angular-animate/angular-animate.min.js',
      './lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
      './lib/angular-route/angular-route.min.js',
      './lib/angular-ui-router/release/angular-ui-router.min.js',
      './lib/AngularJS-Toaster/toaster.min.js',
      './lib/bootstrap/dist/js/bootstrap.min.js'
  	])
		.pipe(concat('vendor.min.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('css', function () {
    return gulp.src([
      './lib/bootstrap/dist/css/bootstrap.min.css',
      './lib/angularjs-toaster/toaster.min.css',
      './assets/css/style.css'
    ])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
    return gulp.watch('./www/**/*.js', ['app']);
});

gulp.task('app', function () {
   return gulp.src([
     './www/app.js',
     './www/controllers/**/*.js',
     './www/services/**/*.js',
     './www/config/**/*.js'
   ])
   .pipe(ngAnnotate())
   .pipe(uglify())
   .pipe(concat('app.min.js'))
   .pipe(gulp.dest('./dist'));
});
