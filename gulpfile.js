
const { series , src , dest, watch}= require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp= require('gulp-webp');
const concat= require('gulp-concat');



//rutas 

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/javascript/**/*.js'
}

function css ( done ){//inecesario
    return src(paths.scss)
        .pipe( sass() )
        .pipe( dest('./build/css') )
        .pipe( notify({ message: 'sass listo'}) );
}

function minificarcss(){
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') )
}

function imagenes(){
    return src(paths.imagenes)
        .pipe( imagemin() )
        .pipe( dest('./build/img'))
        .pipe( notify({ message: 'Minificado listo'}) );
}

function versionWebp(){
    return src(paths.imagenes)
        .pipe( webp()) 
        .pipe( dest('./build/img'))
        .pipe( notify({ message: 'Webp listo'}) );
}

function javascript(){
    return src(paths.js)
        .pipe( concat('bundle.js'))
        .pipe( dest ('./build/js') )
        .pipe( notify({ message: 'javascript listo'}) );
}

function watchArchivos(){
    watch(paths.scss,css);
    watch(paths.js,javascript)
}


exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.default = series(css,javascript,imagenes, versionWebp, watchArchivos)