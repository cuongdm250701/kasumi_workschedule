const services = require("../services/public-holiday.service");

const list = async (ctx) => {
  return services.list(ctx);
};

module.exports = {
  list,
};
