import express       from 'express'
import logRouter     from './logs'

const router = express.Router()

router.use('/logs', logRouter)

module.exports = router
