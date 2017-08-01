var getHTML = require('../getHTML.js');


function printReverse(stringBuffer){
  console.log(stringBuffer.split(" ").reverse().join(" "));
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML (requestOptions, printReverse);

