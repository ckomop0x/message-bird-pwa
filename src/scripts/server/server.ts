import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client')));
app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

const server = http.createServer(app);
const wss = new WebSocket.Server({server});
const urlencodedParser = bodyParser.urlencoded({extended: false});

wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (message: string) => {
        console.log('received: %s', message);
    });

    // send immediatly a feedback to the incoming connection
    ws.send('Hi there, I am a WebSocket server');
});

app.post('/', urlencodedParser, (request, response) => {
    if (!request.body) {
        return response.sendStatus(400);
    }
    wss.clients.forEach((client) => {
        client.send(`new message`);
    });
});

// start our server
server.listen(process.env.PORT || 8999, () => {
    // @ts-ignore
    console.log(`Server started on port ${server.address().port} :)`);
});