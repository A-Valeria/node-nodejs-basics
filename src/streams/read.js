import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
  const path = 'src/streams/files/fileToRead.txt';
  const readStream = createReadStream(path);

  readStream.pipe(stdout);
};

await read();
