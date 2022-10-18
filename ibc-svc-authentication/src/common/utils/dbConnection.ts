import mongoose from "mongoose";
import { LOG_LEVEL_ERROR, LOG_LEVEL_INFO } from "../constants/log-levels";

export default async (connectionString: string, logger: any, db: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      await mongoose.connect(connectionString, {
        socketTimeoutMS: 0,
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      logger.log({ level: LOG_LEVEL_INFO, message: "Database connected successfully", label: db });
      resolve();
    } catch (error) {
      console.log(error);

      logger.log({ level: LOG_LEVEL_ERROR, message: "Database connection failed", label: db });
      reject(new Error("Database connection failed"));
    }
  });
};
