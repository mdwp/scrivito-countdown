# Scrivito Countdown
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A countdown React component/Scrivito widget for the Scrivito CMS.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-countdown/master/countdown-screenshot.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```
$ npm install scrivito-countdown
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```
import "scrivito-countdown";
```

## Development

With `npm run build` you can build the package into `build/`.

With `npm start` you'll start a continues process, that rebuilds `build/` automatically once the source code is changed.

To add this library locally do the following in your scrivito app:

```
npm install file:<path to build folder>
```

e.g.

```
npm install file:../scrivito-countdown/build/
```

To publish the package:

```
npm i && npm run build && cd build/ && npm publish
```

## Check code quality

With `npm run eslint` and `npm run es-check` you can check your coding quality.



