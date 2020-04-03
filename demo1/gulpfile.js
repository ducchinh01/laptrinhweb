var gulp = require('gulp');
// gulp-sass plugin
var sass = require('gulp-sass');
// const { series } = require('gulp');

gulp.task('sass', function () {
    return gulp.src('src/scss/styles.scss') // cấu hình gulp địa chỉ của tập tin nguồn sass
        .pipe(sass()) // chuyển tập tin nguồn sass thành tập tin css
        .pipe(gulp.dest('src/css')) // địa chỉ tập tin css sẽ được lưu lại
});

gulp.task('watch', function(){
    gulp.watch('src/scss/*.scss', gulp.series('sass')); 
    // Other watchers
})

// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// // The `clean` function is not exported so it can be considered a private task.
// // It can still be used within the `series()` composition.
// function clean(cb) {
//   // body omitted
//   cb();
// }

// // The `build` function is exported so it is public and can be run with the `gulp` command.
// // It can also be used within the `series()` composition.
// function build(cb) {
//   // body omitted
//   cb();
// }

// exports.build = build;
// exports.default = series(clean, build);