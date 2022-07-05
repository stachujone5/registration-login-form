import { User } from '../models/User'

import type { Request, Response } from 'express'

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ user })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
