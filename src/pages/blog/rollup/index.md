---
title: “A complete guide on building a React UI library using Rollup“
date: "2018-12-31"
tags: ["code"]
---

## TOC

- What will be covered in this course
- What is Rollup
    - What is it different from the Rest
    - What is tree shaking
    - How to achieve tree shaking
- Set up rollup from starter
    - Rename library
    - Babel with module false
    - Go through Rollup config
- Setup an application to test tree shaking
- Transpile using Babel and Uglify
- Add a simple element and development using Storybook
    - Add React to peep dependencies
- Remove UMD version and moduleNames
- Add Storyshot for component automatic testing
- Add another element and test tree shaking
    - set side effect to false
- Test UI Library
- Publish Library
    - Switch to a different name if occupied
- Switch application to use library from npm
- Code splitting in demo application if library is big

## TODO

- [x] Rollup Starter
    - [x] Babel
    - [x] UglifyJS
- [x] Webpack 4 Application Starter
- [ ] Develop UI Library with Emotion and Storybook
    - [x] Add storybook
    - [x] Add a button
    - [x] Add a chart
    - [x] Add react-select
    - [x] Jest
        - [ ] button
        - [ ] chart
        - [ ] date-picker
- [ ] Testing UI Library
- [ ] Publish UI Library
- [ ] Using Webpack 4 in your application to take advantage of ES Modules tree shaking

## Lists

- [ ] peerDependencies
- [ ] webpack modules names
- [ ] .babelrc config
- [ ] side effect
- [ ] named export vs import * as chart and export chart

```
  resolve: {
    mainFields: ['module', 'main']
  },
```




I recently want to migrate the existing component library to rollup + emotion. The current setup is CSS module + Webpack for bundling, and there are a few problem with this:

* Even if you just need to use a few components in the library, you still need to include the entire js bundle and css bundle, which added together is more than 500kb, but the components they are using will just be 10kb
* Even if the user is able to tree shake JS files, they are not able to split css files: there is only one compiled css file in the build
* Using css files for a JS library is not ideal, user will need to do another import statement and there webpack need to add a css loader

I will use Rollup.JS, Webpack 4 and emotion.js for this demonstration, you can check the source code of the whole project here.

---
## 1. What is Rollup and how it is different from Webpack, Parcel

Before I jump into the project, I would like to brief introduce  Rollup. If you have never learnt of Rollup before, it is the Next-generation ES6 module bundler mostly suitable for libraries. 

There is a saying that you should use Parcel for small to medium projects, Webpack for large applications and Rollup for libraries. That is true and there are many great open source libraries are using Rollup ()

What is different from Rollup and the rest?

What is tree shaking?

What is the difference between `module` and `main` field?

## 2. Setup Rollup Starter and Configurations

## 3. Add UI components to the library and build

## 4. Setup Webpack 4 to make use of ES modules


## References

- [pkg.module](https://github.com/rollup/rollup/wiki/pkg.module)
- [ES6 modules](https://github.com/rollup/rollup/wiki/ES6-modules)
- [How to Create a React app from scratch using Webpack 4](https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75)
- [Stack Overflow Tree Shaking](https://stackoverflow.com/questions/47663486/webpack-3-babel-and-tree-shaking-not-working?rq=1)
- [Discussion on GitHub of putting module to false](https://github.com/babel/babel-loader/issues/521)
- [PR pending merge](https://github.com/babel/babel-loader/pull/529)