const fs = require("fs");

const autoprefixer = require("gulp-autoprefixer");
const archiver = require("archiver");
const bump = require("gulp-bump");
const babelify = require("babelify");
const browserify = require("browserify");
const buffer = require("vinyl-buffer");
const clean = require("gulp-clean");
const concat = require("gulp-concat");
const cssnano = require("gulp-cssnano");
const fileinclude = require("gulp-file-include");
const gulp = require("gulp");
const less = require("gulp-less");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const runSequence = require("run-sequence");
const shell = require("gulp-shell");
const source = require("vinyl-source-stream");
const uglify = require("gulp-uglify");
const zip = require("gulp-zip");
const html2js = require("html2js-browserify");

const app = "./app/";
const dist = "./dist/";
const dist_CX = "./chrome-extension/";

// Error / Success Handling
let onError = function(err) {
  notify.onError({
    title: "Error: " + err.plugin,
    subtitle: "<%= file.relative %>",
    message: "<%= error.message %>",
    sound: "Beep",
    icon: app + "images/icons/icon48.png"
  })(err);
  console.log(err.toString());
  this.emit("end");
};

function onSuccess(msg) {
  return {
    message: msg + " Complete! ",
    //sound:     "Pop",
    icon: app + "images/icons/icon48.png",
    onLast: true
  };
}

// HTML / TPL Pages
let htmlFiles = app + "layouts/*.html";
let tplFiles = app + "includes/*.tpl";

gulp.task("html", function(done) {
  return gulp
    .src(htmlFiles)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(fileinclude({ prefix: "@@", basepath: "@file" }))
    .pipe(gulp.dest(dist))
    .pipe(gulp.dest(dist_CX))
    .pipe(notify(onSuccess("HTML")));
});

// styles: Compile and Minify Less / CSS Files
let less_watchFolder = app + "styles/**/*.less";
let less_srcFile = app + "styles/etherwallet-master.less";
let less_destFolder = dist + "css";
let less_destFolder_CX = dist_CX + "css";
let less_destFile = "etherwallet-master.css";
let less_destFileMin = "etherwallet-master.min.css";

gulp.task("styles", function() {
  return (
    gulp
      .src(less_srcFile)
      .pipe(plumber({ errorHandler: onError }))
      .pipe(less({ compress: false }))
      .pipe(
        autoprefixer({
          browsers: ["last 4 versions", "iOS > 7"],
          remove: false
        })
      )
      .pipe(rename(less_destFile))
      //.pipe( gulp.dest   (  less_destFolder                                         )) // unminified css
      //.pipe( gulp.dest   (  less_destFolder_CX                                      )) // unminified css
      .pipe(cssnano({ autoprefixer: false, safe: true }))
      .pipe(rename(less_destFileMin))
      .pipe(gulp.dest(less_destFolder))
      .pipe(gulp.dest(less_destFolder_CX))
      .pipe(notify(onSuccess("Styles")))
  );
});

// js: Browserify
let js_watchFolder = app + "scripts/**/*.{js,json,html}";
let js_srcFile = app + "scripts/main.js";
let js_destFolder = dist + "js/";
let js_destFolder_CX = dist_CX + "js/";
let js_destFile = "etherwallet-master.js";
let browseOpts = { debug: true }; // generates inline source maps - only in js-debug
let babelOpts = {
  presets: ["env"],
  compact: false
};

function bundle_js(bundler) {
  return bundler
    .bundle()
    .pipe(plumber({ errorHandler: onError }))
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(rename(js_destFile))
    .pipe(gulp.dest(js_destFolder))
    .pipe(gulp.dest(js_destFolder_CX))
    .pipe(notify(onSuccess("JS")));
}

function bundle_js_debug(bundler) {
  return bundler
    .bundle()
    .pipe(plumber({ errorHandler: onError }))
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(rename(js_destFile))
    .pipe(gulp.dest(js_destFolder))
    .pipe(gulp.dest(js_destFolder_CX))
    .pipe(notify(onSuccess("JS")));
}

gulp.task("js", function() {
  let bundler = browserify(js_srcFile)
    .transform(babelify)
    .transform(html2js);
  bundle_js(bundler);
});

gulp.task("js-production", function() {
  let bundler = browserify(js_srcFile)
    .transform(babelify, babelOpts)
    .transform(html2js);
  bundle_js(bundler);
});

gulp.task("js-debug", function() {
  let bundler = browserify(js_srcFile, browseOpts)
    .transform(babelify, babelOpts)
    .transform(html2js);
  bundle_js_debug(bundler);
});

// Rebuild Static JS
let js_srcFilesStatic = app + "scripts/staticJS/to-compile-to-static/*.js";
let js_destFolderStatic = app + "scripts/staticJS/";
let js_destFileStatic = "etherwallet-static.min.js";

