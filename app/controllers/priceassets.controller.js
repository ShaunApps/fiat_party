const request = require('request');
// const alsoHelper = require('./also.helper.controller');
const Foo = require('./also.helper.controller');
const Promise = require('promise');
var async = require("async");

module.exports = {

    get_USD_AMNT: (assets) => {



      var dummyData = [
        { name: 'LTBcoin',
          unit_price: 0.0000200385,
          asset_amount: 1209.32588510 },
        { name: 'FoldingCoin',
          unit_price: 0.000937106,
          asset_amount: 1.00000000 },
        { name: 'Bitcrystals',
          unit_price: 0.103968,
          asset_amount: 913.14157985 },
        { name: 'Counterparty',
          unit_price: 1.96375,
          asset_amount: 250.00000000 },
        { name: 'RarePepe',
          unit_price: 0.0000200385,
          asset_amount: 1209.32588510 }
        ];

        console.log(dummyData[0]['unit_price'] * dummyData[0]['asset_amount']);








        // for (let i = 0; i < assets.length; i++) {
        //
        //     var url = "https://api.coinmarketcap.com/v1/ticker/" + assets[i].name.toLowerCase();
        //     var amount = parseFloat(assets[i].amount);
        //
        //     request(url, function(error, response, body) {
        //         if (!error) {
        //             var data = JSON.parse(body);
        //             if (!data["error"]) {
        //                 var name = data[0].name;
        //                 var unit_price = data[0].price_usd;
        //                 var asset_amount = assets[i].amount;
        //                 console.log({
        //                     name: name,
        //                     unit_price: unit_price,
        //                     asset_amount: asset_amount
        //                 });
        //             }
        //         }
        //
        //     })
        // }
    }

}
