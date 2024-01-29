import { writeFile } from 'node:fs/promises';

const create = async () => {
  const path = 'src/fs/files/fresh.txt';
  const text = 'I am fresh and young';

  try {
    await writeFile(path, text, { flag: 'ax' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
