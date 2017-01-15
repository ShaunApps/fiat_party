const request = require('request');


function Foo(assets) {
  this.assets = assets;
}


Foo.prototype.loop_method = function(onefunction, secondfunction) {
  onefunction()


}


Foo.prototype.onefunction = function() {

}
Foo.prototype.request_call = function(url, asset) {

  request(url, function(error, response, body) {
        if (!error) {
            var data = JSON.parse(body);
            if (!data["error"]) {

                testobject.push_assets({
                    name: data[0].name,
                    unit_price: data[0].price_usd,
                    asset_amount: assets[i].amount
                });
            }

        }
    })

}

// Foo.prototype.loop_method = function(callback) {
//   var assets = this.assets;
//
//   for (let i = 0; i < assets.length; i++) {
//
//       var url = "https://api.coinmarketcap.com/v1/ticker/" + assets[i].name.toLowerCase();
//       var amount = parseFloat(assets[i].amount);
//
//       request(url, function(error, response, body) {
//           if (!error) {
//               var data = JSON.parse(body);
//               if (!data["error"]) {
//                   assets_with_price.push({
//                       name: data[0].name,
//                       unit_price: data[0].price_usd,
//                       asset_amount: assets[i].amount
//                   });
//               }
//
//           }
//       })
//
//   }
//   callback(assets_with_price);
//
// }

// Foo.prototype.get_USD_assets = function() {
//
//
//
//   for (let i = 0; i < assets.length; i++) {
//
//       var url = "https://api.coinmarketcap.com/v1/ticker/" + assets[i].name.toLowerCase();
//       var amount = parseFloat(assets[i].amount);
//
//       request(url, function(error, response, body) {
//           if (!error) {
//               var data = JSON.parse(body);
//               if (!data["error"]) {
//                   this.assets_with_price.push({
//                       name: data[0].name,
//                       unit_price: data[0].price_usd,
//                       asset_amount: assets[i].amount
//                   });
//               }
//
//           }
//       })
//
//   }
//
// }


Foo.prototype.return_assets = function(thing) {
  return thing;
}






module.exports = Foo;
