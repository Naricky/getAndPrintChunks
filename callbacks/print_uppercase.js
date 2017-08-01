var getHTML = require('../getHTML.js');

function printUpperCase(stringBuffer){
  console.log(stringBuffer.toUpperCase());
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML (requestOptions, printUpperCase);

