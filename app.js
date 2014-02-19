var WebSocket = require('ws');

var ws = new WebSocket('ws://kaeawc-ws-test.herokuapp.com');

ws.on('open', function() {
  ws.send('Hello!');
});

ws.on('message', function(data, flags) {
  console.log(data);
});

