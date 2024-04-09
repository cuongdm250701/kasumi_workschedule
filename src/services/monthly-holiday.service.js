const { monthly_holiday, Sequelize } = require("../models");
const sequelize = require("../config/env");
const { Op } = Sequelize;

const initMonthlyHoliday = async (masterData) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const storeCode = "KSM01";
  const dataInsert = masterData.map((item) => {
    return {
      ...item,
      store_code: storeCode,
      year: currentYear,
    };
  });
  const result = await monthly_holiday.bulkCreate(dataInsert, {});
  return result;
};

const list = async (storeCode) => {
  const monthlyHolidays = await monthly_holiday.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    where: {
      store_code: storeCode,
    },
  });
  return monthlyHolidays;
};

const create = async (listMonthlyHoliday) => {
  try {
    const date = new Date();
    const currentYear = date.getFullYear();
    const storeCode = "KSM01";
    const monthlyHoliday = listMonthlyHoliday.map((item) => {
      return {
        ...item,
        store_code: storeCode,
        year: currentYear,
      };
    });
    const result = await sequelize.transaction(async (t) => {
      await monthly_holiday.destroy({ where: {} }, { transaction: t });
      await monthly_holiday.bulkCreate(monthlyHoliday, {}, { transaction: t });

      return await list(storeCode);
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initMonthlyHoliday, list, create };
