import express from "express";
import { middlewareCors } from "../middlewares/middleware-cors";
import { middlewareLogging } from "../middlewares/middleware-logging";
import { middlewareRequestParserJSON } from "../middlewares/middleware-request-parser";
import { middlewarePassportJWT } from "../middlewares/middleware-passport-jwt";
import { createJwt } from "../common/utils/jwtUtil";

import GetUserDetailsManager from "../logic/GetUserDetailsManager";
import GetUserDetailsController from "./controller/GetUserDetailsController";
import GetUserDetailsRouter from "./routes/GetUserDetailsRouter";
import User from "../model/dbSchemas/user";

const application = (logger: any, corsConfig: any, cacheConfig: any, cacheProvider: any, jwtConfig: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      const app = express();

      //redis cache
      const userCacheStore = cacheProvider.createStore(cacheConfig.stores.users.identifier, cacheConfig.stores.users.policy);

      //logic
      const getUserDetailsManager = new GetUserDetailsManager(User, createJwt, jwtConfig, logger);

      //controllers
      const getUserDetailsController = new GetUserDetailsController(logger, getUserDetailsManager);

      //routes
      const getUserDetailsRouter = new GetUserDetailsRouter(getUserDetailsController);

      middlewarePassportJWT(app, jwtConfig.issuer, jwtConfig.secretOrKey, User, userCacheStore);
      middlewareCors(app, corsConfig);
      middlewareLogging(app, logger);
      middlewareRequestParserJSON(app);

      app.use("/ibeautyconnect/v1/api/user", getUserDetailsRouter.Router);

      resolve(app);
    } catch (error) {
      reject("error connecting to server");
      logger.error(`APP: A fatal error occurred, application failed to start ${error}`);
    }
  });
};

export default application;
