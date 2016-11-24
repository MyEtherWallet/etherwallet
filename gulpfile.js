var fs           = require('fs')

var autoprefixer = require('gulp-autoprefixer')
var bump         = require('gulp-bump')
var babelify     = require('babelify')
var browserify   = require('browserify')
var buffer       = require('vinyl-buffer')
var clean        = require('gulp-clean')
var concat       = require('gulp-concat')
var cssnano      = require('gulp-cssnano')
var fileinclude  = require('gulp-file-include')
var git          = require('gulp-git')
var gulp         = require('gulp')
var less         = require('gulp-less')
var notify       = require('gulp-notify')
var plumber      = require('gulp-plumber' )
var rename       = require('gulp-rename')
var shell        = require('gulp-shell')
var source       = require('vinyl-source-stream')
var uglify       = require('gulp-uglify')
var zip          = require('gulp-zip')

var app          = './app/'
var dist         = './dist/'
var dist_CX      = './chrome-extension/'


function onError( error ){
  notify.onError( {
    title:    'Gulp',
    subtitle: 'Error',
    message:  '<%= error.message %>',
    sound:    'Beep'
  } )( error )
  this.emit('end')
}



//html Pages
var htmlFiles = app + 'layouts/*.html'
var tplFiles  = app + 'includes/*.tpl'

gulp.task('html', function () {
 gulp.src(htmlFiles)
     .pipe( plumber     ({ errorHandler: onError                }))
     .pipe( fileinclude ({ prefix: '@@', basepath: '@file'      }))
     .pipe( gulp.dest   (  dist                                  ))
     .pipe( gulp.dest   (  dist_CX                               ))
     .pipe( notify      ({ message:'HTML Complete', onLast:true }))
})



// styles: Compile and Minify Less / CSS Files
var less_watchFolder   = app     + 'styles/**/*.less'
var less_srcFile       = app     + 'styles/etherwallet-master.less'
var less_destFolder    = dist    + 'css'
var less_destFolder_CX = dist_CX + 'css'
var less_destFile      =           'etherwallet-master.css'
var less_destFileMin   =           'etherwallet-master.min.css'

gulp.task( 'styles', function () {
 gulp.src( less_srcFile )
     .pipe( plumber     ({ errorHandler: onError                                   }))
     .pipe( less        ({ compress: false                                         }))
     .pipe( autoprefixer({ browsers: ['last 2 versions', 'iOS > 8'], remove: false }))
     .pipe( rename      (  less_destFile                                           ))
   //.pipe( gulp.dest   (  less_destFolder                                         )) // unminified css
   //.pipe( gulp.dest   (  less_destFolder_CX                                      )) // unminified css
     .pipe( cssnano     ({ autoprefixer: false, safe: true                         }))
     .pipe( rename      (  less_destFileMin                                        ))
     .pipe( gulp.dest   (  less_destFolder                                         ))
     .pipe( gulp.dest   (  less_destFolder_CX                                      ))
     .pipe( notify      ({ message:'Styles Complete', onLast:true                  }))
})



// js: Browserify
var js_watchFolder   = app     + 'scripts/**/*.js'
var js_srcFile       = app     + 'scripts/main.js'
var js_destFolder    = dist    + 'js/'
var js_destFolder_CX = dist_CX + 'js/'
var js_destFile      =           'etherwallet-master.js'
var browseOpts       = { debug: true } // generates inline source maps - not in use bc it makes file huuuuge
var babelOpts        = { presets: ['es2015'], compact: false }

function bundle_js(bundler) {
  return bundler.bundle()
    .pipe( plumber   ({ errorHandler: onError }))
    .pipe( source    ( 'main.js'               ))
    .pipe( buffer    (                         ))
    .pipe( rename    ( js_destFile             ))
    .pipe( gulp.dest ( js_destFolder           ))
    .pipe( gulp.dest ( js_destFolder_CX        ))
    .pipe( notify    ({ message:'JS Complete', onLast:true }))
}

gulp.task('js', function () {
  var bundler = browserify( js_srcFile ).transform( babelify, babelOpts )
  bundle_js( bundler )
})





// Rebuild Static JS
var js_srcFilesStatic   = app + 'scripts/staticJS/to-compile-to-static/*.js'
var js_destFolderStatic = app + 'scripts/staticJS/'
var js_destFileStatic   =       'etherwallet-static.min.js'

gulp.task( 'staticJS', function () {
  gulp.src ( js_srcFilesStatic )
     .pipe( plumber   ({ errorHandler: onError }))
     .pipe( concat    (  js_destFileStatic      ))
     .pipe( uglify    (                         ))
     .pipe( gulp.dest (  js_destFolderStatic    ))
     .pipe( notify    ({ message:'Static JS Complete', onLast:true }))
})



// Copy
var imgSrcFolder          = app                 + 'images/**/*'
var fontSrcFolder         = app                 + 'fonts/*.*'
var cxSrcFiles            = app                 + 'includes/browser_action/*.*'
var cxDestFolder          = dist_CX             + 'browser_action'
var staticJSSrcFile       = js_destFolderStatic + js_destFileStatic
var jQueryFile            = './app/scripts/staticJS/jquery-1.12.3.min.js'
var readMe                = './README.md'

