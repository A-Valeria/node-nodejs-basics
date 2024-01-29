import { rename as renameFile } from 'node:fs/promises';

const rename = async () => {
  const oldPath = 'src/fs/files/wrongFilename.txt';
  const newPath = 'src/fs/files/properFilename.md';

  try {
    await renameFile(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
