const router = require("../index");
const {
  response_get,
  response_create_or_update,
} = require("../../common/response");
const remarkController = require("../../controllers/remark.controller");
const { initRemark, list, create } = remarkController;

router
  .post("/init-remark", response_create_or_update(initRemark))
  .get("/remark", response_get(list))
  .post("/remark", response_create_or_update(create));

module.exports = router;