gulp.task('copy', function() {
 gulp.src ( imgSrcFolder )
     .pipe( gulp.dest( dist    + 'images' ))
     .pipe( gulp.dest( dist_CX + 'images' ))

 gulp.src ( fontSrcFolder )
     .pipe( gulp.dest( dist    + 'fonts'  ))
     .pipe( gulp.dest( dist_CX + 'fonts'  ))

 gulp.src ( staticJSSrcFile )
     .pipe( gulp.dest( dist    + 'js'     ))
     .pipe( gulp.dest( dist_CX + 'js'     ))

 gulp.src ( jQueryFile )
     .pipe( gulp.dest( dist    + 'js'     ))
     .pipe( gulp.dest( dist_CX + 'js'     ))

 gulp.src ( readMe )
     .pipe( gulp.dest( dist ))

 return gulp.src ( cxSrcFiles )
     .pipe( gulp.dest( cxDestFolder       ))

 .pipe( notify({ message:'Copy Complete', onLast:true }))
})




// Clean files that get compiled but shouldn't
gulp.task('clean', function () {
  return gulp.src([
      dist_CX + 'images/fav',
      dist_CX + 'embedded.html',
      dist_CX + 'index.html',
      dist    + 'cx-wallet.html',
      dist    + 'images/icons',
      './releases/dist-OOPS_TRY_AGAIN.zip',
      './releases/chrome-extension-OOPS_TRY_AGAIN.zip'
    ], {read: false})
    .pipe( plumber ({ errorHandler: onError }))
    .pipe( clean   (                         ))
    .pipe( notify  ({ message:'Clean Complete', onLast:true }))
})



// Bumps Version Number
function bumpFunc(t) {
  return gulp.src([dist_CX + 'manifest.json'])
    .pipe( plumber   ({ errorHandler: onError      }))
    .pipe( bump      ({ type: t                    }))
    .pipe( gulp.dest (  './chrome-extension'       ))
}


// Get Version Number
var versionNum
var versionMsg
gulp.task('getVersion', function() {
  manifest = JSON.parse(fs.readFileSync(dist_CX + 'manifest.json'))
  versionNum = 'v' + manifest.version
  versionMsg    = 'Release: ' + versionNum
  return gulp.src( './' )
  .pipe( notify    ({ message:'Got Version Number: ' + versionNum }))
})


// zips dist folder
gulp.task('zip', ['getVersion','clean'], function() {
 return gulp.src( dist + '*' )
    .pipe( plumber   ({ errorHandler: onError                      }))
    .pipe( zip       (  './dist-' + versionNum + '.zip'             ))
    .pipe( gulp.dest (  './releases/'                               ))
    .pipe( notify    ({ message:'Zip Dist Complete: ' + versionNum }))

})
// zips cx folder
gulp.task('zipCX', ['getVersion','clean'], function() {
  return gulp.src( dist_CX + '*' )
    .pipe( plumber   ({ errorHandler: onError                       }))
    .pipe( zip       (  './chrome-extension-' + versionNum + '.zip'  ))
    .pipe( gulp.dest (  './releases/'                                ))
    .pipe( notify    ({ message:'Zip CX Complete: ' + versionNum    }))

})

// add all
gulp.task('add', ['getVersion'], function() {
  return gulp.src( './' )
    .pipe( git.add() )
    .pipe( notify ({ message:'Added: ' + versionNum }))
})
// commit with current v# in manifest
gulp.task('commit', ['add'], function() {
  return gulp.src( './' )
    .pipe( git.commit(versionMsg) )
    .pipe( notify ({ message:'Committed: ' + versionNum }))
})
// tag with current v# in manifest
gulp.task('tag', ['commit'], function() {
  git.tag(versionNum, versionMsg, function (err) {
    if (err) throw err;
  });
  return gulp.src( './' ).pipe( notify ({ message:'Tagged: ' + versionNum }))
})
// Push Release to Mercury
gulp.task('push', ['tag'], function() {
  git.push('origin', 'mercury', {args: " --tags"}, function (err) {
    if (err) throw err;
  });
  return gulp.src( './' ).pipe( notify ({ message:'Pushed: ' + versionNum }))
})

// Push Live
gulp.task('pushLive', ['push'], shell.task([
  'git subtree push --prefix dist origin gh-pages'
]))

// Watch Tasks
gulp.task('watchJS',    function() { gulp.watch( js_watchFolder,   ['js'    ]) })
gulp.task('watchLess',  function() { gulp.watch( less_watchFolder, ['styles']) })
gulp.task('watchPAGES', function() { gulp.watch( htmlFiles,        ['html'  ]) })
gulp.task('watchTPL',   function() { gulp.watch( tplFiles,         ['html'  ]) })
gulp.task('watchCX',    function() { gulp.watch( cxSrcFiles,       ['copy'  ]) })

gulp.task('watch',      ['watchJS' , 'watchLess', 'watchPAGES', 'watchTPL', 'watchCX'])

// Build
gulp.task('build',      ['html', 'styles', 'js', 'copy'])

// Bump Version
gulp.task('bump-patch', function() { return bumpFunc( 'patch' ) })
gulp.task('bump-minor', function() { return bumpFunc( 'minor' ) })

// Prep for Release
gulp.task('prep',       ['clean', 'getVersion', 'zip', 'zipCX'])


gulp.task('default',      ['build', 'watch'])
