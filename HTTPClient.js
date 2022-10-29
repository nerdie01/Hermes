import * as React from 'react';

export var ws = new WebSocket('ws://192.168.86.28:25565');
export var summary, transcription, emotions;

export function sendToClient(msg) {
    try {
        //send a start token to the server
        ws.send('START');
        //divide msg into 1000 char chunks and send
        var chunkSize = 10000;
        var chunks = [];
        for (var i = 0; i < msg.length; i += chunkSize) {
            chunks.push(msg.substring(i, i + chunkSize));
        }
        for (var i = 0; i < chunks.length; i++) {
            ws.send(chunks[i]);
        }
        ws.send('END');
    }
    catch (err) {
        console.log(err);
    }
}

export function formatEmotionData() {
    
    console.log(data);
    return data;
}