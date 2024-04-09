const router = require("../index");
const {
  response_get,
  response_create_or_update,
} = require("../../common/response");
const monthlyHolidayController = require("../../controllers/monthly-holiday.controller");
const { initMonthlyHoliday, list, create } = monthlyHolidayController;

router
  .post("/init-monthly-holiday", response_create_or_update(initMonthlyHoliday))
  .get("/monthly-holiday", response_get(list))
  .post("/monthly-holiday", response_create_or_update(create));

module.exports = router;
