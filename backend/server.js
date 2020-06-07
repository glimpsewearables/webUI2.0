const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });
const wsTwo = new WebSocket.Server({ port: 4030 });
const wsThree = new WebSocket.Server({ port: 3040 });
const wsFour = new WebSocket.Server({ port: 4050 });
const wsFive = new WebSocket.Server({ port: 3050 });
const wsSix = new WebSocket.Server({ port: 4040 });

const { spawn } = require('child_process')

const logOutput = (name) => (data) => console.log(`[${name}] ${data.toString()}`)


function run(words) {
  const process = spawn('python', ['/home/pi/webUI2.0/test.py', words]);

  process.stdout.on(
    'data',
    logOutput('stdout')
  );

  process.stderr.on(
    'data',
    logOutput('stderr')
  );

}

function startGlimpse() {
  const process = spawn('python', ['/home/pi/glimpse-cam/GlimpseCam.py', '--console-log']);

  process.stdout.on(
    'data',
    logOutput('stdout')
  );

  process.stderr.on(
    'data',
    logOutput('stderr')
  );
}

function takeStill() {
  const process = spawn('python', ['/home/pi/glimpse-cam/GlimpseCam.py', '--still']);

  process.stdout.on(
    'data',
    logOutput('stdout')
  );

  process.stderr.on(
    'data',
    logOutput('stderr')
  );
}

function startRecord() {
  const process = spawn('python', ['/home/pi/glimpse-cam/GlimpseCam.py', --record-reg]);

  process.stdout.on(
    'data',
    logOutput('stdout')
  );

  process.stderr.on(
    'data',
    logOutput('stderr')
  );
}

function startUpload() {
  const process = spawn('python', ['/home/pi/glimpse-cam/uploadFile.py', '--console-log']);

  process.stdout.on(
    'data',
    logOutput('stdout')
  );

  process.stderr.on(
    'data',
    logOutput('stderr')
  );
}

function sendEmail() {
  const process = spawn('python', ['/home/pi/glimpse-cam/sendEmail.py']);

  process.stdout.on(
    'data',
    logOutput('stdout')
  );

  process.stderr.on(
    'data',
    logOutput('stderr')
  );
}

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    console.log(data);
    run(data);
      wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });

});

wsTwo.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    console.log(data);
    startGlimpse();

  });
});

wsThree.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    console.log(data);
    takeStill();

  });

});

wsFour.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    console.log(data);
    startRecord();

  });

});

wsFive.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    console.log(data);
    startUpload();

  });

});

wsSix.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    console.log(data);
    sendEmail();

  });

});

