'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');

function compileSass(done) {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
    done();
}

function watchSass() {
    gulp.watch('app/sass/**/*.scss', compileSass);
}

exports.watchSass = watchSass
