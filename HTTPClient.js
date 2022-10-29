import * as React from 'react';

export var ws = new WebSocket('ws://192.168.86.28:25565');;
export var summary, transcription, emotions;

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function sendToClient(msg) {
    try {
        ws.send('START');
        console.log('Sent START token to server');

        var chunkSize = 1000;
        var chunks = [];
        for (var i = 0; i < msg.length; i += chunkSize) {
            chunks.push(msg.substring(i, i + chunkSize));
        }

        for (var i = 0; i < chunks.length; i++) {
            ws.send(chunks[i]);
            setTimeout(() => {}, 1000);
        }

        ws.send('END');
        console.log('Sent END token to server');
    }
    catch {
        console.error('Error sending message to server: ', error);
    }
}

export function formatEmotionData() {
    
    console.log(data);
    return data;
}