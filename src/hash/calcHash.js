import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { stdout } from 'node:process';

const calculateHash = async () => {
  const path = 'src/hash/files/fileToCalculateHashFor.txt';
  const hash = createHash('sha256');
  const input = createReadStream(path);
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
