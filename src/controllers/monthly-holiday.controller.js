const monthlyHolidayService = require("../services/monthly-holiday.service");

const initMonthlyHoliday = async (ctx) => {
  const { master_data } = ctx.request.body;
  return monthlyHolidayService.initMonthlyHoliday(master_data);
};

const list = async (ctx) => {
  const storeCode = "KSM01";
  return monthlyHolidayService.list(storeCode);
};

const create = async (ctx) => {
  const { list_monthly_holiday } = ctx.request.body;
  return monthlyHolidayService.create(list_monthly_holiday);
};

module.exports = { initMonthlyHoliday, list, create };
