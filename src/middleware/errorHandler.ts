import type { Request, Response, NextFunction } from 'express'
import env from '../../env.ts'

export interface CustomError extends Error {
  status?: number
  code?: number
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err.stack)

  let status = err.status || 500
  let message = err.message || 'Internal server error'

  if (err.name === 'ValidationError') {
    status = 400
    message = 'Validation error'
  }

  if (err.name === 'UnauthorizedError') {
    status = 401
    message = 'Unauthorized'
  }

  return res.status(status).json({
    error: message,
    ...(env.APP_STAGE === 'dev' && {
      stack: err.stack,
      details: err.message,
    }),
  })
}
