var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
gulp.task("default",function(callback){
  runSequence("build",callback);
});

gulp.task("build",function(callback){
  runSequence("clean","copy-build",callback);
});

gulp.task("clean", function(callback){
  return del(["./build"],{force: true},callback);
});

gulp.task("copy-build",["copy-html","copy-json","copy-assets", "copy-app-js","copy-vendor-js"]);

gulp.task("copy-html",function(){
  return gulp.src("./app/**/*.html")
  .pipe(gulp.dest("./build/app"));
});

gulp.task("copy-json",function(){
  return gulp.src("./data/**/*.json")
  .pipe(gulp.dest("./build/data"));
});

gulp.task("copy-assets",function(){
  return gulp.src("./assets/**/*")
    .pipe(gulp.dest("./build/assets"));
});

gulp.task("copy-app-js",function(){
  return gulp.src("./app/**/*.js")
  .pipe(gulp.dest("./build/app"));
});

gulp.task("copy-vendor-js",function(){
  return gulp.src("./vendor/**/*.js")
    .pipe(gulp.dest("./build/vendor"));
});
