import {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_CREATED,
  HTTP_STATUS_INTERNAL_SERVER_ERROR,
  HTTP_STATUS_NO_CONTENT,
  HTTP_STATUS_NOTFOUND,
  HTTP_STATUS_OK,
} from "./http-status-codes";
import { Response } from "express";

/**
 * @param {class}  HttpBadRequest definition
 */
export const HttpBadRequest = (response: any, error: any) => {
  HttpResponse(response, error, HTTP_STATUS_BAD_REQUEST);
};

/**
 * @param {class}  HttpCreated definition
 */
export const HttpCreated = (response: any, data: any) => {
  HttpResponse(response, data, HTTP_STATUS_CREATED);
};

/**
 * @param {class}  HttpInternalServerError definition
 */
export const HttpInternalServerError = (response: Response, data: any) => {
  HttpResponse(response, data, HTTP_STATUS_INTERNAL_SERVER_ERROR);
};

/**
 * @param {class}  HttpNoContent definition
 */
export const HttpNoContent = (response: Response, data: any) => {
  response.status(HTTP_STATUS_NO_CONTENT).end();
};

/**
 * @param {class}  HttpOk definition
 */
export const HttpOk = (response: Response, data: any) => {
  HttpResponse(response, data, HTTP_STATUS_OK);
};

/**
 * @param {class}  HttpNotFound definition
 */
export const HttpNotFound = (response: Response, data: any) => {
  HttpResponse(response, data, HTTP_STATUS_NOTFOUND);
};

/**
 * @param {class}  HttpResponse definition
 */
export const HttpResponse = (response: Response, data: any, statusCode = HTTP_STATUS_OK) => {
  response.status(statusCode).json(data);
};
