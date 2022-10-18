import { NextFunction, Request, Response } from "express";
import { validateBySchema } from "../../../common/constants/validators";
import JSONSchemaVerificationAPIPayload from "../../../model/apiSchemas/verification_payload.json";
import { HttpNotFound } from "../../../common/constants/responses";

export default (request: Request, response: Response, next: NextFunction) => {
  const { isValid, errors } = validateBySchema(JSONSchemaVerificationAPIPayload, {
    ...request.body,
  });
  try {
    if (isValid) {
      next();
    } else {
      throw new Error("error");
    }
  } catch (err) {
    if (err instanceof Error) {
      HttpNotFound(response, errors);
    }
  }
};
