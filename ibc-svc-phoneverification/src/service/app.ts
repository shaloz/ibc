import express from "express";
import { middlewareCors } from "../middlewares/middleware-cors";
import { middlewareLogging } from "../middlewares/middleware-logging";
import { middlewareRequestParserJSON } from "../middlewares/middleware-request-parser";
import Twilio from "twilio";

import PhoneVerificationManager from "../logic/PhoneVerificationManager";
import PhoneVerificationController from "./controller/PhoneVerificationController";
import PhoneVerificationRouter from "./routes/PhoneVerificationRouter";
import Country from '../../src/common/constants/country'


const application = (logger: any, corsConfig: any, cacheConfig: any, cacheProvider: any, secrets: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      const app = express();

      //redis cache
      const phoneVerificationCacheStore = cacheProvider.createStore(cacheConfig.stores.phone_verification.identifier, cacheConfig.stores.phone_verification.policy);

      //twilio service 
      const twilio = Twilio(secrets.twilio.TWILLIO_ACCOUNT_SSID, secrets.twilio.TWILLIO_ACCOUNT_AUTH_TOKEN)

      //logic
      const phoneVerificationManager = new PhoneVerificationManager(phoneVerificationCacheStore, twilio, logger, Country);

      //controllers
      const phoneVerificationController = new PhoneVerificationController(logger, phoneVerificationManager);

      //routes
      const phoneVerificationRouter = new PhoneVerificationRouter(phoneVerificationController);

      middlewareCors(app, corsConfig);
      middlewareLogging(app, logger);
      middlewareRequestParserJSON(app);

      app.use("/ibeautyconnect/v1/api/phone_verification", phoneVerificationRouter.Router);

      resolve(app);
    } catch (error) {
      reject("error connecting to server");
      logger.error(`APP: A fatal error occurred, application failed to start ${error}`);
    }
  });
};

export default application;
