import { exists, writeFile }                                          from "./files"
import { generateCSVHeaderFromAlphabeticKeys, objectValuesToCSVLine } from "./csv"

const logPath = 'data'

export async function logToCSV(report) {
  const logFilePath = getCSVFilePath(report)
  let content = ''
  if (!await exists(logFilePath)) content = generateCSVHeaderFromAlphabeticKeys(report)
  content += objectValuesToCSVLine(report)
  await writeFile(content)
}

export function getCSVFilePath({ participantId, mode, version }) {
  return `${ logPath }/${ participantId }_${ mode }_${ version }.csv`
}
