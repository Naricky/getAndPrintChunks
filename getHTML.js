var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function printHTML (abc) {
        console.log(abc);
}


function getHTML (address , callback) {




  https.get(address, function (response) {

    response.setEncoding('utf8');

    var stringBuffer = "";

    response.on('data', function (data) {

      stringBuffer += data

    });

    response.on('end', function() {
        callback(stringBuffer);
    })

  });
}
module.exports = function getHTML (options, callback) {

};


getHTML(requestOptions, printHTML);