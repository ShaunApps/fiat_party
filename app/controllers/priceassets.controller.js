const request = require('request');
const helperpriceassets = require('./priceassets.helper.controller');
const request_then = require('then-request');



module.exports = {

    return_USD_AMNT: (assetObject) => {


        // var url = "https://api.coinmarketcap.com/v1/ticker/" + assetObject.name.toLowerCase();
        // var amount = parseFloat(assetObject.amount);
        //
        //
        //
        // request(url, function(error, response, body) {
        //     if (!error) {
        //         var data = JSON.parse(body);
        //         if (!data["error"]) {
        //             var name = data[0].name;
        //             var unit_price = data[0].price_usd;
        //             var asset_amount = assets[i].amount;
        //             some_array.push({
        //                 name: name,
        //                 unit_price: unit_price,
        //                 asset_amount: asset_amount
        //             });
        //         }
        //     }
        // })



        // request_then('GET', url, function(err, res) {
        //     if (!err) {
        //         var data = JSON.parse(res.body);
        //         if (!data["error"]) {
        //             var name = data[0].name;
        //             var unit_price = data[0].price_usd;
        //             var asset_amount = amount;
        //             return {
        //                 name: name,
        //                 unit_price: unit_price,
        //                 asset_amount: asset_amount
        //             };
        //         }
        //     }
        // })




        //
        // function workMyCollection(arr, some_array) {
        //   return Promise.all(arr.map(function(item) {
        //     var url = "https://api.coinmarketcap.com/v1/ticker/" + arr[item].name.toLowerCase();
        //       return request(url, function(error, response, body) {
        //           if (!error) {
        //               var data = JSON.parse(body);
        //               if (!data["error"]) {
        //                   var name = data[0].name;
        //                   var unit_price = data[0].price_usd;
        //                   var asset_amount = arr[i].amount;
        //                   some_array.push({
        //                       name: name,
        //                       unit_price: unit_price,
        //                       asset_amount: asset_amount
        //                   });
        //               }
        //           };
        //         });
        //       }))
        //     }
        // console.log(workMyCollection(assets, some_array));


        // assets.forEach(function(i) {
        //   var url = "https://api.coinmarketcap.com/v1/ticker/" + assets[i].name.toLowerCase();
        //   var amount = parseFloat(assets[i].amount);
        //
        //     request(url, function(error, response, body) {
        //         if (!error) {
        //             var data = JSON.parse(body);
        //             if (!data["error"]) {
        //                 var name = data[0].name;
        //                 var unit_price = data[0].price_usd;
        //                 var asset_amount = assets[i].amount;
        //                 some_array.push({
        //                     name: name,
        //                     unit_price: unit_price,
        //                     asset_amount: asset_amount
        //                 });
        //             }
        //         }
        //     })
        //     console.log(some_array);
        // })


    }

}
