const gulp = require('gulp');
const nunjuncks = require('gulp-nunjucks');

/**
 * 
 * 
 */

gulp.task('nunjucks-base', () => {
    gulp.src('./src/components/base/base.html')
        .pipe()
})