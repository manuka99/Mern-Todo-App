import { Request, Response, NextFunction } from "express";
import { sendError } from "../common/util";
import mongoose from "mongoose";

export const handleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(`Error Handler: ${err.message}`);
  if (err instanceof mongoose.Error) {
    sendError(res, err, 422);
  } else {
    sendError(res, { message: err.message, err }, 400);
  }
};
