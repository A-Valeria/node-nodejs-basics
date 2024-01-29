import { createWriteStream } from 'node:fs';
import { stdin, stdout } from 'node:process';

const write = async () => {
  const path = 'src/streams/files/fileToWrite.txt';
  const writeStream = createWriteStream(path);

  stdout.write('Write Here: ')
  stdin.pipe(writeStream);
};

await write();
