// nvm node version managment
// revert git

const http = require('http');
const fs = require('fs')

http.createServer(function(req, res) {
    // res.write('response from server');
    const file = fs.readFileSync('index.html', { encoding: "utf-8" });
    res.write(file);
}).listen(4000, function() {
    console.log("the server is running on port 4000");
    // 127.0.0.1 local ip
});