const request = require('request');


module.exports = {



    get_USD_AMNT: (assets) => {

        var assets_with_price = [];




        for (let i = 0; i < assets.length; i++) {

            var url = "https://api.coinmarketcap.com/v1/ticker/" + assets[i].name.toLowerCase();
            var amount = parseFloat(assets[i].amount);



            request(url, function(error, response, body) {
                if (!error) {
                    var data = JSON.parse(body);
                    if (!data["error"]) {
                        //  console.log(data[0].name + ": " + data[0].price_usd + " * " + amount + " = " + ( amount * (parseFloat(data[0].price_usd)) ) );
                        //  console.log(data[0].name + ": " + ( amount * (parseFloat(data[0].price_usd)) ));
                        // console.log(data[0].price_usd, data[0].name, assets[i].amount);
                        // console.log(data[0].price_usd * assets[i].amount);
                        assets_with_price.push({
                            name: data[0].name,
                            unit_price: data[0].price_usd,
                            asset_amount: assets[i].amount
                        });
                    }

                }
            })
        }

        // return assets_with_price;
    }

}
