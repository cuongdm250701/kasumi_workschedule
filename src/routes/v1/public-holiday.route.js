const router = require("../index");
const {
  response_get,
  response_create_or_update,
  response_delete,
} = require("../../common/response");
const publicHolidayController = require("../../controllers/public-holiday.controller");
const { list, initMasterData, destroy, create } = publicHolidayController;

router
  .get("/public-holiday", response_get(list))
  .post("/init-public-holiday", response_create_or_update(initMasterData))
  .delete("/public-holiday", response_delete(destroy))
  .post("/public-holiday", response_create_or_update(create));

module.exports = router;
