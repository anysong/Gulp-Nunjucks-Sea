var gulp = require('gulp');
var watch = require('gulp-watch');

/**
 * 第一次编译所有模块
 * 哪个模块发生变化单独编译哪个模块
 */

gulp.task('watch', ['sass'], () => {
    watch('./src/components/base/*.scss', () => {
        gulp.start('sass-base');
    })
    watch('./src/components/footer/*.scss', () => {
        gulp.start('sass-footer');
    })
})