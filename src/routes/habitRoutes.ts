import { Router } from 'express'
import { validateBody, validateParams } from '../middleware/validation.ts'
import { z } from 'zod'
import { authenticateToken } from '../middleware/auth.ts'
import {
  createHabit,
  getUserHabit,
  updateHabit,
} from '../controllers/habitController.ts'

const createHabitSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  frequency: z.string(),
  targetCount: z.number(),
  tagIds: z.array(z.string()).optional(),
})

const updateParamsSchema = z.object({
  id: z.string().min(1, 'Id is required'),
})

const updateHabitSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  frequency: z.string().optional(),
  targetCount: z.number().optional(),
  tagIds: z.array(z.string()).optional(),
})

const completeParamsSchema = z.object({
  id: z.string().max(3),
})

const router = Router()

router.use(authenticateToken)

router.get('/', getUserHabit)

router.get('/:id', (req, res) => {
  res.json({ message: 'get on habbit' })
})

router.post('/', validateBody(createHabitSchema), createHabit)

router.patch(
  '/:id',
  validateParams(updateParamsSchema),
  validateBody(updateHabitSchema),
  updateHabit
)

router.post(
  '/:id/complete',
  validateParams(completeParamsSchema),
  validateBody(createHabitSchema),
  (req, res) => {
    res.json({ message: 'created habit' }).status(201)
  }
)

router.delete('/:id', (req, res) => {
  res.json({ message: 'deleted habit' })
})

export default router
