module.exports = {




  presentAssets: (req, res) => {


  var assets = [
    { name: 'XCP', value: '5'},
    { name: 'RAREPEPE', value: '3'},
    { name: 'XUSD', value: '100'}
  ]

  //   var request = require('request');
  //
  //
  //
  //   var assets = [];
  //   var names = {};
  //
  //
  //   var makeRequest = () => {
  //     var address = "1FwkKA9cqpNRFTpVaokdRjT9Xamvebrwcu";
  //     var url = "https://counterpartychain.io/api/balances/" + address;
  //
  //     request(url, function (error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //       var body = JSON.parse(body);
  //       var data = body["data"];
  //       for (var i = 0; i < data.length; i++) {
  //         names.name = data[i]["asset"];
  //         assets.push(names);
  //       }
  //       console.log(assets);
  //     }
  //   })
  // }
  //   makeRequest();


    res.render('pages/assets', { assets: assets });
  }
}
