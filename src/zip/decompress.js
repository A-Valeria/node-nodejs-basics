import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
  const gzip = createGunzip();
  const source = createReadStream('src/zip/files/archive.gz');
  const destination = createWriteStream('src/zip/files/fileToCompress.txt');

  source.pipe(gzip).pipe(destination);
};

await decompress();
