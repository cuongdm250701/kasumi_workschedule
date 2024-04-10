const router = require("../index");
const publicHolidayRoute = require("./public-holiday.route");
const storeSettingRoute = require("./store-setting.route");
const monthlyHolidayRoute = require("./monthly-holiday.route");
const remarkRoute = require("./remark.route");

router.get("/api/v1/ping", (ctx) => (ctx.body = "pong"));
router.use("/api/v1", publicHolidayRoute.routes());
router.use("/api/v1", storeSettingRoute.routes());
router.use("/api/v1", monthlyHolidayRoute.routes());
router.use("/api/v1", remarkRoute.routes());
module.exports = router;
