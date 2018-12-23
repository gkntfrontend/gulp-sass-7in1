# Simple Gulp for Sass "7 in 1 architecture"
1. git clone https://github.com/gkntfrontend/gulp-sass-7in1.git   
2. npm install

## Fast foldering ( needs git bash* )

↳ src
    ↳ assets 
        ↳ styles
            ↳ sass
                ⤏ main.scss
                ⤏ subfolders (abstracts, vendors, base, layout, components, pages, themes)

### Git Bash Commands

*I've changed the previous commit to let you use commands below directly*

__⤏ Create folder structure and put empty "sass" folder inside "styles"__  

```
mkdir src && cd src && mkdir assets && cd assets && mkdir styles && cd styles && mkdir sass && cd sass
```
__⤏ Create "main.scss" file and 7/1 SASS architecture folders__
```
touch main.scss && mkdir abstracts vendors base components layout pages themes
```
__⤏ Create all the subfolders and SCSS files__
```
cd abstracts && touch _variables.scss _mixins.scss _functions.scss _placeholders.scss && cd ..

cd base && touch _normalize.scss _typography.scss _base.scss && cd ..

cd components && touch _navbar.scss _links.scss _buttons.scss && cd ..

cd layout && touch _grid.scss _coloring.scss _spacing.scss && cd ..

cd pages && touch _home.scss _about.scss && cd ..

cd themes && touch _dark.scss && cd ..

cd vendors && touch _bootstrap.scss && cd ..
```
__⤏ main.scss:__
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
      'base/base',
      'base/typography';

// 4. Layout-related sections

@import
      'layout/grid',
      'layout/coloring',
      'layout/spacing';

// 5. Components

@import
      'components/links',
      'components/buttons',
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
```javascript
'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/sass/main.scss')
    .pipe(sass({
      outputStyle: 'compact'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./src/assets/styles/css'));
});

gulp.task('sass:nano', function () {
  return gulp.src('./src/assets/styles/sass/main.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cssnano())
    .pipe(concat('main.nano.css'))
    .pipe(gulp.dest('./src/assets/styles/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/styles/sass/**/*.scss', gulp.series('sass'));
});
```

### Terminal Commands

```gulp sass```   

```gulp sass:nano``` 

```gulp sass:watch``` 
