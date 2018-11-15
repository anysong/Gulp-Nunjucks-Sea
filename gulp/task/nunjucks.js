const gulp = require('gulp');
const nunjuncks = require('gulp-nunjucks');

/**
 * 模板引擎编译
 * 
 */

gulp.task('nunjucks-base', () => {
    gulp.src('./src/views/index.html')
        .pipe(nunjuncks.compile())
        .pipe(gulp.dest('./.www/views'))
})