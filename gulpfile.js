"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const concat = require("gulp-concat");
sass.compiler = require("node-sass");

const sassPaths = {
	src: "./src/assets/styles/sass/**/*.scss",
	main: "./src/assets/styles/sass/*.scss",
	dest: "./src/assets/styles/css",
	concatCss: "main.css",
	concatNano: "main.nano.css"
};

gulp.task("sass", () => {
	return gulp
		.src(`${sassPaths.main}`)
		.pipe(
			sass({
				outputStyle: "compact"
			}).on("error", sass.logError)
		)
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions"]
			})
		)
		.pipe(concat(`${sassPaths.concatCss}`))
		.pipe(gulp.dest(`${sassPaths.dest}`));
});

gulp.task("sass:nano", () => {
	return gulp
		.src(`${sassPaths.main}`)
		.pipe(sass({}).on("error", sass.logError))
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions"]
			})
		)
		.pipe(cssnano())
		.pipe(concat("main.nano.css"))
		.pipe(gulp.dest(`${sassPaths.dest}`));
});

gulp.task("sass:watch", () => {
	gulp.watch(`${sassPaths.src}`, gulp.series("sass"));
});
