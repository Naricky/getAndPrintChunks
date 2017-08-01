var getHTML = require('../getHTML.js');

function printLowerCase(stringBuffer){
  console.log(stringBuffer.toLowerCase());
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML (requestOptions, printLowerCase);

