const request = require('request');

// this takes the assets from get.assets controller and compares against coinmarketcap
module.exports = {

    return_USD_AMNT: (assets, res) => {


        var itemsProcessed = 0;
        var some_array = [];
        var USD_SUM = 0;

        function callback(some_array) {
            let USD_TOTAL = Math.round(USD_SUM * 100) / 100
            res.render('pages/assets', {
                assets: some_array,
                USD_TOTAL: USD_TOTAL
            });


        }

        assets.forEach((item, index, array) => {
            var url = "https://api.coinmarketcap.com/v1/ticker/" + item.name.toLowerCase();
            var amount = parseFloat(item.amount);

            request(url, function(error, response, body) {
                itemsProcessed++

                if (!error) {
                    var data = JSON.parse(body);
                    if (!data["error"]) {
                      USD_SUM = (data[0].price_usd * amount) + USD_SUM
                      some_array.push({
                          name: data[0].name,
                          unit_price: data[0].price_usd,
                          asset_amount: amount
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
