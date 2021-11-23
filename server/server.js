const http = require('http');
const { runInNewContext } = require('vm');
const server = http.createServer(handler);

function handler(req, res) {
    console.log(req.url)
    if (req.url === '/hello') {
        res.writeHead(200, {
            'Content-Type': 'text/html' //如何讀取這個網頁
                //'Location': '/bye'//導到/bye
        })
        res.write('<h1>hello!</h1>');
    } else if (req.url === '/bye') {
        res.write('bye');
    } else {
        res.write('Invalid url')
    }
    res.end()
}
server.listen(5001)