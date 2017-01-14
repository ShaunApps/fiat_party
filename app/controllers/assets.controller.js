const request = require('request');

module.exports = {

  presentAssets: (req, res) => {

  // var assets = [
  //   { name: 'XCP', amount: '5'},
  //   { name: 'RAREPEPE', amount: '3'},
  //   { name: 'XUSD', amount: '100'}
  // ]

    var assets = [];
    var asset= {};
    var address = req.body.assetaddress;
    var url = "https://counterpartychain.io/api/balances/" + address;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var body = JSON.parse(body);

            console.log(assets);
            for (var i = 0; i < body.data.length; i++) {
                console.log(i, body.data[i]);
                asset.name = body.data[i].asset;
                asset.amount = body.data[i].amount;
                console.log(100, asset);
                assets[i] = asset;
            }
            console.log(13, assets);
        }
    })

    res.render('pages/assets', { assets: assets });
  }
}
