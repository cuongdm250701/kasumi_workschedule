const { remark, Sequelize } = require("../models");
const sequelize = require("../config/env");
const { destroy } = require("./public-holiday.service");
const { Op } = Sequelize;

const initRemark = async (masterData) => {
  const processMonth = new Date().getMonth() + 1;
  const storeCode = "KSM01";
  const dataInsert = masterData.map((item) => {
    return {
      ...item,
      process_month: processMonth,
      store_code: storeCode,
    };
  });
  const result = await remark.bulkCreate(dataInsert, {});
  return result;
};

const list = async (storeCode) => {
  const remarks = await remark.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt", "store_code", "process_month"],
    },
    where: {
      store_code: storeCode,
    },
  });
  return remarks;
};

const create = async (remarks) => {
  try {
    const currentMonth = new Date().getMonth() + 1;
    const storeCode = "KSM01";
    const newRemarks = remarks.map((item) => {
      return {
        ...item,
        process_month: currentMonth,
        store_code: storeCode,
      };
    });
    const result = sequelize.transaction(async (t) => {
      await remark.destroy({ where: {} }, { transaction: t });
      await remark.bulkCreate(newRemarks, {}, { transaction: t });
      return await list(storeCode);
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  initRemark,
  list,
  create,
};
