import { listFilesInPath } from "../../lib/files"
import { logPath }         from "./index"

const blacklist = [
  '.DS_Store'
]

export default async function listLogFiles(req, res, next) {
  let files = await listFilesInPath(logPath)
  files = files
    .filter(file => !blacklist.includes(file.name))

  files.forEach(file => file.url = logPath + file.name)

  res.send(files)
}
