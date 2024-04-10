const remarkService = require("../services/remark.service");

const initRemark = async (ctx) => {
  const { master_data } = ctx.request.body;
  return remarkService.initRemark(master_data);
};

const list = async (ctx) => {
  const storeCode = "KSM01";
  return remarkService.list(storeCode);
};

const create = async (ctx) => {
  const { list_remark } = ctx.request.body;
  return remarkService.create(list_remark);
};

module.exports = {
  initRemark,
  list,
  create,
};
