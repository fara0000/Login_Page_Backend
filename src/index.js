const Server = require('./Server');

function init() {
    const server = new Server(3000);
    server.start();
}

init();