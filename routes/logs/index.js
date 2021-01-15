import express    from 'express'
import writeToLog   from "./writeToLog"
import listLogFiles from "./listLogs"
import getLogFile   from "./getLogFile"
import deleteLogFile from "./deleteLogFile"

export const logPath = 'data/'

const router = express.Router()

router.post(    '/:participantId/:mode/:version', writeToLog)
router.get(     '/',                              listLogFiles)
router.get(     '/:participantId/:mode/:version', getLogFile)
router.delete(  '/:participantId/:mode/:version', deleteLogFile)

module.exports = router
