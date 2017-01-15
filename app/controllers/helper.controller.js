module.exports = {

  parseBody: (body) => {

    var assets = [];
    var body = JSON.parse(body);
    var data = body["data"];

    for (var i = 0; i < data.length; i++) {
        var assetname = data[i]["asset"];
        var assetamount = data[i]["amount"];
        var newobject = {};
        newobject.name = assetname;

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
    return assets;
  }


}
