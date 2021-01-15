import { deleteFile }     from "../../lib/files"
import { getLogFilePath } from "../../lib/sleepExperienceLogger"

export default async function deleteLogFile(req, res, next) {
  const { participantId, mode, version } = req.params
  const path = getLogFilePath({ participantId, mode, version })

  await deleteFile(path)
  res.status(200).end()
}
