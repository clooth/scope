import gulp from "gulp"
import babel from "gulp-babel"
import sourcemaps from "gulp-sourcemaps"
import concat from "gulp-concat"
import watch from "gulp-watch"
import batch from "gulp-batch"

gulp.task("watch", () => {
  watch("src/**/*.es6", batch((events, done) => {
    gulp.start("build", done)
  }))
})

gulp.task("build", () => {
  return gulp.src("src/**/*.es6")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("app.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"))
})