import fs from 'fs'

const fsp = fs.promises
export async function exists(path) {
  return await fsp.stat(path)
}
export async function writeFile(path, content) {
  return await fsp.writeFile(path, content)
}
export async function appendToTextFile(path, content) {
  return await fsp.appendFile(path, content)
}
export async function getFileContent(path) {
  return await fsp.readFile(path)
}

export function readFirstLine (path) {
  return new Promise(function (resolve, reject) {
    const rs = fs.createReadStream(path, {encoding: 'utf8'});
    let acc = '';
    let pos = 0;
    let index;
    rs
      .on('data', function (chunk) {
        index = chunk.indexOf('\n');
        acc += chunk;
        index !== -1 ? rs.close() : pos += chunk.length;
      })
      .on('close', function () {
        resolve(acc.slice(0, pos + index));
      })
      .on('error', function (err) {
        reject(err);
      })
  });
}
