var gulp = require('gulp');
var fs = require('fs');
var del = require('del');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var run = require('gulp-run');
var package = require('./package.json');
var pug = require('gulp-pug');
var ghPages = require('gulp-gh-pages');
var git = require('gulp-git');
var bump = require('gulp-bump');
var tag_version = require('gulp-tag-version');
//POSTCSS AND PLUGINS
var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import');
var stylelint = require('gulp-stylelint');
var cssnext = require('postcss-cssnext');
var cssnano = require('cssnano');

var outputDir  = 'dist/';
var outputTest = 'test-output/';
var outputSite = 'site-output/';
var CDNRepo    = '../core-cdn/' + package.version + '/';
var cssFiles   = ['css/**/*.css', 'components/**/*.css', 'patterns/**/*.css'];
var pugFiles   = ['css/**/*.pug', 'components/**/*.pug', 'patterns/**/*.pug', 'test/**/*.pug', '!test/test-template.pug'];
var testJsFiles= ['css/**/*.meta.js', 'components/**/*.meta.js', 'patterns/**/*.meta.js'];
var testAssets = 'test/**/*.*(js|css|jpeg)';
var siteFiles= ['site/**/*', '**/*.md'];

//main core css build
gulp.task('css', function () {

  return gulp.src('core-design.css')
    .pipe( postcss([ postcssImport, cssnext({ browsers: ['> 2%', 'last 2 versions'] }) ]) )
    .pipe( gulp.dest(outputDir) )
    .pipe( rename({suffix: '.min'}) )
    .pipe( postcss([ cssnano({ safe:true }) ]) )
    .pipe( gulp.dest(outputDir) )

});

//brand only css
gulp.task('css-brand-only', function () {

  return gulp.src('core-design-brand-only.css')
    .pipe( postcss([ postcssImport, cssnext({ browsers: ['> 2%', 'last 2 versions'] }) ]) )
    .pipe( gulp.dest(outputDir) )
    .pipe( rename({suffix: '.min'}) )
    .pipe( postcss([ cssnano({safe:true}) ]) )
    .pipe( gulp.dest(outputDir) )

});

//copy static brand assets
gulp.task('brand-assets', function () {

  return gulp.src('brand*/*/*.*')
    .pipe(gulp.dest(outputDir))

});

gulp.task('lint-css', function lintCssTask() {

  return gulp
    .src(cssFiles)
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

gulp.task('generate-tests', ['clean-tests'], function() {
  return run('python scripts/gen_all_tests.py').exec()
   .pipe(gulp.dest(outputTest))
});
gulp.task('clean-tests', function () {
	return del.sync([outputTest+'**'], {force:true});
});


gulp.task('generate-docs', ['clean-docs', 'site-assets'], function() {
  return run('python scripts/gen_docs.py').exec()
});
gulp.task('site-assets', ['clean-docs'], function () {
  return gulp.src('site/**/*.*')
    .pipe(gulp.dest(outputSite))

});
gulp.task('clean-docs', function () {
	return del.sync([outputSite+'**'], {force:true});
});

gulp.task('publish-gh-pages', ['default'], function () {
  return gulp.src(['dist*/**/*.*', 'test-output*/**/*.*', 'site-output/**/*.*'])
    .pipe(ghPages({remoteUrl:'git@github.build.ge.com:core-design/core-css.git', cacheDir: '.publish/core-design/core-css'}))

});

gulp.task('publish-dist', ['default', 'bump'], function () {
  var latest_package = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  return gulp.src('dist*/**/*.*')
    .pipe(git.add({args: '-f'}))
    .pipe(git.commit('Build: ' + latest_package.version + ' at ' + new Date()))
});
gulp.task('bump', function() {
  return gulp.src('./package.json')
    .pipe(bump({type: 'patch'})) // patch, minor, major
    .pipe(gulp.dest('./'))
    .pipe(git.add())
    .pipe(git.commit('Build: Bump version at ' + new Date()))
});
gulp.task('publish-and-tag', ['publish-dist'], function() {
  return gulp.src('./package.json')
    .pipe(tag_version());
});

gulp.task('test-templates', ['test-assets', 'test-components'], function() {

  return gulp.src(pugFiles, { base: '.' })
    .pipe(pug({pretty:true}))
    .pipe(gulp.dest(outputTest))
});

//copy static brand assets
gulp.task('test-assets', function () {

  return gulp.src(testAssets)
    .pipe(gulp.dest(outputTest + 'test/'))

});

//copy all *test.js files into one components.js
gulp.task('test-components', function () {

  return gulp.src(testJsFiles)
    .pipe(concat('components.js'))
    .pipe(gulp.dest(outputTest + 'test/'))

});

//web server for testing
gulp.task('serve', ['watch'], function() {

  gulp.src('.')
    .pipe(webserver({
      directoryListing: true,
      open: outputTest,
      livereload: false,
      proxies: [{source:'/pages/core-design/core-css/', target: 'http://localhost:8000/'}]
    }));

});

//watch and run build
gulp.task('watch', ['default'], function() {
  gulp.watch(cssFiles, ['css','css-brand-only']);
  gulp.watch(pugFiles, ['test-templates']);
  gulp.watch(testJsFiles, ['test-components']);
  gulp.watch(testAssets, ['test-assets']);
  gulp.watch(siteFiles, ['generate-docs']);
});

gulp.task('default', ['css', 'css-brand-only', 'brand-assets', 'test-templates', 'generate-docs']);
