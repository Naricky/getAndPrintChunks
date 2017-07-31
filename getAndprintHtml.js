var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


  https.get(requestOptions, function (response) {


    response.setEncoding('utf8');

    var stringBuffer = "";

    response.on('data', function (data) {



      stringBuffer += data




    });

    response.on('end', function() {
      console.log(stringBuffer);
    });

  });
}





getAndPrintHTML();