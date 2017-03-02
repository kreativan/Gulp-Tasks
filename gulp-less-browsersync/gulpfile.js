var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
// less
less = require('gulp-less'),
cssmin = require('gulp-cssmin'),
plumber = require('gulp-plumber'),
rename = require('gulp-rename');

// Relaod
gulp.task('reload', function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
    gulp.watch("./less/**/*.less").on("change", reload);
});

// Less
gulp.task('watch', function () {
    gulp.watch('./less/**/*.less', ['less']);
});
gulp.task('less', function () {
    gulp.src('./less/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css'))

});

gulp.task('default', ['less', 'watch', 'reload']);
