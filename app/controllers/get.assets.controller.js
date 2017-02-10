const request = require('request');
const WAValidator = require('wallet-address-validator');
const priceassets = require('./priceassets.controller');


module.exports = {


    presentAssets: (req, res) => {


        var address = req.body.assetaddress;
        var url = "https://counterpartychain.io/api/balances/" + address;

        request({
                method: 'GET',
                url: url,
            },
            function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    var assets = [];
                    var body = JSON.parse(body);
                    var data = body["data"];
                    var some_arry = [];

                    for (var i = 0; i < data.length; i++) {
                        var assetname = data[i]["asset"];
                        var assetamount = data[i]["amount"];
                        var newobject = {};


                        // handle case where asset name != coinmarketcap name
                        switch (assetname) {
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

                        newobject.amount = assetamount;
                        assets.push(newobject);


                    }
                    priceassets.return_USD_AMNT(assets, res);

                }
            })

    }


}
