import express from 'express'

import { createUser } from '../controllers/authControllers'

export const router = express.Router()

router.route('/auth').post(createUser)
