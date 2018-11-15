var gulp = require('gulp');
var watch = require('gulp-watch');

/**
 * 第一次编译所有模块
 * 哪个模块发生变化单独编译哪个模块
 */

gulp.task('watch', ['sass'], function(){
    watch('./src/components/base/*.scss', function(){
        gulp.start('sass-base');
    })
    watch('./src/components/footer/*.scss', function(){
        gulp.start('sass-footer');
    })
})