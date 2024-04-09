const router = require("../index");
const {
  response_get,
  response_create_or_update,
  response_delete,
} = require("../../common/response");
const storeSettingController = require("../../controllers/store-setting.controller");
const { list, initStoreSetting, update } = storeSettingController;

router
  .get("/store-setting", response_get(list))
  .post("/init-store-setting", response_create_or_update(initStoreSetting))
  .put("/store-setting", response_create_or_update(update));
module.exports = router;
