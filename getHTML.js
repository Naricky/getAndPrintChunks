var https = require('https');

module.exports = function getHTML (url, callback) {
       var https = require('https');


  https.get(url, function (response) {

    response.setEncoding('utf8');

    var stringBuffer = "";

    response.on('data', function (data) {

      stringBuffer += data

    });

    response.on('end', function() {
        return callback(stringBuffer);
    });

  });
}
