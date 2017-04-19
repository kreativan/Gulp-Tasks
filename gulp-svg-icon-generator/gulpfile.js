var gulp = require("gulp");
var svgmin = require("gulp-svgmin");
var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");

gulp.task("svg-icon-generator", function() {
return gulp.src("./icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename("icons.svg"))
    .pipe(gulp.dest("./"));
});

// To Run Script in bash
// gulp svg-icon-generator

/*
*   How to use svg icons

    <svg class="svg-icon" xmlns=http://www.w3.org/2000/svg role="img" >
        <title>calendar</title>
        <use xlink:href="images/icons.svg#svg-calendar"></use>
    </svg>

    or

    <svg class="svg-icon" xmlns=http://www.w3.org/2000/svg role="img" >
        <use xlink:href="images/icons.svg#svg-calendar"></use>
    </svg>

*
*/
