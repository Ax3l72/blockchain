var request = require("request");

require('dotenv').config()

const config = {
  rpchost: process.env.RPCHOST,
  rpcport: process.env.RPCPORT,
  rpcuser: process.env.RPCUSER,
  rpcpassword: process.env.RPCPASSWORD,
};

// Headers
const headers = {
  "content-type": "text/plain;",
};

class RequestRPC {
  constructor(query) {
    this.command = query;
    this.config = config;
  }

  requestRPC() {
    let cb;
    return new Promise((resolve, reject) => {
      var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"${this.command}","params":[]}`;
      var options = {
        url: `http://${config.rpcuser}:${config.rpcpassword}@127.0.0.1:${config.rpcport}/`,
        method: "POST",
        headers: headers,
        body: dataString,
      };

      cb = (error, response, body) => {
        if (!error && response.statusCode == 200) {
          const data = JSON.parse(body);
          resolve(data);
        }
      };

      request(options, cb);
    });
  }

  GetBlockChain() {
    return new Promise(async (resolve, reject) => {
      const data = await this.requestRPC().then((data) => data);
      resolve(data);
    });
  }
}

module.exports = RequestRPC;