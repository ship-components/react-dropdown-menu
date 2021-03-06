# react-dropdown-menu
[React](http://facebook.github.io/react/) dropdown menu. Exports a commonjs module that can be used with [webpack](http://webpack.github.io/). Source is in ES6 and is compiled down to ES5 using [Babel](https://babeljs.io/).

[![npm](https://img.shields.io/npm/v/ship-components-dropdown-menu.svg?maxAge=2592000)](https://www.npmjs.com/package/ship-components-dropdown-menu)
[![Build Status](http://img.shields.io/travis/ship-components/ship-components-dropdown-menu/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-dropdown-menu)
[![Coverage](http://img.shields.io/coveralls/ship-components/ship-components-dropdown-menu.svg?style=flat)](https://coveralls.io/github/ship-components/ship-components-dropdown-menu)
[![dependencies](https://img.shields.io/david/ship-components/ship-components-dropdown-menu.svg?style=flat)](https://david-dm.org/ship-components/ship-components-dropdown-menu)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-dropdown-menu.svg?style=flat)](https://david-dm.org/ship-components/ship-components-dropdown-menu?type=dev)

## Usage

### ES6/JSX (Recommended)
The component is written using ES6/JSX therefore Babel is recommended to use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).
```js
import React from 'react';
import DropdownMenu from 'ship-components-dropdown-menu';

export default class BasicExample extends React.Component

  render() {
    return (
      <DropdownMenu
        menuIconClass='ion-navicon'
        items={[
            {
                name: 'Add',
                iconClass: 'icon-plus',
                action: function() {}
            },
            {
                name: 'Remove',
                iconClass: 'icon-minus',
                action: function() {}
            }]
      }/>
    );
  }
}
```

## Examples and Development
[![Dropdown-demo.gif](https://s19.postimg.org/xyfi7f8w3/Dropdown_demo.gif)](https://postimg.org/image/v4cctz6pr/)

More examples can be found in the `examples/` folder. A development server can be run with:

```shell
$ npm install
$ npm start
```

which will live reload any changes you make and serve them at http://localhost:8080.

### Webpack Configuration
This module is designed to be used with webpack but requires a few loaders if you are pulling the source into another project.

```shell
$ npm install webpack babel-loader css-loader style-loader postcss-loader extract-text-webpack-plugin postcss-nested postcss-color-hex-alpha postcss-color-function postcss-calc postcss-simple-vars autoprefixer --save-dev
```

Below are is a sample of how to setup the loaders:

```js
/**
 * Relevant Webpack Configuration
 */
{
  [...]
  module: {
    loaders: [
      // Setup support for ES6
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // Setup support for CSS Modules
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      }
    ]
  },
  plugins: [
    // Extract the css and put it in one file. Path is relative to output path
    new ExtractTextPlugin('../css/[name].css', { allChunks: true })
  ],
  // CSS Modules
  postcss: [
    require('postcss-nested'),
    require('postcss-simple-vars') {
      variables: {
        'base-grid-size' : '4px',
        'primary-color': '#38b889',
        'primary-font-color': '#333',
        'inverse-font-color': '#fff',
        'primary-background-color' : '#fff'
      }
    },
    require('postcss-color-hex-alpha'),
    require('postcss-color-function'),
    require('postcss-calc'),
    require('autoprefixer')
  ],
  [...]
}
```

## Todo
* Add an option to create menu using children

## Tests
1. `npm install`
2. `npm test`

## History
* 1.1.3 - Updated ship-components-highlight-select (React 16 compatibility)
* 1.1.2 - Updated React dependencies (React 16 compatibility)
* 1.1.1 - Switched to react-transition-group 1.x (React 16 compatibility)
* 1.1.0 - Fixed positioning bug with fixed position containers
* 1.0.1 - Updated babel preset to env
* 0.5.0 - Removed ReactDOM.findDOMNode which allows compatibility with React 16
* 0.4.0 - Updates to the latest babel configurations (babel-preset-env)
* 0.3.0 - Updates to React 15, Implements basic tests and fixes the dropdown UI bug to prevent the component to be cutoff
* 0.2.2 - Fixed a bug where props.classNames were applied twice
* 0.2.1 - Added fixes for keeping the menu on the screen
* 0.2.0 - Refactored alignment code, removed container check, updated to react 15, missing deps
* 0.1.2 - Fix for icons not being vertically centered
* 0.1.1 - Fix for server side rendering
* 0.1.0 - Initial

## License
The MIT License (MIT)

Copyright (c) SHIP

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
