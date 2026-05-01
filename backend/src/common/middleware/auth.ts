import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ApiError } from '../errors/ApiError';

interface AuthTokenPayload {
  sub: string;
  email: string;
}

export interface AuthRequest extends Request {
  user?: AuthTokenPayload;
}

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error('JWT_SECRET não definido nas variáveis de ambiente.');
}

const jwtSecret = secret;

export function authenticateJwt(req: AuthRequest, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    throw new ApiError('Cabeçalho Authorization ausente.', 401);
  }

  const [, token] = authorization.split(' ');
  if (!token) {
    throw new ApiError('Token JWT inválido.', 401);
  }

  try {
    const verified = jwt.verify(token, jwtSecret);

    if (
      typeof verified !== 'object' ||
      verified === null ||
      typeof (verified as any).email !== 'string' ||
      typeof (verified as any).sub !== 'string'
    ) {
      throw new ApiError('Token JWT inválido.', 401);
    }

    req.user = verified as AuthTokenPayload;
    next();
  } catch {
    throw new ApiError('Token JWT expirado ou inválido.', 401);
  }
}
