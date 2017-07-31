var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


function getAndPrintHTML (address) {



  https.get(address, function (response) {

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





getAndPrintHTML(requestOptions);