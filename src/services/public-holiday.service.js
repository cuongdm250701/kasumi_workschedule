const { public_holiday, Sequelize } = require("../models");
const { Op } = Sequelize;

const list = async (ctx) => {
  //   console.log(ctx.request);
  const publicHoliday = await public_holiday.findAll({});
  return publicHoliday;
};

module.exports = {
  list,
};