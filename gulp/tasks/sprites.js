var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename');

var config = {
    mode: {
      css: {
        sprite: 'sprite.svg',
        render: {
          css: {
            template: './gulp/templates/sprite.css'
          }
        }
      }
    }
  }

gulp.task('createSprite', function () {
    return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteCss', function () {
    gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.scss'))
    .pipe(gulp.dest('./app/assets/styles/modules/'));
});