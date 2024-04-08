const router = require("../index");
const {
  response_get,
  response_create_or_update,
} = require("../../common/response");
const publicHolidayController = require("../../controllers/public-holiday.controller");

router
  .get("/public-holiday", response_get(publicHolidayController.list))
  .post(
    "/init-public-holiday",
    response_create_or_update(publicHolidayController.initMasterData)
  );

module.exports = router;
