import DailyRotateFileTransport from "winston-daily-rotate-file";
import winston from "winston";
import { LOG_LEVEL_DEBUG, LOG_LEVEL_INFO } from "../../constants/log-levels";

const {
  createLogger: createWinstonLogger,
  transports: { Console },
  format: { combine, timestamp, printf },
} = winston;

export default (logConfig: any, DEFAULT_LABEL = "Application") => {
  const logger = createWinstonLogger({});
  const applicationLogFormat = printf((info): any => {
    if (/error/.test(info.level)) {
      return `${info.timestamp} - ${info.level}: ${info.label || DEFAULT_LABEL}: ${info.message}`;
    } else {
      return `${info.timestamp} - ${info.level}: ${info.label || DEFAULT_LABEL}: ${info.message}`;
    }
  });

  if (logConfig.console && logConfig.console.enabled === true) {
    logger.add(
      new Console({
        level: logConfig.console.level || LOG_LEVEL_DEBUG,
        format: combine(timestamp(), applicationLogFormat),
      })
    );
  }

  if (logConfig.file && logConfig.file.enabled === true) {
    logger.add(
      new DailyRotateFileTransport({
        level: logConfig.file.level || LOG_LEVEL_INFO,
        filename: logConfig.file.filename,
        datePattern: logConfig.file.datePattern || "YYYY-MM-DD",
        format: combine(timestamp(), applicationLogFormat),
      })
    );
  }
  logger.stream = function (label): any {
    return {
      write(message: any) {
        logger.info({ label, message: message.trim() });
      },
    };
  };

  return logger
};
