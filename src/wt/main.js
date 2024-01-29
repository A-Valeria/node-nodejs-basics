import { cpus } from 'os';
import { Worker } from 'worker_threads';

const countFibonacci = async (num) => {
  const fileName = './src/wt/worker.js';

  return new Promise((resolve) => {
    const worker = new Worker(fileName, {
      workerData: num,
    });

    worker.on('message', (result) => {
      resolve({
        status: 'resolved',
        data: result,
      });
    });
    worker.on('error', () => {
      resolve({
        status: 'error',
        data: null,
      });
    });
  });
};

const performCalculations = async () => {
  const coresNumber = cpus().length;

  const result = await Promise.all(
    Array.from({ length: coresNumber }, (_, index) => index + 10).map((num) =>
      countFibonacci(num)
    )
  );

  console.log(result);
};

await performCalculations();
