import { promises as fs }   from 'fs'
import path from "path"

export async function exists(path) {
  let exists = true
  try {
    await fs.stat(path)
  } catch (err) {
    exists = false
  }
  return exists
}
export async function writeFile(path, string) {
  const content = new Uint8Array(Buffer.from(string, "utf8"))
  return await fs.writeFile(path, content)
}
export async function appendToTextFile(path, content) {
  return await fs.appendFile(path, content)
}
export async function getFileContent(path) {
  return await fs.readFile(path)
}
export async function deleteFile(path) {
  return await fs.unlink(path)
}

export async function listFilesInPath(dirPath = '')  {
  if (!dirPath.endsWith('/')) dirPath = dirPath + '/'
  dirPath = path.resolve(dirPath)

  const entries = await fs.readdir(dirPath, { withFileTypes: true })

  const files = entries
    .filter(file => !file.isDirectory())
    .map(file => getFileInfo(dirPath, file))

  const directories = entries.filter(entry => entry.isDirectory())

  for (const directory of directories) {
    const nestedDirPath = path.join(dirPath, directory.name)
    const nestedFiles = await listFilesInPath(nestedDirPath)
    files.push(...nestedFiles)
  }

  return files
}
function getFileInfo(dirPath, file) {
  return {
    name: file.name,
    path: path.join(dirPath, file.name)
  }
}


