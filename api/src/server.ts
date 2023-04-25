import app from "./app";
import config from "./utils/config";
import logger from "./utils/logger";

app.listen(config.PORT, () => {
  logger.info(
    `  App is running at http://localhost: ${config.PORT} in ${app.get(
      "env"
    )} mode`
  );
  logger.info("  Press CTRL-C to stop\n");
});
