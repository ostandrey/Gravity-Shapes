const {task,src, dest, watch,series,parallel} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const fs = require('fs');

// TODO: delete unused tasks;
//       add sourcemaps for scss;
//       fix problem with build when default task starts;
//       modify dependencies by type (dev)Dependencies in package.json

task('sass', function(){
    gulp.src('sources-file')
        .pipe(sass())
        .pipe(dest('app/styles'));
});

task('html', function() {
    return src('app/index.html')
        .pipe(dest('dist/'))
});


task('css', function () {
    return src('app/styles/styles.scss')
        .pipe(sass({'outputStyle': 'compressed'}))
        .pipe(dest('dist/'))
});

task('js', function () {
    return browserify("./app/js/main.js")
        .transform("babelify", {
            presets: ["@babel/preset-env"],
            sourceMaps: true
        })
        .bundle()
        .pipe(fs.createWriteStream("dist/main.js"))
});

task('sync', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    watch(['app/index.html']).on('change', series('html', browserSync.reload));
    watch(['app/styles/**/*.scss']).on('change', series('css', browserSync.reload));
    watch(['app/js/**/*.js']).on('change', series('js', browserSync.reload));
});

exports.js = 'js';
exports.build = series(parallel("html", "css", "js"), 'sync');
exports.default = parallel("html", "css", "js");
