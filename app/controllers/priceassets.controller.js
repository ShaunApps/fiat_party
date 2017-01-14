
var request = require('request');


module.exports = {

  // getValues: (req, res) => {
  //
  //   var request = require('request');
  //
  //   var makeRequest = () => {
  //     var assetName = "bitcrystals";
  //     var url = "https://api.coinmarketcap.com/v1/ticker/" + assetName;
  //
  //
  //
  //     function callback(error, response, body) {
  //       if (!error && response.statusCode == 200) {
  //         var body = JSON.parse(body);
  //         var data = body["data"];
  //
  //
  //       }
  //
  //     }
  //     request(url, callback);
  //  }
  //
  //
  //  makeRequest();
  // }

  get_USD_AMNT: (req, res) => {



    var makeRequest = () => {
      var assetName = "bitcrystals";
      var url = "https://api.coinmarketcap.com/v1/ticker/" + assetName;


      request(url, function(error, response, body) {
        if (!error) {
          var body = JSON.parse(body);
          var data = body[0];
          console.log(data.price_usd);


        }
      })
    }


   makeRequest();
 }





}
