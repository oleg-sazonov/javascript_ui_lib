// Gulp configuration file

"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");

const dist = "./dist";
const srcPaths = {
	html: "./src/index.html",
	sass: "./src/sass/style.scss",
	js: "./src/js/main.js",
	watchHtml: "./src/**/*.html",
	watchSass: "./src/sass/**/*.scss",
	watchJs: "./src/js/**/*.js",
};

// Copy HTML task
const copyHtml = () => {
	return gulp
		.src(srcPaths.html)
		.pipe(gulp.dest(dist))
		.pipe(browsersync.stream());
};

// Compile SASS to CSS
const buildSass = () => {
	return gulp
		.src(srcPaths.sass)
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest(dist))
		.pipe(browsersync.stream());
};

// Build JavaScript with Webpack
const buildJs = () => {
  return gulp
    .src(srcPaths.js)
    .pipe(
      webpack({
        mode: "development",
        output: {
          filename: "script.js",
        },
        devtool: "source-map",
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        debug: false,
                        corejs: 3,
                        useBuiltIns: "usage",
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(dist))
    .pipe(browsersync.reload({ stream: true }));
};

// Watch task
const watchFiles = () => {
  browsersync.init({
    server: {
      baseDir: dist,
    },
    port: 4000,
    notify: true,
  });

  gulp.watch(srcPaths.watchHtml, copyHtml);
  gulp.watch(srcPaths.watchSass, buildSass);
  gulp.watch(srcPaths.watchJs, buildJs);
};

// Production build
const prod = () => {
  // Process CSS
  gulp
    .src(srcPaths.sass)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(gulp.dest(dist));

  // Process JS
  return gulp
    .src(srcPaths.js)
    .pipe(
      webpack({
        mode: "production",
        output: {
          filename: "script.js",
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        corejs: 3,
                        useBuiltIns: "usage",
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(dist));
};

// Export tasks
module.exports = {
  copyHtml,
  buildSass,
  buildJs,
  watchFiles,
  prod,
  build: gulp.series(copyHtml, buildSass, buildJs),
  default: gulp.series(gulp.parallel(copyHtml, buildSass, buildJs), watchFiles),
};
