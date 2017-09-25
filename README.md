# VueJS Boilderplate
Setting up a whole vue.js environment including a __Webpack dev server__ and __HMR__ (Hot Module Replacement).

## Installation
Get started with the whole installation process by executing the following command. This will install all dependencies
used by this project.
- ```npm install```

#### Upgrading dependencies (if necessary)
In order to check for newer dependency versions included in __package.json__ and update them use
[npm-check-updates](https://github.com/tjunnone/npm-check-updates).

- ```npm install -g npm-check-updates```
- ```npm ncu```
  > Display upgradable dependencies including their newer versions.
- ```npm -u```
  >  Overwrite package file.
- ```npm -a```
  >  Include even those dependencies whose latest version satisfies the declared semver dependency.

#### Supported node version
Make sure to use a supported version of [node.js](https://nodejs.org/en/). The supported versions are listed in
__engines__ which can be found in __package.json__.

If you're using a non supported version and can not afford changing that you might use a __node version manager__
like [n](https://github.com/tj/n).
- ```npm install -g n```
- ```n x.x.x```
  > Installing a new version also sets the current node version to the installed one.

_Note: If you are using different node versions you can change between them by just using ```n x.x.x```._

## Usage
Start this project by executing a desired npm script.

- ```npm run start:dev``` _(start a HMR enabled webpack dev server with development settings in watch mode)_
- ```npm run start:prod``` _(start a webpack dev server with production settings in watch mode)_
- ```npm run build:dev``` _(build files with development settings and watch for changes)_
- ```npm run build:prod``` _(build files with production settings and watch for changes)_