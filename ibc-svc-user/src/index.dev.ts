import application from "./service/app";
import DbConnection from "./common/utils/dbConnection";
import config from "../config/env/local/config.json";
import createLogger from "./common/utils/loggers";
import connectCache from "./common/utils/RedisConnect";

const startServer = async () => {
  const { db: dbConfig, log: logConfig, cors: corsConfig, cache: cacheConfig, jwt } = config;

  const PORT = 8082;
  const logger = createLogger(logConfig);

  Promise.all([
    DbConnection(dbConfig.connection, logger, "ibc_dev Db"),
    connectCache(cacheConfig.identifer, cacheConfig.connection.host, cacheConfig.connection.port, cacheConfig.connection.options, logger),
  ])
    .then(async ([db, cacheProvider]) => {
      const app = await application(logger, corsConfig, cacheConfig, cacheProvider, jwt);
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
