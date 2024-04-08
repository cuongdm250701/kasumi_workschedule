const { public_holiday, Sequelize } = require("../models");
const { getListPublicHoliday } = require("../helpers/get-public-holiday");
const { Op } = Sequelize;

const initMasterData = async (ctx) => {
  const listPublicHoliday = await getListPublicHoliday("JP", 2024);
  // expect:
  /**
    data: [
      {
        id: 1,
        month: 12,
        date: 6,
        year: 2024
        event_details: "",
        store_code: ""
      }
   ]
   */
  return listPublicHoliday;
};

const list = async (ctx) => {
  const publicHoliday = await public_holiday.findAll({});
  return publicHoliday;
};

module.exports = {
  list,
  initMasterData,
};
