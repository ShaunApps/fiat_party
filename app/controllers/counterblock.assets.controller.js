const request = require('request');


// url = "http://public.coindaddy.io:4000/api/"
// headers = {'content-type': 'application/json'}
// auth = HTTPBasicAuth('rpc', '1234')

// request.get('http://some.server.com/').auth('username', 'password', false);
// request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ })
module.exports = {

  retrieveAssets: (req, res) => {

    const address = req.body.counterassetaddress;
    console.log(address);

    request({
      method: 'POST',
      uri: 'http://public.coindaddy.io:4000/api/',
      headers: {'content-type': 'application/json-rpc'},
      auth: {'user': 'rpc', 'pass': '1234'},
      body: JSON.stringify({
            "method": "get_balances",
            "params": {
                "filters": [{"field": "address", "op": "==", "value": address}]
            },
            "jsonrpc": "2.0",
            "id": 0 }),

    },
      function(error, response, body) {
        if (!error) {
          console.log(body);
        } else {
          console.log(error, response.code, response.message);
        }
    })





  }
}
