/**
 * Copyright 2014 Semen Kiryushin
 *
 * License: Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Created by Semen Kiryushin on 16.08.2015.
 */

var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var paths = {
	root: "./src/"
};

paths.ts = paths.root + "**/*.ts";

gulp.task('default', function () {
	var tsResult = gulp.src(paths.ts)
			.pipe(sourcemaps.init()) // This means sourcemaps will be generated
			.pipe(ts({
				sortOutput: true,
				module: 'commonjs'
			}));
	return tsResult
			//.pipe(uglify())
			.pipe(sourcemaps.write('.')) // Now the sourcemaps are added to the .js file
			.pipe(gulp.dest('./dist'));
});

gulp.task('stream', function () {
	gulp.watch(paths.ts, ['default']);
});

