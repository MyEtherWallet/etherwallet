var fs = require('fs');
// less
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var uncss = require('gulp-uncss');
var template = require('gulp-template');
var gutil = require('gulp-util');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

// watch folders
var lessWatchFolder = './app/styles/less/**/*.less';
var htmlWatchFolder = './dist/*.html';

// less vars
var lessFile = './app/styles/less/etherwallet-master.less';
var lessOutputFolder = './dist/css';
var lessOutputFile = 'etherwallet-master.css';
var lessOutputFileMin = 'etherwallet-master.min.css';

//html Pages
var htmlPages = "./app/pages/*.html";
var tplFiles = "./app/views/*.tpl";

//js files
var jsFiles = "./app/scripts/*.js";
var AllJsFiles = "./app/scripts/**/*.js";
var mainjs = "./app/scripts/main.js";
var staticjsFiles = "./app/scripts/staticJS/*.js";
var staticjsOutputFile = 'etherwallet-static.min.js';

//images
var imagesFolder = "./app/images/**/*";
var imagesOutputFolder = "./dist/images";

//fonts
var fontsFolder = "./app/fonts/*.*";
var fontsOutputFolder = "./dist/fonts";

gulp.task('less', function (cb) {
  return gulp
    .src(lessFile)
      .pipe(less({ compress: false })).on('error', notify.onError(function (error) {
        return "ERROR! Problem file : " + error.message;
      }))
      .pipe(autoprefixer('last 2 version', 'ie 9', 'ios 6', 'android 4'))
      .pipe(rename(lessOutputFile))
      .pipe(gulp.dest(lessOutputFolder))
      //.pipe(uncss({
  //      html: [
    //      './dist/index.html'
    //    ]
    //  }))
      .pipe(cssnano()).on('error', notify.onError(function (error) {
        return "ERROR! minify CSS Problem file : " + error.message;
      }))
      .pipe(rename(lessOutputFileMin))
      .pipe(gulp.dest(lessOutputFolder))
      .pipe(notify('Less Compiled UNCSSd and Minified'));
});

gulp.task('browserify', function() {
  gulp.src([mainjs])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('etherwallet-master.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('staticJS', function () {
  return gulp
    .src(staticjsFiles)
      .pipe(concat(staticjsOutputFile))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js/'))
     .pipe(notify('staic JS Concat and Uglified'));
});

gulp.task('minJS',['browserify'],function () {
  return gulp
    .src('./dist/js/etherwallet-master.js')
      .pipe(concat('etherwallet-master-min.js'))
     // .pipe(uglify())
      .pipe(gulp.dest('./dist/js/'))
     .pipe(notify('JS Concat and Uglified'));
});

gulp.task('copy-images', function() {
   gulp.src(imagesFolder)
   .pipe(imagemin())
   .pipe(gulp.dest(imagesOutputFolder))
   .pipe(notify({message:'All images copied', onLast:true}));
});

gulp.task('copy-fonts', function() {
   gulp.src(fontsFolder)
   .pipe(gulp.dest(fontsOutputFolder))
   .pipe(notify({message:'All fonts copied', onLast:true}));
});

gulp.task('watchJS', function() {
  gulp.watch([jsFiles, AllJsFiles],[
    'browserify',
	'minJS'
  ]);
});
gulp.task('genHTMLPages', function () {
    var header=fs.readFileSync("./app/views/header.tpl", "utf8");
    var walletgenerator=fs.readFileSync("./app/views/walletgenerator.tpl", "utf8");
    var bulkgenerator=fs.readFileSync("./app/views/bulkgenerator.tpl", "utf8");
    var viewwalletdetails=fs.readFileSync("./app/views/viewwalletdetails.tpl", "utf8");
    var sendtransaction=fs.readFileSync("./app/views/sendtransaction.tpl", "utf8");
    var offlinetransaction=fs.readFileSync("./app/views/offlinetransaction.tpl", "utf8");
    var print=fs.readFileSync("./app/views/print.tpl", "utf8");
    var help=fs.readFileSync("./app/views/help.tpl", "utf8");
    var contact=fs.readFileSync("./app/views/contact.tpl", "utf8");
    var footer=fs.readFileSync("./app/views/footer.tpl", "utf8");
    return gulp.src(htmlPages)
        .pipe(template({
            header: header,
            walletgenerator: walletgenerator,
            bulkgenerator: bulkgenerator,
            viewwalletdetails: viewwalletdetails,
            sendtransaction: sendtransaction,
            offlinetransaction: offlinetransaction,
            print: print,
            help: help,
            contact: contact,
            footer: footer
          }))
        .pipe(gulp.dest('./dist/'))
        .pipe(notify('HTML Pages generated'));
});

gulp.task('watchLess', function() {
    gulp.watch(lessWatchFolder, ['less']);
});
gulp.task('watchHTML', function() {
    gulp.watch(htmlWatchFolder, ['less']);
});
gulp.task('watchPAGES', function() {
    gulp.watch(htmlPages, ['genHTMLPages']);
});
gulp.task('watchTPL', function() {
    gulp.watch(tplFiles, ['genHTMLPages']);
});

gulp.task('default', ['copy-images','copy-fonts','genHTMLPages','staticJS', 'less', 'browserify','minJS', 'watchJS' , 'watchLess', 'watchHTML', 'watchPAGES', 'watchTPL']);
