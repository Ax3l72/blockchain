// Import Module
var request = require("request");

// Headers
const headers = {
    "content-type": "text/plain;"
};

module.exports = {
    info: (req, res) => {
        var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getinfo","params":[]}`;
        var options = {
            url: `http://${process.env.RPCUSER}:${process.env.RPCPASSWORD}@127.0.0.1:${process.env.RPCPORT}/`,
            method: "POST",
            headers: headers,
            body: dataString
        };

        cb = (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                res.render('home',{data:data.result});
            }
        };

        request(options, cb);
    }
} 