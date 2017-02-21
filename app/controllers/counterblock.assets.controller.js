const request = require('request');
const priceassets = require('./priceassets.controller');


module.exports = {

  retrieveAssets: (req, res) => {

    const address = req.body.counterassetaddress;
    

    request({
      method: 'POST',
      uri: 'http://public.coindaddy.io:4000/api/',
      headers: {'content-type': 'application/json-rpc'},
      auth: {'user': 'rpc', 'pass': '1234'},
      body: JSON.stringify({
            "method": "get_balances",
            "params": {
                "filters": [{"field": "address", "op": "==", "value": address}]
            },
            "jsonrpc": "2.0",
            "id": 0 }),

    },
      function(error, response, body) {
        if (!error) {
          const data = (JSON.parse(body)).result;
          const asset_array = [];

          for (var i =0; i<data.length; i++) {
            const name = data[i].asset;
            const amount = (data[i].quantity) / 100000000;
            const newobject = {};

            switch (name) {
                case "XCP":
                    newobject.name = "Counterparty";
                    break;
                case "SJCX":
                    newobject.name = "Storjcoin X";
                    break;
                case "PEPECASH":
                    newobject.name = "pepe-cash";
                    break;
                case "GEMZ":
                    newobject.name = "gems";
                    break;
                case "FLDC":
                    newobject.name = "foldingcoin";
                    break;
                default:
                    newobject.name = assetname;
            }

            newobject.amount = amount;
            asset_array.push(newobject);
          };
          priceassets.return_USD_AMNT(asset_array, res);

        } else {
          console.log(error, response.code, response.message);
        }
    })





  }
}
