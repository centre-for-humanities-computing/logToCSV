export function generateCSVHeaderFromAlphabeticKeys(obj) {
  return Object.keys(obj)
    .sort((keyA, keyB) => keyA.localeCompare(keyB))
    .join(',') + '\n'
}
export function objectValuesToCSVLine(obj) {
  let line = Object.entries(obj)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([k, v]) => v)
    .join(',')
  return line + '\n'
}
