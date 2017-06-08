var fs = require('fs')

var autoprefixer = require('gulp-autoprefixer')
var archiver     = require('archiver');
var bump         = require('gulp-bump')
var babelify     = require('babelify')
var browserify   = require('browserify')
var buffer       = require('vinyl-buffer')
var clean        = require('gulp-clean')
var concat       = require('gulp-concat')
var cssnano      = require('gulp-cssnano')
var fileinclude  = require('gulp-file-include')
var gulp         = require('gulp')
var less         = require('gulp-less')
var notify       = require('gulp-notify')
var plumber      = require('gulp-plumber' )
var rename       = require('gulp-rename')
var runSequence  = require('run-sequence');
var shell        = require('gulp-shell')
var source       = require('vinyl-source-stream')
var uglify       = require('gulp-uglify')
var zip          = require('gulp-zip')
var html2js      = require('html2js-browserify')

var app          = './app/'
var dist         = './dist/'
var dist_CX      = './chrome-extension/'


// Error / Success Handling
var onError = function(err) {
    notify.onError({
        title: "Error: " + err.plugin,
        subtitle: "<%= file.relative %>",
        message: "<%= error.message %>",
        sound: "Beep",
        icon: app + "images/icons/icon48.png",
    })(err);
    console.log(err.toString())
    this.emit('end');
}

function onSuccess(msg) {
    return {
        message: msg + " Complete! ",
        //sound:     "Pop",
        icon: app + "images/icons/icon48.png",
        onLast: true
    }
}

function notifyFunc(msg) {
    return gulp.src('.', { read: false })
        .pipe(notify(onSuccess(msg)))
}



// HTML / TPL Pages
var htmlFiles = app + 'layouts/*.html'
var tplFiles = app + 'includes/*.tpl'

gulp.task('html', function(done) {
    return gulp.src(htmlFiles)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(fileinclude({ prefix: '@@', basepath: '@file' }))
        .pipe(gulp.dest(dist))
        .pipe(gulp.dest(dist_CX))
        .pipe(notify(onSuccess('HTML')))
})



// styles: Compile and Minify Less / CSS Files
var less_watchFolder = app + 'styles/**/*.less'
var less_srcFile = app + 'styles/etherwallet-master.less'
var less_destFolder = dist + 'css'
var less_destFolder_CX = dist_CX + 'css'
var less_destFile = 'etherwallet-master.css'
var less_destFileMin = 'etherwallet-master.min.css'

gulp.task('styles', function() {
    return gulp.src(less_srcFile)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(less({ compress: false }))
        .pipe(autoprefixer({ browsers: ['last 4 versions', 'iOS > 7'], remove: false }))
        .pipe(rename(less_destFile))
        //.pipe( gulp.dest   (  less_destFolder                                         )) // unminified css
        //.pipe( gulp.dest   (  less_destFolder_CX                                      )) // unminified css
        .pipe(cssnano({ autoprefixer: false, safe: true }))
        .pipe(rename(less_destFileMin))
        .pipe(gulp.dest(less_destFolder))
        .pipe(gulp.dest(less_destFolder_CX))
        .pipe(notify(onSuccess('Styles')))
})


// js: Browserify
var js_watchFolder = app + 'scripts/**/*.{js,html}'
var js_srcFile = app + 'scripts/main.js'
var js_destFolder = dist + 'js/'
var js_destFolder_CX = dist_CX + 'js/'
var js_destFile = 'etherwallet-master.js'
var browseOpts = { debug: true } // generates inline source maps - only in js-debug
var babelOpts = {
    presets: ['es2015'],
    compact: false,
    global: true
}

function bundle_js(bundler) {
    return bundler.bundle()
        .pipe(plumber({ errorHandler: onError }))
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(rename(js_destFile))
        .pipe(gulp.dest(js_destFolder))
        .pipe(gulp.dest(js_destFolder_CX))
        .pipe(notify(onSuccess('JS')))
}

function bundle_js_debug(bundler) {
    return bundler.bundle()
        .pipe(plumber({ errorHandler: onError }))
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(rename(js_destFile))
        .pipe(gulp.dest(js_destFolder))
        .pipe(gulp.dest(js_destFolder_CX))
        .pipe(notify(onSuccess('JS')))
}


gulp.task('js', function() {
    var bundler = browserify(js_srcFile).transform(babelify).transform(html2js)
    bundle_js(bundler)
})

gulp.task('js-production', function() {
    var bundler = browserify(js_srcFile).transform(babelify, babelOpts).transform(html2js)
    bundle_js(bundler)
})

