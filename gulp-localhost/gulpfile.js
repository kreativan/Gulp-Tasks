var gulp    = require('gulp');
var notify  = require('gulp-notify');
// RELOAD modules
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var connect     = require('gulp-connect-php');
// LESS related modules
var plumber     = require('gulp-plumber');
var less        = require('gulp-less');
var autoprefix  = require('gulp-autoprefixer');
var cssmin      = require('gulp-cssmin');
var rename      = require('gulp-rename');


// Compile LESS, autoprefix CSS3, minify...
// and save to target CSS directory
gulp.task('less', function () {

    var onError = function(err) {
      notify.onError({
          title:    "Error compiling less file",
          subtitle: "<%= error.filename.replace(/^.*[\\\/]/, '') %>",
          message:  "Error: <%= error.message %>",
          sound:    "Beep"
        })(err);
      this.emit('end')
    };

    return gulp.src('less/theme.less')
        .pipe(plumber({errorHandler: onError}))
        .pipe(less())
        .pipe(autoprefix('last 2 version'))
        .pipe(notify("Succesfully compiled <%= file.relative %>!"))
        .pipe(gulp.dest('css'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css'))
        //.pipe(notify('LESS Compiled'))

});

// Keep an eye on less files for changes...
gulp.task('watch', function () {
    // Main Files to watch
    gulp.watch("*.html").on("change", reload);
    gulp.watch("*.php").on("change", reload);
    // less/css/js to watch
    gulp.watch('./less/custom/*.less', ['less']);
    gulp.watch('./less/vars.less', ['less']);
    gulp.watch('./less/theme.less', ['less']);
    gulp.watch('./less/responsive.less', ['less']);
    gulp.watch("./css/*.css").on("change", reload);
});

// Connect to Localhost & Browsersync
gulp.task('connect-sync', function() {
  connect.server({}, function (){
        browserSync.init({
            proxy: '127.0.0.1:8000', // localhost root
            baseDir: "./PROJECT_FOLDER/", // define base dir here
            browser: "firefox"
        });
    });
});

// What tasks does running gulp trigger?
gulp.task('default', ['less', 'watch', 'connect-sync']);
