var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    minify = require('gulp-clean-css'),
    strip = require('gulp-strip-comments'),
    browserSync = require('browser-sync').create();

var path = {
    root: 'source/',
    source: {
        jsBuild: 'source/js/*.js',
        css: 'source/css/*.scss'
    },
    constr: {
        build: {
            js: 'source/js/content.js',
            css: 'source/css/style.scss'
        }
    },
    app: {
        css: 'app/',
        js: 'app/'
    }
};

gulp.task('build:css', function () {
    gulp.src(path.constr.build.css)
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(prefixer('last 2 versions', '> 1%', 'safari 5', 'ie 9', 'opera 12.1'))
        .pipe(minify({keepBreaks:true}))
        .pipe(gulp.dest(path.app.css));
});

gulp.task('build:js', function () {
    gulp.src(path.source.jsBuild)
        .pipe(rigger())
        .pipe(strip())
        .pipe(sourcemaps.init())
        .pipe(concat('content.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.app.js));
});

gulp.task('serv:init', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serv:reload', function() {
    browserSync.reload();
});

gulp.task('serv:watcher', function() {
    gulp.watch('source/css/*.scss', ['build:css']);
    gulp.watch('source/js/*.js', ['build:js']);
    gulp.watch('app/style.css', ['serv:reload']);
    gulp.watch('app/*.js', ['serv:reload']);
    gulp.watch('./index.html', ['serv:reload']);
});

gulp.task('server', ['serv:init','serv:watcher']);

gulp.task('watch', function(){
    watch([path.constr.build.js], function() {
        gulp.start('build:js');
    });
    watch(['source/css/**/*.scss'], function() {
        gulp.start('build:css');
    });
});

gulp.task('push', ['build:js', 'build:css']);