gulp.task('js-debug', function() {
    var bundler = browserify(js_srcFile, browseOpts).transform(babelify, babelOpts).transform(html2js)
    bundle_js_debug(bundler)
})



// Rebuild Static JS
var js_srcFilesStatic = app + 'scripts/staticJS/to-compile-to-static/*.js'
var js_destFolderStatic = app + 'scripts/staticJS/'
var js_destFileStatic = 'etherwallet-static.min.js'

gulp.task('staticJS', function() {
    return gulp.src(js_srcFilesStatic)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(concat(js_destFileStatic))
        .pipe(uglify())
        .pipe(gulp.dest(js_destFolderStatic))
        .pipe(notify(onSuccess('StaticJS')))
})



// Copy
var imgSrcFolder = app + 'images/**/*'
var fontSrcFolder = app + 'fonts/*.*'
var cxSrcFiles = app + 'includes/browser_action/*.*'
var jsonFile = app + '*.json'
var jQueryFile = app + 'scripts/staticJS/jquery-1.12.3.min.js'
var bin = app + '/bin/*'
var staticJSSrcFile = js_destFolderStatic + js_destFileStatic
var readMe = './README.md'


gulp.task('copy', ['staticJS'], function() {
    gulp.src(imgSrcFolder)
        .pipe(gulp.dest(dist + 'images'))
        .pipe(gulp.dest(dist_CX + 'images'))

    gulp.src(fontSrcFolder)
        .pipe(gulp.dest(dist + 'fonts'))
        .pipe(gulp.dest(dist_CX + 'fonts'))

    gulp.src(staticJSSrcFile)
        .pipe(gulp.dest(dist + 'js'))
        .pipe(gulp.dest(dist_CX + 'js'))

    gulp.src(jQueryFile)
        .pipe(gulp.dest(dist + 'js'))
        .pipe(gulp.dest(dist_CX + 'js'))

    gulp.src(jsonFile)
        .pipe(gulp.dest(dist))
        .pipe(gulp.dest(dist_CX))

    gulp.src(readMe)
        .pipe(gulp.dest(dist))

    gulp.src(bin)
        .pipe(gulp.dest(dist + 'bin'))

    return gulp.src(cxSrcFiles)
        .pipe(gulp.dest(dist_CX + 'browser_action'))

    .pipe(notify(onSuccess(' Copy ')))
})




// Clean files that get compiled but shouldn't
gulp.task('clean', function() {
    return gulp.src([
            dist_CX + 'images/fav/manifest.json',
            dist_CX + 'embedded.html',
            dist_CX + 'index.html',
            dist_CX + 'signmsg.html',
            dist + 'cx-wallet.html',
            dist + 'images/icons',
            dist + 'manifest.json',
            dist_CX + 'package.json'
        ], { read: false })
        .pipe(plumber({ errorHandler: onError }))
        .pipe(clean())
        .pipe(notify(onSuccess(' Clean ')))
})



// Bumps Version Number
function bumpFunc(t) {
  return gulp.src([app + '*.json'])
    .pipe( plumber   ({ errorHandler: onError   }))
    .pipe( bump      ({ type: t                 }))
    .pipe( gulp.dest  ( './app'                 ))
    .pipe( notify     ( onSuccess('Bump ' + t ) ))
}


// Get Version Number
var versionNum
var versionMsg
gulp.task('getVersion', function() {
    manifest = JSON.parse(fs.readFileSync(app + 'manifest.json'))
    versionNum = 'v' + manifest.version
    versionMsg = 'Release: ' + versionNum
        //return gulp.src( './' )
        //.pipe( notify ( onSuccess('Version Number ' + versionNum ) ))
})


// zips dist folder
gulp.task('zip', ['getVersion'], function() {
    gulp.src(dist + '**/**/*')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(zip('./dist-' + versionNum + '.zip'))
        .pipe(gulp.dest('./releases/'))
        .pipe(notify(onSuccess('Zip Dist ' + versionNum)))
    return gulp.src(dist_CX + '**/**/*')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(zip('./chrome-extension-' + versionNum + '.zip'))
        .pipe(gulp.dest('./releases/'))
        .pipe(notify(onSuccess('Zip CX ' + versionNum)))
})


