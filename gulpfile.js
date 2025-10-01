import gulp from 'gulp';

// CSS
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';   // ✅ forma recomendada
const sass = gulpSass(dartSass);
import sourcemaps from 'gulp-sourcemaps';

const paths = {
  scss: 'src/scss/**/*.scss'
};

function css() {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/build/css'));
}

function dev(done) {
  gulp.watch(paths.scss, css);
  done();
}

export { css, dev };
export default gulp.parallel(css, dev);