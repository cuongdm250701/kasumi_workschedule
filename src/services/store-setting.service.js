const { store_setting, Sequelize } = require("../models");
const { Op } = Sequelize;

const initStoreSetting = async (body) => {
  const {
    process_month,
    store_code,
    pos_machines_no_employee_count,
    pos_machines_with_employee_count,
    start_time,
    end_time,
    opening_time,
    closing_time,
    work_start_day,
    attendant,
  } = body;
  const storeSetting = await store_setting.create({
    process_month,
    store_code,
    pos_machines_no_employee_count,
    pos_machines_with_employee_count,
    start_time,
    end_time,
    opening_time,
    closing_time,
    work_start_day,
    attendant,
  });
  return storeSetting;
};
const list = async (storeCode) => {
  const storeSetting = await store_setting.findOne({
    attributes: [
      "id",
      "store_code",
      "pos_machines_no_employee_count",
      "pos_machines_with_employee_count",
      "start_time",
      "end_time",
      "opening_time",
      "closing_time",
      "work_start_day",
      "attendant",
    ],
    where: { store_code: storeCode },
  });
  return storeSetting;
};
const update = async (body) => {
  const {
    pos_machines_no_employee_count,
    pos_machines_with_employee_count,
    start_time,
    end_time,
    opening_time,
    closing_time,
    work_start_day,
    attendant,
    store_code,
    process_month,
  } = body;
  await store_setting.update(
    {
      pos_machines_no_employee_count,
      pos_machines_with_employee_count,
      start_time,
      end_time,
      opening_time,
      closing_time,
      work_start_day,
      attendant,
      process_month,
    },
    { where: { store_code: store_code } }
  );
  return await list(store_code);
};
module.exports = {
  list,
  initStoreSetting,
  update,
};
