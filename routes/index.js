import express      from 'express'
import writeToLog   from "./logs/writeToLog"
import listLogFiles from './logs/listLogs'
import getLogFile   from './logs/getLogFile'

const router = express.Router()

router.post('/logToCSV/:participantId/:mode/:version', writeToLog)
router.get('/logs', listLogFiles)
router.get('/logs/:participantId/:mode/:version', getLogFile)
router.delete('/logs/:participantId/:mode/:version', deleteFile)

module.exports = router
