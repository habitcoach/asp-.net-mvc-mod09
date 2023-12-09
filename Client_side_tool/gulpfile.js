const gulp = require('gulp');
//const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('sass', function () {
    console.log('wow, it is working!!!!!!!!!!');
    return gulp.src('wwwroot/sass/sassSite.scss') // Path to your Sass files
        .pipe(sass())
        .pipe(gulp.dest('wwwroot/css/')); // Destination folder for the compiled CSS
});

;

// Task to minify CSS
gulp.task('minifyCss', function () {
    return gulp.src('wwwroot/css/site.css') // Replace with the path to your CSS file
        .pipe(cleanCSS())
        .pipe(gulp.dest('wwwroot/css')); // Output folder for the minified CSS
});

// Task to concatenate and minify CSS files
gulp.task('bundleCss', function () {
    return gulp.src(['wwwroot/sass/sassSite.scss', 'wwwroot/css/site.css']) // List your CSS files here
        .pipe(concat('bundle.css')) // Concatenate into a single file
        .pipe(cleanCSS()) // Minify the concatenated CSS
        .pipe(gulp.dest('wwwroot/css')); // Output folder for the bundled and minified CSS
});

gulp.task('test', function () {

    console.log('wow, it is working!');

});

