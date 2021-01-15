import { exists, generateCSVHeaderFromAlphabeticKeys, objectValuesToCSVLine, writeFile } from "./files"
import { logPath }                                                                       from '../routes/logs'

export async function logToCSV(report) {
  const logFilePath = getLogFilePath(report)
  let content = ''
  if (!await exists(logFilePath)) content = generateCSVHeaderFromAlphabeticKeys(report)
  content += objectValuesToCSVLine(report)
  await writeFile(content)
}

export function getLogFilePath({ participantId, mode, version }) {
  return `${ logPath }/${ participantId }_${ mode }_${ version }.csv`
}