gulp.task("staticJS", function() {
  return gulp
    .src(js_srcFilesStatic)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(concat(js_destFileStatic))
    .pipe(uglify())
    .pipe(gulp.dest(js_destFolderStatic))
    .pipe(notify(onSuccess("StaticJS")));
});

// Copy
let imgSrcFolder = app + "images/**/*";
let fontSrcFolder = app + "fonts/*.*";
let cxSrcFiles = app + "includes/browser_action/*.*";
let cxBackgroundFile = app + "includes/background/*.*";
let jsonFile = app + "*.json";
let jQueryFile = app + "scripts/staticJS/jquery-1.12.3.min.js";
let bin = app + "/bin/*";
let staticJSSrcFile = js_destFolderStatic + js_destFileStatic;
let readMe = "./README.md";

gulp.task("copy", ["staticJS"], function() {
  gulp
    .src(imgSrcFolder)
    .pipe(gulp.dest(dist + "images"))
    .pipe(gulp.dest(dist_CX + "images"));

  gulp
    .src(fontSrcFolder)
    .pipe(gulp.dest(dist + "fonts"))
    .pipe(gulp.dest(dist_CX + "fonts"));

  gulp
    .src(staticJSSrcFile)
    .pipe(gulp.dest(dist + "js"))
    .pipe(gulp.dest(dist_CX + "js"));

  gulp
    .src(jQueryFile)
    .pipe(gulp.dest(dist + "js"))
    .pipe(gulp.dest(dist_CX + "js"));

  gulp
    .src(jsonFile)
    .pipe(gulp.dest(dist))
    .pipe(gulp.dest(dist_CX));

  gulp.src(readMe).pipe(gulp.dest(dist));

  gulp.src(cxBackgroundFile).pipe(gulp.dest(dist_CX + "background"));

  gulp.src(bin).pipe(gulp.dest(dist + "bin"));

  return gulp
    .src(cxSrcFiles)
    .pipe(gulp.dest(dist_CX + "browser_action"))

    .pipe(notify(onSuccess(" Copy ")));
});

// Clean files that get compiled but shouldn't
gulp.task("clean", function() {
  return gulp
    .src(
      [
        dist_CX + "images/fav/manifest.json",
        dist_CX + "embedded.html",
        dist_CX + "index.html",
        dist_CX + "signmsg.html",
        dist + "cx-wallet.html",
        dist + "images/icons",
        dist + "manifest.json",
        dist_CX + "package.json"
      ],
      { read: false }
    )
    .pipe(plumber({ errorHandler: onError }))
    .pipe(clean())
    .pipe(notify(onSuccess(" Clean ")));
});

// Bumps Version Number
function bumpFunc(t) {
  return gulp
    .src([app + "*.json"])
    .pipe(plumber({ errorHandler: onError }))
    .pipe(bump({ type: t }))
    .pipe(gulp.dest("./app"))
    .pipe(notify(onSuccess("Bump " + t)));
}

// Get Version Number
let versionNum;
let versionMsg;
gulp.task("getVersion", function() {
  manifest = JSON.parse(fs.readFileSync(app + "manifest.json"));
  versionNum = "v" + manifest.version;
  versionMsg = "Release: " + versionNum;
  //return gulp.src( './' )
  //.pipe( notify ( onSuccess('Version Number ' + versionNum ) ))
});

// zips dist folder
gulp.task("zip", ["getVersion"], function() {
  gulp
    .src(dist + "**/**/*")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(
      rename(function(path) {
        path.dirname = "./etherwallet-" + versionNum + "/" + path.dirname;
      })
    )
    .pipe(zip("./etherwallet-" + versionNum + ".zip"))
    .pipe(gulp.dest("./releases/"))
    .pipe(notify(onSuccess("Zip Dist " + versionNum)));
  return gulp
    .src(dist_CX + "**/**/*")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(zip("./chrome-extension-" + versionNum + ".zip"))
    .pipe(gulp.dest("./releases/"))
    .pipe(notify(onSuccess("Zip CX " + versionNum)));
});

function archive() {
  let outputZip = fs.createWriteStream(__dirname + "/example.zip");
  let archiveZip = archiver("zip", {
    gzip: true
  });
  outputZip.on("close", function() {
    console.log(archiveZip.pointer() + " total bytes");
    console.log(
      "archiver has been finalized and the output file descriptor has closed."
    );
  });
  archiveZip.on("error", function(err) {
    throw err;
  });
  archiveZip.pipe(outputZip);
  archiveZip.directory(dist, "test2");
  archiveZip.finalize();

  let outputTar = fs.createWriteStream(__dirname + "/example.tgz");
  let archiveTar = archiver("tar", {
    gzip: true
  });
  outputTar.on("close", function() {
    return gulp.src(archiveTar).pipe(onSuccess("Archive Complete: Tar, /dist"));
  });
  archiveTar.on("error", function(err) {
    throw err;
  });
  archiveTar.pipe(outputTar);
  archiveTar.directory(dist, "test2");
  archiveTar.finalize();
}

