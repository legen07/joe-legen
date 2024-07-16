import gulp, {src, dest, parallel, series} from 'gulp';

import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import pug from 'gulp-pug';




export function defaultTask(cb) {
  cb()
}

export function css() {
	return src('./src/scss/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(dest('./d/'))
}

export function html() {
	return src('./src/pug/*.pug')
		.pipe(pug())
		.pipe(dest('./d/'))
}

export function watch() {
	gulp.watch('./src/pug/**/*', html)
	gulp.watch('./src/scss/**/*', css)
}