import { jwtVerify, SignJWT } from 'jose'
import { createSecretKey } from 'crypto'
import { env } from '../../env.ts'

export interface JwtPayload {
  id: string
  email: string
  username: string
  [key: string]: any
}

export const generateToken = (payload: JwtPayload): Promise<string> => {
  const secret = env.JWT_SECRET
  const secretKey = createSecretKey(secret, 'utf-8')

  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(env.JWT_EXPIRES_IN || '1d')
    .sign(secretKey)
}

export const verifyToken = async (token: string): Promise<JwtPayload> => {
  const secretKey = createSecretKey(env.JWT_SECRET, 'utf-8')
  const { payload } = await jwtVerify(token, secretKey)

  return {
    id: payload.id as string,
    email: payload.id as string,
    username: payload.id as string,
  }
}
