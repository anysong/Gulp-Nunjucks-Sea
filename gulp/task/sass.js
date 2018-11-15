const gulp = require("gulp");
const sass = require("gulp-sass");
const notify = require("gulp-notify");
const autoPreFixer = require("gulp-autoprefixer");

/**
 * 编译base 模块scss文件
 */

gulp.task("sass-base", function(){
    gulp.src("./src/components/base/base.scss")
    .pipe(sass())
    .on("error",notify.onError("Error: <%= error.message %>"))
    .pipe(autoPreFixer({
        browsers: ["last 2 versions"],  //主流浏览器的2个版本
        cascade: true                   //是否美化属性值
    }))
    .pipe(gulp.dest("./.www/components/base"))
})

gulp.task("sass-footer", function(){
    gulp.src("./src/components/footer/footer.scss")
    .pipe(sass())
    .on("error",notify.onError("Error: <%= error.message %>"))
    .pipe(autoPreFixer({
        browsers: ["last 2 versions"],  //主流浏览器的2个版本
        cascade: true                   //是否美化属性值
    }))
    .pipe(gulp.dest("./.www/components/footer"))
})

gulp.task("sass", ["sass-base", "sass-footer"])