import express  from 'express'
import logger from 'morgan'

const sleepExperienceRouter = require('./routes/index')
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', sleepExperienceRouter)

module.exports = app
