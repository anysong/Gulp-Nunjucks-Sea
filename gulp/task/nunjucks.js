const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const notify = require('gulp-notify')

/**
 * 模板引擎编译
 * 
 */

gulp.task('nunjucks', () => {
    gulp.src('./src/views/index.html')
        .pipe(nunjucks.compile({}, {
            'autoescape': true,
            'shorten': str => str.slice(0, 5),
        }))
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(gulp.dest('./.www/views'))
})