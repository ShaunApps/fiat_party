const request = require('request');


module.exports = {


    get_USD_AMNT: (assets, some_array) => {



        for (let i = 0; i < assets.length; i++) {

            var url = "https://api.coinmarketcap.com/v1/ticker/" + assets[i].name.toLowerCase();
            var amount = parseFloat(assets[i].amount);

            request(url, function(error, response, body) {
                if (!error) {
                    var data = JSON.parse(body);
                    if (!data["error"]) {
                        var name = data[0].name;
                        var unit_price = data[0].price_usd;
                        var asset_amount = assets[i].amount;
                        some_array.push({
                            name: name,
                            unit_price: unit_price,
                            asset_amount: asset_amount
                        });
                    }
                }

            })
        }

        return some_array;



    }





}
