const storeSettingService = require("../services/store-setting.service");

const initStoreSetting = async (ctx) => {
  const date = new Date();
  const {
    process_month = date.getMonth() + 1,
    store_code = "KSM01",
    pos_machines_no_employee_count,
    pos_machines_with_employee_count,
    start_time,
    end_time,
    opening_time,
    closing_time,
    work_start_day,
    attendant,
  } = ctx.request.body;
  return storeSettingService.initStoreSetting({
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
};

const list = async (ctx) => {
  const storeCode = "KSM01";
  return storeSettingService.list(storeCode);
};

const update = async (ctx) => {
  const date = new Date();
  const {
    pos_machines_no_employee_count,
    pos_machines_with_employee_count,
    start_time,
    end_time,
    opening_time,
    closing_time,
    work_start_day,
    attendant,
  } = ctx.request.body;
  const store_code = "KSM01";
  const process_month = date.getMonth() + 1;
  return storeSettingService.update({
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
  });
};

module.exports = {
  list,
  initStoreSetting,
  update,
};
