

const {src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
//css
const autoprefixer = require('autoprefixer');
const cssnano=require('cssnano');
const postcss=require('gulp-postcss');
const sourcemaps=require('gulp-sourcemaps');
//js
const terser = require("gulp-terser-js");

//img
const webp = require("gulp-webp");
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const avif = require("gulp-avif");

function css(done) {
   
    src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe( postcss([ autoprefixer(), cssnano() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest("3-pry-end-portafolio/css"));



    done();//callback
}

//img

function webpimg(done) {

    const opciones = {
    quality: 50
};

    src("src/img/**/*.{png,jpg}")
    .pipe(webp(opciones))
    
    .pipe(dest("3-pry-end-portafolio/img"));



    done();//callback
}

function vif(done) {

    const opciones = {
    quality: 50
};

    src("src/img/**/*.{png,jpg}")
    .pipe(avif(opciones))
    
    .pipe(dest("3-pry-end-portafolio/img"));



    done();//callback
}


function imagenes(done) {

    const opciones = {
    optimizationLevel: 3
}

    src("src/img/**/*.{png,jpg,svg}")
    .pipe (cache(imagemin(opciones)))
    
    .pipe(dest("3-pry-end-portafolio/img"));



    done();//callback
}

//js
function jss(done) {
   
    src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest("3-pry-end-portafolio/js"));



    done();//callback
}


function dev(done){
watch("src/scss/**/*.scss", css)   
watch("src/js/**/*.js", jss)   
done();
}

exports.allv = parallel (css, jss, webpimg,imagenes,vif, dev);
exports.webpimg = webpimg;
exports.dev = dev;
exports.css = css;
exports.jss = jss;
exports.imagenes = imagenes;
exports.vif = vif;

