<<<<<<< HEAD
var gulp 					= require("gulp"),
	browserSync				= require("browser-sync"),
	// cssNano					= require("cssnano"),
	sass						= require("gulp-sass"),
	plumber					= require("gulp-plumber"),
	gutil						= require("gulp-util"),
	uglifyJs	    			= require("gulp-uglify-es").default,
	rename					= require("gulp-rename"),
	pug						= require("gulp-pug"),	
	concat					= require("gulp-concat");
=======
var gulp 						= require("gulp"),
	browserSync				= require("browser-sync"),
	// cssNano					= require("cssnano"),
	sass							= require("gulp-sass"),
	plumber						= require("gulp-plumber"),
	gutil							= require("gulp-util"),
	uglifyJs	    		= require("gulp-uglify-es").default,
	rename						= require("gulp-rename"),
	pug								= require("gulp-pug"),	
	concat						= require("gulp-concat");
>>>>>>> 2509711ce90be53994c766b05e4fa316e78ce4f6

// Source code paths, build destination, other vars

var paths = {

				cwd: './dist',

				pug: {
<<<<<<< HEAD
					watch: 'src/**/*.pug',
					src: 'src/*.pug',
=======
					src: 'src/**/*.pug',
>>>>>>> 2509711ce90be53994c766b05e4fa316e78ce4f6
					dest: './dist'
				},

				styles: {
<<<<<<< HEAD

					watch: 'src/**/*.+(sass|scss)',
					src:   'src/scss/style.scss',
					dest:  'dist/css/'
				}, 

				js: {
					src: 'src/js/*.js',
					dest: 'dist/js'
				},

				jsUglify: {
					src: ['src/js/*.js', '!app/js/*.min.js'],
					dest: 'dist/js'
=======
					src: 'app/sass/**/*.+(sass|scss)',  	
					dest: 'app/css/'
				}, 

				js: {
					src: ['app/js/*.js', '!app/js/*.min.js'],
					dest: 'app/js'
>>>>>>> 2509711ce90be53994c766b05e4fa316e78ce4f6
				}

}



gulp.task('server', () => {
	browserSync.init({
		server: paths.cwd,
		notify: false,
	});
});



gulp.task('pug', (cb) => {
	gulp.src(paths.pug.src)
<<<<<<< HEAD
 	 .pipe(plumber(function (error) {
		gutil.log(error.message);
		this.emit('end');
	 }))
	 .pipe(pug({
		pretty: true,
	 }))
	 .pipe(gulp.dest(paths.pug.dest))
	 .pipe(browserSync.reload({ stream: true }));
	 reloadHTML();
=======
	 .pipe(pug({
		pretty: true
	 }))
	 .pipe(gulp.dest(paths.pug.dest));
>>>>>>> 2509711ce90be53994c766b05e4fa316e78ce4f6
	 cb();
})	

gulp.task('sass', () => {
	return gulp.src(paths.styles.src)
		   .pipe(plumber(function(error) {
		   	gutil.log(error.message);
		   	this.emit('end');
		   }))
		   .pipe(sass())
		   .pipe(gulp.dest(paths.styles.dest))
		   .pipe(browserSync.reload({stream:true}))
});



<<<<<<< HEAD
gulp.task('copy', function () {
	 return  gulp.src(paths.js.src)
	 		  .pipe(gulp.dest(paths.js.dest));
})

gulp.task('uglify', function() {
	return gulp.src(paths.jsUglify.src)
=======
gulp.task('uglify', function() {
	return gulp.src(paths.js.src)
>>>>>>> 2509711ce90be53994c766b05e4fa316e78ce4f6
		   .pipe(uglifyJs())
		   .on('error', function (err) {
				console.error('Error in js task', err.toString());
			})
		   .pipe(rename(function(path) {
			   path.basename += ".min"
		   }))
<<<<<<< HEAD
		   .pipe(gulp.dest('src/js/'))
=======
		   .pipe(gulp.dest('app/js/'))
>>>>>>> 2509711ce90be53994c766b05e4fa316e78ce4f6
		   .pipe(browserSync.reload({ stream: true }));
})

gulp.task('compress', gulp.series('uglify', () => {
	return gulp.src(['js/*.min.js', '!js/all.min.js'])
		   .pipe(concat('all.min.js'))
		   .pipe(gulp.dest(paths.js.dest))
}));


<<<<<<< HEAD
// gulp.task('build_jquery', function () {
// 	return gulp.src('app/bower_components/jquery/dist/jquery.js')
// 		.pipe(concat('jquery.min.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('app/js'))
// 		.pipe(browserSync.reload({ stream: true }));
// })


function reloadHTML() {
		browserSync.reload();
		return true;
=======
gulp.task('build_jquery', function () {
	return gulp.src('app/bower_components/jquery/dist/jquery.js')
		.pipe(concat('jquery.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({ stream: true }));
})


function reloadHTML(cb) {
		browserSync.reload();
		cb();
>>>>>>> 2509711ce90be53994c766b05e4fa316e78ce4f6
}


gulp.task('watch', gulp.parallel('server', function () {
<<<<<<< HEAD
	//  gulp.watch('app/*.html', reloadHTML);
	 gulp.watch(paths.styles.watch, gulp.series('sass'));
	 gulp.watch(paths.js.src, gulp.series('uglify'));
	 gulp.watch(paths.pug.watch, gulp.series('pug'));
 	//  gulp.watch('app/bower_components/jquery/dist/jquery.js', gulp.series('build_jquery'));
=======
	 gulp.watch('app/*.html', reloadHTML);
	 gulp.watch(paths.styles.src, gulp.series('sass'));
	 gulp.watch(paths.js.src, gulp.series('compress'));
	 gulp.watch(paths.pug.src, gulp.series('pug'));
 	 gulp.watch('app/bower_components/jquery/dist/jquery.js', gulp.series('build_jquery'));
>>>>>>> 2509711ce90be53994c766b05e4fa316e78ce4f6
 	//  gulp.watch(paths.styles.dest, reloadHTML)
}));


gulp.task('default', gulp.series('watch'));