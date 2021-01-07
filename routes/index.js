import express      from 'express'
import { logToCSV } from "../lib/sleepExperienceLogger"

const router = express.Router()

router.post('/logToCSV/:participantId/:mode/:version', async function (req, res, next) {
  await logToCSV({
    ...req.body,
    ...req.params,
  })
    .then(() => res.end())
    .catch(err => res.send({
      type: 'ERROR',
      method: req.method,
      path: '/api/test',
      ...err
    }))
})

module.exports = router
