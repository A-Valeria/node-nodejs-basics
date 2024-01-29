import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const filePath = './src/cp/files/script.js';
  const childProcess = fork(filePath, args);

  childProcess.on('message', (message) => {
    process.stdout.write(`Received from child process: ${message}`);
  });

  process.stdin.on('data', (data) => {
    childProcess.send(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
