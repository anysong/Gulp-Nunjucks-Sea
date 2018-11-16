const gulp = require('gulp');
const nunjuncks = require('gulp-nunjucks');
const notify = require('gulp-notify')

/**
 * 模板引擎编译
 * 
 */

gulp.task('nunjucks', () => {
    gulp.src('./src/views/index.html')
        .pipe(nunjuncks.compile({
            username: 'xxmxm'
        }))
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(gulp.dest('./.www/views'))
})