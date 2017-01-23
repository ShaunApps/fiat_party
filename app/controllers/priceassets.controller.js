const request = require('request');
const helperpriceassets = require('./priceassets.helper.controller');
const request_then = require('then-request');


module.exports = {

    return_USD_AMNT: (assets, res) => {


        var itemsProcessed = 0;
        var some_array = [];

        function addAllUSDAmounts(some_array) {
          var USD_SUM = 0;
          for (i in some_array) {
            USD_SUM = (i.unit_price * i.asset_amount) + USD_SUM;
          }
          return USD_SUM
        }

        function callback(some_array) {
            var total_value = addAllUSDAmounts(some_array);

            res.render('pages/assets', {assets: some_array});
          
        }

        assets.forEach((item, index, array) => {
            var url = "https://api.coinmarketcap.com/v1/ticker/" + item.name.toLowerCase();
            var amount = parseFloat(item.amount);

            request(url, function(error, response, body) {
                itemsProcessed++

                if (!error) {
                    var data = JSON.parse(body);
                    if (!data["error"]) {
                        var name = data[0].name;
                        var unit_price = data[0].price_usd;
                        var asset_amount = amount;
                        some_array.push({
                            name: name,
                            unit_price: unit_price,
                            asset_amount: asset_amount
                        });
                    }
                }
                if (itemsProcessed === array.length) {
                    callback(some_array);
                }
            })

        });

    }

}
