# Simple Gulp for Sass "7 in 1 architecture"

## Fast foldering ( needs bash* )

↳ src
↳ assets
  ↳ styles
    ↳ sass
      ⤏ main.scss
      ⤏ subfolders (abstracts, vendors, base, layout, components, pages, themes)

### Git Bash Comments

Create "styles" folder and put "sass" folder inside "styles"
```
cd src && cd assets && mkdir styles && cd styles && mkdir sass && cd sass
```
_*if there is no src*_;
```
mkdir src && cd src && mkdir assets && cd assets && mkdir styles && cd styles && mkdir sass && cd sass
```
_*if there is no assets*_;
```
cd src && mkdir assets && cd assets && mkdir styles && cd styles && mkdir sass && cd sass
```
_*Create "main.scss" file and 7/1 SASS architecture folders*_
```
touch main.scss && mkdir abstracts vendors base components layout pages themes
```
_*Create all the subfolders and SCSS files*_
```
cd abstracts && touch _variables.scss _mixins.scss _functions.scss _placeholders.scss && cd ..

cd base && touch _normalize.scss _typography.scss _base.scss && cd ..

cd components && touch _navbar.scss _links.scss _buttons.scss && cd ..

cd layout && touch _grid.scss _coloring.scss _spacing.scss && cd ..

cd pages && touch _home.scss _about.scss && cd ..

cd themes && touch _dark.scss && cd ..

cd vendors && touch _bootstrap.scss && cd ..
```
main.scss:
```
@charset 'UTF-8';

// 1. Configuration and helpers

@import
      'abstracts/variables',
      'abstracts/mixins',
      'abstracts/functions',
      'abstracts/placeholders';

// 2. Vendors

@import
      'vendors/bootstrap';

// 3. Base stuff

@import
      'base/normalize',
      'base/typography',
      'base/base';

// 4. Layout-related sections

@import
      'layout/grid',
      'layout/coloring',
      'layout/spacing';

// 5. Components

@import
      'components/links',
      'components/
      'components/navbar';

// 6. Page-specific styles

@import
      'pages/home',
      'pages/about';

// 7. Themes

@import
      'themes/dark';
```

## gulpfile.js 
```
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/sass/main.scss')
    .pipe(sass({
      outputStyle: ':compact'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./src/assets/styles/css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/assets/styles/sass/**/*.scss', gulp.series('sass'));
});
```

### gulp sass

### gulp sass:watch