function archive() {
  var outputZip = fs.createWriteStream(__dirname + '/example.zip');
  var archiveZip = archiver('zip', {
      gzip: true,
  });
  outputZip.on('close', function() {
    console.log(archiveZip.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
  });
  archiveZip.on('error', function(err) {
    throw err;
  });
  archiveZip.pipe(outputZip);
  archiveZip.directory(dist, 'test2');
  archiveZip.finalize();


  var outputTar = fs.createWriteStream(__dirname + '/example.tgz');
  var archiveTar = archiver('tar', {
      gzip: true,
  });
  outputTar.on('close', function() {
    return gulp.src(archiveTar).pipe(onSuccess('Archive Complete: Tar, /dist' ));
  });
  archiveTar.on('error', function(err) {
    throw err;
  });
  archiveTar.pipe(outputTar);
  archiveTar.directory(dist, 'test2');
  archiveTar.finalize();

}


gulp.task('travisZip', ['getVersion'], function() {
    gulp.src(dist + '**/**/*')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(zip('./dist-' + versionNum + '.zip'))
        .pipe(gulp.dest('./deploy/'))
        .pipe(notify(onSuccess('Zip Dist ' + versionNum)))
    return gulp.src(dist_CX + '**/**/*')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(zip('./chrome-extension-' + versionNum + '.zip'))
        .pipe(gulp.dest('./deploy/'))
        .pipe(notify(onSuccess('Zip CX ' + versionNum)))
})


// add all
gulp.task('add', function() {
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'git add -A'
        ]))
        //.pipe( notify ( onSuccess('Git Add' ) ))
})

// commit with current v# in manifest
gulp.task('commit', ['getVersion'], function() {
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'git commit -m "Rebuilt and cleaned everything. Done for now."'
        ]))
        .pipe(notify(onSuccess('Commit')))
})

// commit with current v# in manifest
gulp.task('commitV', ['getVersion'], function() {
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'git commit -m " ' + versionMsg + ' "'
        ]))
        .pipe(notify(onSuccess('Commit w ' + versionMsg)))
})

// tag with current v# in manifest
gulp.task('tag', ['getVersion'], function() {
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'git tag -a ' + versionNum + ' -m " ' + versionMsg + '"'
        ]))
        .pipe(notify(onSuccess('Tagged Commit' + versionMsg)))
})

// Push Release to Mercury
gulp.task('push', ['getVersion'], function() {
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'git push origin mercury ' + versionNum
        ]))
        .pipe(notify(onSuccess('Push')))
})

// Push Live
// Pushes dist folder to gh-pages branch
gulp.task('pushlive', ['getVersion'], function() {
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'git subtree push --prefix dist origin gh-pages'
        ]))
        .pipe(notify(onSuccess('Push Live')))
})

// Prep & Release
// gulp prep
// gulp bump   or gulp zipit
// gulp commit
// git push --tags
// gulp pushlive ( git subtree push --prefix dist origin gh-pages )

gulp.task('watchJS',      function() { gulp.watch(js_watchFolder,   ['js']            ) })
gulp.task('watchJSDebug', function() { gulp.watch(js_watchFolder,   ['js-debug']      ) })
gulp.task('watchJSProd',  function() { gulp.watch(js_watchFolder,   ['js-production'] ) })
gulp.task('watchLess',    function() { gulp.watch(less_watchFolder, ['styles']        ) })
gulp.task('watchPAGES',   function() { gulp.watch(htmlFiles,        ['html']          ) })
gulp.task('watchTPL',     function() { gulp.watch(tplFiles,         ['html']          ) })
gulp.task('watchCX',      function() { gulp.watch(cxSrcFiles,       ['copy']          ) })

gulp.task('bump',          function() { return bumpFunc( 'patch' ) })
gulp.task('bump-patch',    function() { return bumpFunc( 'patch' ) })
gulp.task('bump-minor',    function() { return bumpFunc( 'minor' ) })

gulp.task('archive',       function() { return archive() })

gulp.task('prep',   function(cb) { runSequence('js-production', 'html', 'styles', 'copy', cb); });

gulp.task('bump',   function(cb) { runSequence('bump-patch', 'clean', 'zip', cb);              });

gulp.task('zipit',  function(cb) { runSequence('clean', 'zip', cb);                            });

gulp.task('commit', function(cb) { runSequence('add', 'commitV', 'tag', cb);                   });

gulp.task('watch',     ['watchJS',     'watchLess', 'watchPAGES', 'watchTPL', 'watchCX'])
gulp.task('watchProd', ['watchJSProd', 'watchLess', 'watchPAGES', 'watchTPL', 'watchCX'])

gulp.task('build', ['js', 'html', 'styles', 'copy'])
gulp.task('build-debug', ['js-debug', 'html', 'styles', 'watchJSDebug', 'watchLess', 'watchPAGES', 'watchTPL', 'watchCX'])

gulp.task('default', ['build', 'watch'])



