# Simple Gulp for Sass "7 in 1 architecture"

1. git clone https://github.com/gokhantaskan/gulp-sass-7in1
2. npm install

- Demo: https://youtu.be/K3D-b4eBvlA

## Fast foldering ( needs git bash\* )

↳ src
↳ assets
↳ styles
↳ sass
⤏ main.scss
⤏ subfolders (abstracts, vendors, base, layout, components, pages, themes)

### Git Bash Commands

_I changed the previous commit to let you use commands below directly_

**⤏ Create folder structure and put empty "sass" folder inside "styles"**

```
mkdir src && cd src && mkdir assets && cd assets && mkdir styles && cd styles && mkdir sass && cd sass
```

**⤏ Create "main.scss" file and 7/1 SASS architecture folders**

```
touch main.scss && mkdir abstracts vendors base components layout pages themes
```

**⤏ Create all the subfolders and SCSS files**

```
cd abstracts && touch _variables.scss _mixins.scss _functions.scss _placeholders.scss && cd ..

cd base && touch _normalize.scss _typography.scss _base.scss && cd ..

cd components && touch _navbar.scss _links.scss _buttons.scss && cd ..

cd layout && touch _grid.scss _coloring.scss _spacing.scss && cd ..

cd pages && touch _home.scss _about.scss && cd ..

cd themes && touch _dark.scss && cd ..

cd vendors && touch _bootstrap.scss && cd ..

cd .. && cd .. && cd .. && cd ..
```

**⤏ Go back to the main directory**

```
cd .. && cd .. && cd .. && cd ..
```

**⤏ main.scss:**

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
"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const concat = require("gulp-concat");
sass.compiler = require("node-sass");

const sassPaths = {
  src: "./src/assets/styles/sass/**/*.scss",
  main: "./src/assets/styles/sass/*.scss",
  dest: "./src/assets/styles/css",
  concatCss: "main.css",
  concatNano: "main.nano.css"
};

gulp.task("sass", () => {
  return gulp
    .src(`${sassPaths.main}`)
    .pipe(
      sass({
        outputStyle: "compact"
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(concat(`${sassPaths.concatCss}`))
    .pipe(gulp.dest(`${sassPaths.dest}`));
});

gulp.task("sass:nano", () => {
  return gulp
    .src(`${sassPaths.main}`)
    .pipe(sass({}).on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(cssnano())
    .pipe(concat("main.nano.css"))
    .pipe(gulp.dest(`${sassPaths.dest}`));
});

gulp.task("sass:watch", () => {
  gulp.watch(`${sassPaths.src}`, gulp.series("sass"));
});
```

### Terminal Commands

`gulp sass`

`gulp sass:nano`

`gulp sass:watch`
