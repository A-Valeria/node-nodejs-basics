import { cp } from 'node:fs/promises';

const copy = async () => {
  const path = 'src/fs/files';
  const dest = 'src/fs/files_copy';

  try {
    await cp(path, dest, { recursive: true, errorOnExist: true, force: false });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
