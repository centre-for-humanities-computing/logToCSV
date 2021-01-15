import {
  appendToTextFile,
  exists,
  generateCSVHeaderFromAlphabeticKeys,
  objectValuesToCSVLine,
  writeFile
}                  from "./files"
import { logPath } from '../routes/logs'

export async function logToCSV(fileDetails, payload) {
  const logFilePath = getLogFilePath(fileDetails)
  let content = objectValuesToCSVLine(payload)
  if (!await exists(logFilePath)) {
    content = generateCSVHeaderFromAlphabeticKeys(payload) + content
    return await writeFile(logFilePath, content)
  } else {
    return await appendToTextFile(logFilePath, content)
  }
}

export function getLogFilePath({ participantId, mode, version }) {
  let path = logPath
  if (!path.endsWith('/')) path += '/'
  return `${ path }${ participantId }_${ mode }_${ version }.csv`
}
