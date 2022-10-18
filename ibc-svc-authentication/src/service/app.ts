import express from "express";
import { middlewareCors } from "../middlewares/middleware-cors";
import { middlewareLogging } from "../middlewares/middleware-logging";
import { middlewareRequestParserJSON } from "../middlewares/middleware-request-parser";
import { createJwt } from "../common/utils/jwtUtil";

import SignUpManager from "../logic/SignUpManager";
import SignUpController from "./controller/SignUpController";
import SigUpRouter from "./routes/SignUpRouter";
import User from "../model/dbSchemas/user";

const application = (logger: any, corsConfig: any, cacheConfig: any, cacheProvider: any, jwtConfig: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      const app = express();

      //redis cache
      const userCacheStore = cacheProvider.createStore(cacheConfig.stores.users.identifier, cacheConfig.stores.users.policy);
      const phoneVerificationCacheStore = cacheProvider.createStore(
        cacheConfig.stores.phone_verification.identifier,
        cacheConfig.stores.phone_verification.policy
      );

      //logic
      const signUpManager = new SignUpManager(User, createJwt, jwtConfig, phoneVerificationCacheStore, logger, userCacheStore);

      //controllers
      const signUpController = new SignUpController(logger, signUpManager);

      //routes
      const sigUpRouter = new SigUpRouter(signUpController);

      //middlewarePassportJWT(app, jwtConfig.issuer, jwtConfig.secretOrKey, User, userCacheStore);
      middlewareCors(app, corsConfig);
      middlewareLogging(app, logger);
      middlewareRequestParserJSON(app);

      app.use("/ibeautyconnect/v1/api/authentication", sigUpRouter.Router);

      resolve(app);
    } catch (error) {
      reject("error connecting to server");
      logger.error(`APP: A fatal error occurred, application failed to start ${error}`);
    }
  });
};

export default application;
