const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
    console.log('Client connected');

    ws.on('message', message => {
        console.log('Received:', message);
        // Processar mensagens recebidas do cliente
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', error => {
        console.error('WebSocket error:', error);
    });

    // Exemplo: enviar uma mensagem para o cliente
    ws.send('Hello client');
});

console.log('WebSocket server is running on ws://localhost:8080');
