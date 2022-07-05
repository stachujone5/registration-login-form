import express from 'express'

import { router } from './routes/route'

const app = express()

app.use('/', (req, res) => {
  router(req)
  res.send('Hey')
})

app.listen(5000, () => {
  console.log('started')
})
