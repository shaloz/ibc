import application from "./service/app";
import config from "../config/env/local/config.json";
import createLogger from "./common/utils/loggers";
import connectCache from "./common/utils/RedisConnect";

const startServer = async () => {
  const { log: logConfig, cors: corsConfig, cache: cacheConfig, secrets }: any = config;

  const PORT = 8080;
  const logger = createLogger(logConfig);

  Promise.all([connectCache(cacheConfig.identifer, cacheConfig.connection.host, cacheConfig.connection.port, cacheConfig.connection.options, logger)])
    .then(async ([cacheProvider]) => {
      const app = await application(logger, corsConfig, cacheConfig, cacheProvider, secrets);
      app.listen(PORT, function (this: typeof app) {
        const { address, port } = this.address();
        logger.info({ message: `Process started successfully on ${address}:${port}` });
      });
    })
    .catch((error) => {
      logger.error(`APP: A fatal error occurred, service failed to start ${error}`);
    });
};

startServer();
