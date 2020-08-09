import { NextFunction, Request, Response } from 'express';

import ErrorResponse from '../utils/errorResponse';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  let error = { ...err };
  error.message = err.message;

  console.log(err.stack);

  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Server Error' });
};

export default errorHandler;
