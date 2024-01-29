import { readdir } from 'node:fs/promises';

const list = async () => {
  const path = 'src/fs/files';

  try {
    const files = await readdir(path);

    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
