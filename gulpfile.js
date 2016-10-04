// confirmed working on node v4.2.6 & npm v3.7.2
// if you are still having issues, you may need to install browserify gloablly.

var fs = require('fs');

var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var fileinclude = require('gulp-file-include');
var babel = require('gulp-babel');




// Compile and Minify Less / CSS Files
var lessWatchFolder = './app/styles/less/**/*.less';
var lessFile = './app/styles/less/etherwallet-master.less';
var lessOutputFolder = './dist/css';
var cxLessOutputFolder = './chrome-extension/css';
var lessOutputFile = 'etherwallet-master.css';
var lessOutputFileMin = 'etherwallet-master.min.css';

gulp.task('less', function (cb) {
  return gulp
    .src(lessFile)
      .pipe(less({ compress: false })).on('error', notify.onError(function (error) {
        return "ERROR! Problem file : " + error.message;
      }))
      .pipe( autoprefixer({
        browsers: ['last 3 version', 'ios 6', 'android 4'], remove: false
      } ) )
      .pipe(rename(lessOutputFile))
      //.pipe(gulp.dest(lessOutputFolder)) // unminified css
      //.pipe(gulp.dest(cxLessOutputFolder)) // unminified css
      .pipe(cssnano({ autoprefixer: false })).on('error', notify.onError(function (error) {
        return "ERROR! minify CSS Problem file : " + error.message;
      }))
      .pipe(rename(lessOutputFileMin))
      //mew css
      .pipe(gulp.dest(lessOutputFolder))
      .pipe(notify('MEW Styles Complete'))
      //cx css
      .pipe(gulp.dest(cxLessOutputFolder))
      .pipe(notify('CX Styles Complete'));
});





// Compile and Minify JS Files
var jsFiles = "./app/scripts/*.js";
var AllJsFiles = "./app/scripts/**/*.js";
var mainjs = "./app/scripts/main.js";
var staticjsFiles = "./app/scripts/staticJS/*.js";
var staticjsOutputFile = 'etherwallet-static.min.js';

gulp.task('staticJS', function () {
  return gulp
    .src(staticjsFiles)
      .pipe(concat(staticjsOutputFile))
      .pipe(uglify())
      // mew static
      .pipe(gulp.dest('./dist/js/'))
      .pipe(notify('MEW StaticJS Complete'))
      // mew staticxc
      .pipe(gulp.dest('./chrome-extension/js/'))
      .pipe(notify('CX StaticJS Complete'));
});

gulp.task('minJS',['browserify'],function () {
  return gulp
    .src('./dist/js/etherwallet-master.js')
      .pipe(babel({ presets: ['es2016'], compact: false }))
      .pipe(gulp.dest('./dist/js/'))
      .pipe(notify('MEW MinJS'));
});

gulp.task('cxMinJS',['cxBrowserify'],function () {
  return gulp
    .src('./chrome-extension/js/etherwallet-master.js')
      .pipe(babel({ presets: ['es2016'], compact: false}))
      .pipe(gulp.dest('./chrome-extension/js/'))
      .pipe(notify('CX MinJS'));
});




// Browserify
gulp.task('browserify', shell.task([
  'browserify '+mainjs+' -o dist/js/etherwallet-master.js'
]));

gulp.task('cxBrowserify', shell.task([
  'browserify '+mainjs+' -o chrome-extension/js/etherwallet-master.js'
]));






// Copy Images
var imagesFolder = "./app/images/**/*";
var imagesOutputFolder = "./dist/images";
var cxImagesOutputFolder = "./chrome-extension/images";

gulp.task('copy-images', function() {
   gulp.src(imagesFolder)
   .pipe(gulp.dest(imagesOutputFolder))
   .pipe(notify({message:'MEW Images', onLast:true}))
   .pipe(gulp.dest(cxImagesOutputFolder))
   .pipe(notify({message:'CX Images', onLast:true}));
});





// Copy Fonts
var fontsFolder = "./app/fonts/*.*";
var fontsOutputFolder = "./dist/fonts";
var cxFontsOutputFolder = "./chrome-extension/fonts";

gulp.task('copy-fonts', function() {
   gulp.src(fontsFolder)
   .pipe(gulp.dest(fontsOutputFolder))
   .pipe(notify({message:'MEW Fonts', onLast:true}))
   .pipe(gulp.dest(cxFontsOutputFolder))
   .pipe(notify({message:'CX Fonts', onLast:true}));
});





// Copy CX Browser Action Files
var cxSource = "./app/includes/browser_action/*.*";
var cxDest = "./chrome-extension/browser_action";

gulp.task('copy-cx', function() {
   gulp.src( cxSource )
   .pipe(gulp.dest( cxDest ))
   .pipe(notify({message:'CX Browser Action Files', onLast:true}))
});




//html Pages
var htmlPages = "./app/layouts/*.html";
var tplFiles = "./app/includes/*.tpl";

gulp.task('buildHTML', function () {
    gulp.src(htmlPages)
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
    .pipe(gulp.dest('./dist/'))
    .pipe(notify({message:'MEW HTML Pages Complete', onLast:true}))
    .pipe(gulp.dest('./chrome-extension/'))
    .pipe(notify({message:'CX HTML Pages Complete', onLast:true}));
});


// Clean files that get compiled but shouldn't
gulp.task('clean1', function () {
    gulp.src('./chrome-extension/images/fav', {read: false})
    .pipe(clean())
});
gulp.task('clean2', function () {
    gulp.src('./chrome-extension/embedded.html', {read: false})
    .pipe(clean())
});
gulp.task('clean3', function () {
    gulp.src('./chrome-extension/index.html', {read: false})
    .pipe(clean())
});
gulp.task('clean4', function () {
    gulp.src('./dist/cx-wallet.html', {read: false})
    .pipe(clean())
});


// Watch Tasks
gulp.task('watchJS', function() {
  gulp.watch([jsFiles, AllJsFiles],[
    'browserify',
    'cxBrowserify',
    'minJS',
    'cxMinJS'
  ]);
});
gulp.task('watchLess', function() {
    gulp.watch(lessWatchFolder, ['less']);
});
gulp.task('watchPAGES', function() {
    gulp.watch(htmlPages, ['buildHTML']);
});
gulp.task('watchTPL', function() {
    gulp.watch(tplFiles, ['buildHTML']);
});
gulp.task('watchCX', function() {
    gulp.watch(cxSource, ['copy-cx']);
});






gulp.task('build', ['buildHTML','less', 'staticJS', 'browserify', 'cxBrowserify', 'minJS', 'cxMinJS', 'copy-images','copy-fonts', 'copy-cx']);
gulp.task('watch', ['watchJS' , 'watchLess', 'watchPAGES', 'watchTPL', 'watchCX']);

gulp.task('clean', ['clean1', 'clean2', 'clean3', 'clean4']);

gulp.task('default', ['build', 'watch']);
