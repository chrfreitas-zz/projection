import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import stylus from 'gulp-stylus';
import del from 'del';
import jshint from 'gulp-jshint';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import jsmin from 'gulp-jsmin';
import uglifycss from 'gulp-uglifycss';

gulp.task('js:bundle', () => {

    gulp.start('js:clean');

    gulp.src(['src/assets/js/**/*.js', '!src/assets/js/**/*.test.js'])
        .pipe(jshint())
        .pipe(sourcemaps.init())
        .pipe(jshint.reporter('default'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('bundle.min.js'))
        .pipe(jsmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('js:clean', () => {
    del(['dist/js/bundle.js']);
    del.sync(['dist/js/bundle.js']);
})

gulp.task('js:watch', () => {
    gulp.watch('src/assets/js/**/*.js', ['js:bundle']);
});

gulp.task('js:test', () => {

})

gulp.task('stylus:bundle', () => {

    gulp.start('stylus:clean');

    gulp.src('src/assets/stylus/main.styl')
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(concat('style.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('stylus:clean', () => {
    del(['dist/css/style.css']);
    del.sync(['dist/css/style.css']);
});

gulp.task('stylus:watch', () => {

    gulp.watch('src/assets/stylus/**/*.styl', ['stylus:bundle']);

});

gulp.task('vendor:bundle', () => {

    gulp.src('vendor/angular/angular.min.js')
        .pipe(gulp.dest('dist/vendor/angular'));

    gulp.src('vendor/angular-route/angular-route.min.js')
        .pipe(gulp.dest('dist/vendor/angular-route'));
});

gulp.task('all:bundle', () => {

    gulp.start('lib:bundle');
    gulp.start('views:bundle');
    gulp.start('js:bundle');
    gulp.start('stylus:bundle');

});

gulp.task('all:watch', () => {
    gulp.watch(['app/css/**/*.styl, app/js/**/*.js'], ['js:watch', 'css:watch'])
});
