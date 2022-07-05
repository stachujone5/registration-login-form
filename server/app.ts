import dotenv from 'dotenv'
import express from 'express'

import { connectDB } from './src/db/connect'
import { router } from './src/routes/authRoutes'

dotenv.config()
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hey')
})

app.use('/api', router)

const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`))
  } catch (error) {
    console.log(error)
  }
}

void start()
