const { app } = require("./app");
const { logger } = require("./services/logger");


require("dotenv").config();
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  logger.info(`Server listening on http://localhost:${PORT}`);
});
