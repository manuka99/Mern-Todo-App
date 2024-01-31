import { Response } from "express";

type ErrorCode = 400 | 422 | 500;

const sendSuccess = (res: Response, data: any): void => {
  sendResponse(res, 200, true, data);
};

const sendError = (
  res: Response,
  data: any,
  errorCode: ErrorCode = 400
): void => {
  sendResponse(res, errorCode, false, data);
};

const sendResponse = (
  res: Response,
  statusCode: number,
  success: boolean,
  data: any
): void => {
  res.status(statusCode).json({ success, data });
};

export { sendSuccess, sendError };
