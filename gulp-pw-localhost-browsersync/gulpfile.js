var gulp        = require('gulp');
var notify  = require('gulp-notify');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var connect     = require('gulp-connect-php');

// Save a reference to the `reload` method

// Connect to Localhost & Browsersync
gulp.task('sync', function () {
  connect.server({}, function (){
        browserSync.init({
            proxy: '127.0.0.1:8000/some_folder/'
        });
    });
    //gulp.src("./index.php").pipe(notify("Gulp Started!"));
});
// Keep an eye on less files for changes...
gulp.task('watch', function () {
    gulp.watch("some_folder/site/templates/less/**/*.less").on("change", reload);
});

gulp.task('default', ['watch', 'sync']);
