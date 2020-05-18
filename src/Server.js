const http = require('http');
const App = require('./App');
const Controller = require('./Controller');
const MongoDB = require('./MongoDB');

class Server {
    constructor(port) {
        this.port = port;
        this.mongodb = new MongoDB();
        this.controller = new Controller(this.mongodb);
        this.app = new App(this.controller);
        this.server = http.createServer(null, this.app.getApp());
    }
    
    start = () => {
        console.log(`Server is running ${this.port}...`);
        this.server.listen(this.port);
    }
}

module.exports = Server;