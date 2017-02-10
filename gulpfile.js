var gulp = require('gulp');
var del = require('del');

var paths = {
  styles: ['src/styles.css','node_modules/@angular/material/core/theming/prebuilt/deeppurple-amber.css'],
  js: ['node_modules/core-js/client/shim.min.js', 'node_modules/zone.js/dist/zone.min.js'],
  images: 'src/assets/img/*',
  index: 'src/index.html',
  prod: '../../firebase_Test/public'
};


gulp.task('clean-build', function() {
  // deleting target dir
  del(['target']);
});

gulp.task('clean-prod', function() {
  // deleting target dir
  del([paths.prod]);
});

gulp.task('index-to-build', function() {
  // copying index.html to target
  	return gulp.src(paths.index)
			  .pipe(gulp.dest('./target'));
});

gulp.task('images-to-build', function() {
  // copying assets folder, index.html, shim.min.js, zone.min.js to target
  //minified the css, js from that folder
  	return gulp.src(paths.images)
			  .pipe(gulp.dest('./target/assets/imgs'));
});

gulp.task('js-to-build', function() {
  // copying assets folder, index.html, shim.min.js, zone.min.js to target
  //minified the css, js from that folder
  	return gulp.src(paths.js)
			  .pipe(gulp.dest('./target'));
});

gulp.task('styles-to-build', function() {
  // copying assets folder, index.html, shim.min.js, zone.min.js to target
  //minified the css, js from that folder
  	return gulp.src(paths.styles)
			  .pipe(gulp.dest('./target/assets'));
});


gulp.task('target-to-prod', function(){
  return gulp.src('./target/*')
        .pipe(gulp.dest(paths.prod));
});

gulp.task('deploy', ['clean-prod', 'target-to-prod'] , function() {
  console.log("deployed");
});

gulp.task('finish-build', ['index-to-build', 'images-to-build', 'js-to-build', 'styles-to-build'] , function() {
	console.log("build completed");
});



//todo change aot to build

/*

	return gulp.src('./client/templates/*.jade')
			  .pipe(jade())
			  .pipe(gulp.dest('./build/templates'))
			  .pipe(minify())
			  .pipe(gulp.dest('./build/minified_templates'));


*/