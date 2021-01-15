import { getFileContent } from "../../lib/files"
import { getLogFilePath } from "../../lib/sleepExperienceLogger"

export default async function (req, res) {
  const { participantId, mode, version } = req.params
  const path = getLogFilePath({ participantId, mode, version })
  const fileContent = getFileContent(path)

  res.send(fileContent)
}
