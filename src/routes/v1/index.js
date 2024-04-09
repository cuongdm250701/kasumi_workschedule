const router = require("../index");
const publicHolidayRoute = require("./public-holiday.route");
const storeSettingRoute = require("./store-setting.route");

router.get("/api/v1/ping", (ctx) => (ctx.body = "pong"));
router.use("/api/v1", publicHolidayRoute.routes());
router.use("/api/v1", storeSettingRoute.routes());

module.exports = router;
