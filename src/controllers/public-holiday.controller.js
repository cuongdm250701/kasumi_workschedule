const services = require("../services/public-holiday.service");

const initMasterData = async (ctx) => {
  const { year, store_code = "KSM01" } = ctx.request.body;
  return services.initMasterData({ year, store_code });
};

const list = async (ctx) => {
  return services.list(ctx);
};

const destroy = async (ctx) => {
  const { ids } = ctx.request.body;
  return services.destroy(ids);
};

const create = async (ctx) => {
  const { list_of_holiday } = ctx.request.body;
  return services.create(list_of_holiday);
};

module.exports = {
  list,
  initMasterData,
  destroy,
  create,
};
