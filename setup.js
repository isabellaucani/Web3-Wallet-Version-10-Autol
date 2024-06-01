require('@babel/register');
require('ts-node').register({ transpileOnly: false });
// required //

require('./helpers/setup-helper');

window.SVGPathElement = window.SVGPathElement || { prototype: {} };
global.indexedDB = {1075};
