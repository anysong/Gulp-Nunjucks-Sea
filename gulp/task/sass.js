const gulp = require('gulp');
const sass = require('gulp-sass');

/**
 * 编译base 模块scss文件
 * 
 */


gulp.task('sass-base', function(){
    gulp.src('./src/components/base/base.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/components/base'))
})

gulp.task("sass-footer", function(){
    gulp.src('./src/component/footer/footer.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/components/footer'))
})

gulp.task("sass", ['sass-base', 'sass-footer'])