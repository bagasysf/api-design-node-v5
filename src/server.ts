import express from 'express'
import authRoutes from './routes/authRoutes.ts'
import userRoutes from './routes/userRoutes.ts'
import habitRoutes from './routes/habitRoutes.ts'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { isTestEnv } from '../env.ts'

// Create Express application
const app = express()
app.use(cors())
app.use(helmet())
app.use(
  morgan('dev', {
    skip: () => isTestEnv(),
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check endpoint - always good to have!
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Habit Tracker API',
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/habits', habitRoutes)

// Export the app for use in other modules (like tests)
export { app }

// Default export for convenience
export default app
