const request = require('request');
const rp = require('request-promise');
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
                    var url;

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
                        priceassets.return_USD_AMNT(newobject);

                        url = "https://api.coinmarketcap.com/v1/ticker/" + newobject.name.toLowerCase();
                        var options = {
                            uri: url
                        }
                        rp(options)
                            .then(function(body) {
                                var data1 = JSON.parse(body);
                                console.log(data1);
                                if (!data1["error"]) {
                                    newobject.unit_price = data1[0].price_usd;
                                }
                                assets.push(newobject);
                                console.log(assets);
                            })
                            .catch(function (err) {
                              // console.log("request failed");
                            });

                        //  assets.push(USD_object);
                        // console.log(USD_object);

                    }
                }
            })



        // res.render('pages/assets', {assets: assets});


    }

}
