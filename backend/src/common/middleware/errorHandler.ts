import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../errors/ApiError';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }

  console.error(err);
  return res.status(500).json({ message: 'Erro interno no servidor.' });
}
