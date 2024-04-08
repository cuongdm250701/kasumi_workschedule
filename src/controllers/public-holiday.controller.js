const services = require("../services/public-holiday.service");

const initMasterData = async (ctx) => {
  return services.initMasterData(ctx);
};

const list = async (ctx) => {
  return services.list(ctx);
};

module.exports = {
  list,
  initMasterData,
};
