const sequelize = require("../config/env");
const { public_holiday, Sequelize } = require("../models");
const { getListPublicHoliday } = require("../helpers/get-public-holiday");
const {
  getListDataDefaultPublicHoliday,
} = require("../helpers/get-date-month-year-from-date");
const { Op } = Sequelize;

const initMasterData = async (body) => {
  const listPublicHoliday = await getListPublicHoliday("JP", body.year);
  const dataDefault = getListDataDefaultPublicHoliday(listPublicHoliday);
  const result = await public_holiday.bulkCreate(dataDefault, {});
  return result;
};

const list = async (ctx) => {
  const publicHoliday = await public_holiday.findAll({});
  const result = publicHoliday.map((item) => {
    return {
      id: item.id,
      type: item.type,
      month: item.month,
      date: item.date,
      event_details: item.event_details,
    };
  });
  return result;
};

const destroy = async (ids) => {
  console.log(ids);
  const findAllId = await public_holiday.findAll({
    where: {
      id: { [Op.in]: ids },
    },
  });
  const isExistsId = findAllId.length === ids.length ? true : false;
  if (isExistsId) {
    await public_holiday.destroy({
      where: {
        id: { [Op.in]: ids },
      },
    });
  } else {
    return "Id is not exists";
  }
  return true;
};

const create = async (list_of_holiday) => {
  const date = new Date();
  try {
    const listPublicHoliday = list_of_holiday.map((item) => {
      return {
        ...item,
        year: date.getFullYear(),
        store_code: "KSM01",
        holidays: `${date.getFullYear()}-${
          item.month > 9 ? item.month : "0" + item.month
        }-${item.date > 9 ? item.date : "0" + item.date}`,
      };
    });
    const result = await sequelize.transaction(async (t) => {
      await public_holiday.destroy({ where: {} }, { transaction: t });
      const publicHolidays = await public_holiday.bulkCreate(
        listPublicHoliday,
        {},
        { transaction: t }
      );
      return publicHolidays;
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  list,
  initMasterData,
  destroy,
  create,
};