gulp.task("travisZip", ["getVersion"], function() {
  gulp
    .src(dist + "**/**/*")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(
      rename(function(path) {
        path.dirname = "./etherwallet-" + versionNum + "/" + path.dirname;
      })
    )
    .pipe(zip("./etherwallet-" + versionNum + ".zip"))
    .pipe(gulp.dest("./deploy/"))
    .pipe(notify(onSuccess("Zip Dist " + versionNum)));
  return gulp
    .src(dist_CX + "**/**/*")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(zip("./chrome-extension-" + versionNum + ".zip"))
    .pipe(gulp.dest("./deploy/"))
    .pipe(notify(onSuccess("Zip CX " + versionNum)));
});

// add all
gulp.task("add", function() {
  return gulp.src("*.js", { read: false }).pipe(shell(["git add -A"]));
  //.pipe( notify ( onSuccess('Git Add' ) ))
});

// commit with current v# in manifest
gulp.task("commit", ["getVersion"], function() {
  return gulp
    .src("*.js", { read: false })
    .pipe(
      shell(['git commit -m "Rebuilt and cleaned everything. Done for now."'])
    )
    .pipe(notify(onSuccess("Commit")));
});

// commit with current v# in manifest
gulp.task("commitV", ["getVersion"], function() {
  return gulp
    .src("*.js", { read: false })
    .pipe(shell(['git commit --allow-empty -m " ' + versionMsg + ' "']))
    .pipe(notify(onSuccess("Commit w " + versionMsg)));
});

// tag with current v# in manifest
gulp.task("tag", ["getVersion"], function() {
  return gulp
    .src("*.js", { read: false })
    .pipe(shell(["git tag -a " + versionNum + ' -m " ' + versionMsg + '"']))
    .pipe(notify(onSuccess("Tagged Commit" + versionMsg)));
});

// Push Release to Mercury
gulp.task("push", ["getVersion"], function() {
  return gulp
    .src("*.js", { read: false })
    .pipe(shell(["git push origin mercury " + versionNum]))
    .pipe(notify(onSuccess("Push")));
});

// Push Live
// Pushes dist folder to gh-pages branch
gulp.task("pushlive", ["getVersion"], function() {
  return gulp
    .src("*.js", { read: false })
    .pipe(
      shell([`git subtree push --prefix dist origin release/${versionNum}`])
    )
    .pipe(notify(onSuccess("Push Live")));
});

// Prep & Release
// gulp prep
// gulp bump   or gulp zipit
// gulp commit
// git push --tags
// gulp pushlive ( git subtree push --prefix dist origin gh-pages )

gulp.task("watchJS", function() {
  gulp.watch(js_watchFolder, ["js"]);
});
gulp.task("watchJSDebug", function() {
  gulp.watch(js_watchFolder, ["js-debug"]);
});
gulp.task("watchJSProd", function() {
  gulp.watch(js_watchFolder, ["js-production"]);
});
gulp.task("watchLess", function() {
  gulp.watch(less_watchFolder, ["styles"]);
});
gulp.task("watchPAGES", function() {
  gulp.watch(htmlFiles, ["html"]);
});
gulp.task("watchTPL", function() {
  gulp.watch(tplFiles, ["html"]);
});
gulp.task("watchCX", function() {
  gulp.watch(cxSrcFiles, ["copy"]);
});
gulp.task("watchCXbackground", function() {
  gulp.watch(cxBackgroundFile, ["copy"]);
});

gulp.task("bump", function() {
  return bumpFunc("patch");
});
gulp.task("bump-patch", function() {
  return bumpFunc("patch");
});
gulp.task("bump-minor", function() {
  return bumpFunc("minor");
});

gulp.task("archive", function() {
  return archive();
});

gulp.task("prep", function(cb) {
  runSequence("js-production", "html", "styles", "copy", cb);
});

gulp.task("bump", function(cb) {
  runSequence("bump-patch", "clean", "zip", cb);
});

gulp.task("zipit", function(cb) {
  runSequence("clean", "zip", cb);
});

gulp.task("commit", function(cb) {
  runSequence("add", "commitV", "tag", cb);
});

gulp.task("watch", [
  "watchJS",
  "watchLess",
  "watchPAGES",
  "watchTPL",
  "watchCX",
  "watchCXbackground"
]);
gulp.task("watchProd", [
  "watchJSProd",
  "watchLess",
  "watchPAGES",
  "watchTPL",
  "watchCX",
  "watchCXbackground"
]);

gulp.task("build", ["js", "html", "styles", "copy"]);
gulp.task("build-debug", [
  "js-debug",
  "html",
  "styles",
  "watchJSDebug",
  "watchLess",
  "watchPAGES",
  "watchTPL",
  "watchCX"
]);

gulp.task("default", ["build", "watch"]);
