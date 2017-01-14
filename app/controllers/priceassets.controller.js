
const request = require('request');


module.exports = {

  get_USD_AMNT: (assets) => {

  var assets_with_price =[];

   for (let i =0; i < assets.length; i++) {

     var url = "https://api.coinmarketcap.com/v1/ticker/" + assets[i].name.toLowerCase();
     var amount = parseFloat(assets[i].amount);


     request(url, function(error, response, body) {
       if (!error) {
         var data = JSON.parse(body);
         if(!data["error"]){
           console.log(data[0].name + ": " + data[0].price_usd + " * " + amount + " = " + ( amount * (parseFloat(data[0].price_usd)) ) );
          //  console.log(data[0].name + ": " + ( amount * (parseFloat(data[0].price_usd)) ));
         }
        //  console.log(data);
       }
     })
      // assets_with_price.push(asset_name_with_price);
   }

 }




}
