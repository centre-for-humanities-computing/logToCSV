const logDir = ''
const blacklist = [
  '.DS_Store'
]

export default async function listLogFiles(req, res, next) {
  let files = await listFilesInPath(logDir)
  files = files
    .filter(file => !blacklist.includes(file.name))

  files.forEach(file => file.url = logDir + file.name)

  res.send(files)
}
