const router = require("../index");
const { response_get } = require("../../common/response");
const publicHolidayController = require("../../controllers/public-holiday.controller");

router.get("/public-holiday", response_get(publicHolidayController.list));

module.exports = router;
