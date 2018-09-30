import * as fs from 'fs';

const FILE_NAME = 'last_clock_format.txt';

export function saveData(data) {
  fs.writeFileSync(FILE_NAME, data, 'utf-8');
}

export function loadData() {
  // file exist check.
  try {
    const stats = fs.statSync(FILE_NAME);
    console.log('Save data is exist.');
    console.log(`File size: ${stats.size} bytes`);
    console.log(`Last modified: ${stats.mtime}`);
    return fs.readFileSync(FILE_NAME, 'utf-8');
  } catch (e) {
    console.log('Save data is nothing.');
    return undefined;
  }
}
