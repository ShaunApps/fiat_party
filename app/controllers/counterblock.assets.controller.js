const request = require('request');


// url = "http://public.coindaddy.io:4000/api/"
// headers = {'content-type': 'application/json'}
// auth = HTTPBasicAuth('rpc', '1234')

// request.get('http://some.server.com/').auth('username', 'password', false);
// request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ })
module.exports = {

  retrieveAssets: (req, res) => {

    const address = JSON.stringify(req.body.counterassetaddress);

    request({
      method: 'POST',
      uri: 'http://public.coindaddy.io:4100/api/',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
            "method": "get_owned_assets",
            "params": {"addresses": [address]},
            "jsonrpc": "2.0",
            "id": 0 }),

    },
      function(error, response, body) {
        if (!error) {
          console.log(response.result);
        } else {
          console.log(error, response.code, response.message);
        }
    })





  }
}
