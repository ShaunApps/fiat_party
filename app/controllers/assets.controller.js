var request = require('request');

module.exports = {




  presentAssets: (req, res) => {


  // var assets = [
  //   { name: 'XCP', amount: '5'},
  //   { name: 'RAREPEPE', amount: '3'},
  //   { name: 'XUSD', amount: '100'}
  // ]



    var assets = [];



    var makeRequest = () => {
      var address = req.body.assetaddress;
      var url = "https://counterpartychain.io/api/balances/" + address;





      function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          var body = JSON.parse(body);
          var data = body["data"];

          for (var i = 0; i < data.length; i++) {
            var assetname = data[i]["asset"];
            var assetamount = data[i]["amount"];
            var newobject = {};
            newobject.name = assetname;
            newobject.amount = assetamount;
            assets.push(newobject);
          }
            console.log(assets);
        }


      }
      request(url, callback);
    }

    makeRequest()






    res.render('pages/assets', { assets: assets });
  }


}
