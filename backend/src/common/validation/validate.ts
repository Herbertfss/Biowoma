import { AnyZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../errors/ApiError';

export function validate(schema: AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      const message = parsed.error.errors.map((error) => `${error.path.join('.')}: ${error.message}`).join(' | ');
      throw new ApiError(message, 400);
    }

    req.body = parsed.data;
    next();
  };
}
