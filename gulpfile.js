var gulp = require('gulp');
var sass = require('gulp-sass');
var bro = require('gulp-bro');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var rootDir = './src/main/webapp'
var appDir = rootDir + '/app'
var sassDir = rootDir + '/sass'
var outDir = './src/main/resources'


gulp.task('build', function() {
    return gulp.src(appDir + '/main.jsx')
        .pipe(bro({
            transform: [reactify]
        }))
        .pipe(uglify())
        .pipe(rename("bundle.out.js"))
        .pipe(gulp.dest(outDir));
});

gulp.task('debugbuild', function() {
    return gulp.src(appDir + '/main.jsx')
        .pipe(bro({
            transform: [reactify]
        }))
        .pipe(rename("bundle.out.js"))
        .pipe(gulp.dest(outDir));
});


gulp.task('sass', function () {
  return gulp.src(sassDir + '/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.out.css'))
    .pipe(gulp.dest(outDir));
});


gulp.task('default', ['debugbuild', 'sass'], function() {
    gulp.watch(appDir + '/**/*', ['debugbuild']);
    gulp.watch(sassDir + '/**/*.scss', ['sass']);
});