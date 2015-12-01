var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    del = require('del'),
    inject = require('gulp-inject'),
    serve = require('gulp-serve');

gulp.task("default",function(callback){
  runSequence("build","serve",callback);
});

gulp.task("build",function(callback){
  runSequence("clean","copy-build","index",callback);
});

gulp.task("serve",serve("build"));

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

gulp.task("index",function(){
  var tmpl_src = ["./build/assets/css/**/*.css",
                  "./build/vendor/jquery-1.11.0.min.js",
                  "./build/vendor/bootstrap-3.1.1.min.js",
                  "./build/vendor/**/*.js",
                  "./build/app/**/*.js"]
  return gulp.src("./index.html")
    .pipe(inject(gulp.src(tmpl_src),{ignorePath: 'build'}))
    .pipe(gulp.dest('./build'));
});
