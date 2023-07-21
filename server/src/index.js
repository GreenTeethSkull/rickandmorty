const http = require('http');
// const data = require('./utils/data');
const { stringify } = require('querystring');
const { getCharById } = require('./controllers/getCharById');

const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // if (req.url.includes('/rickandmorty/character/')) {

    //     let id = req.url.split('/').at(-1);
    //     let car = data.find(obj => obj.id === Number(id));

        
    //     if (car) {
    //         res.writeHead(200, { "Content-Type": "application/json" });
    //         return res.end(JSON.stringify(car));
    //     } else {
    //         res.writeHead(404, { "Content-Type": "text/plain" });
    //         return res.end('Id not Found');
    //     }

    // } else {
    //     res.writeHead(404, { "Content-Type": "text/plain" });
    //     return res.end('Route not found');
    // }

    if (req.url.includes('/rickandmorty/character/')) {
        let id = req.url.split('/').at(-1);
        getCharById(res,id);
    }

}).listen(PORT, 'localhost');