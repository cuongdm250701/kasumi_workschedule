const router = require("../index");
const publicHolidayRoute = require("./public-holiday.route");

router.get("/api/v1/ping", (ctx) => (ctx.body = "pong"));
// router.get("/api/v1/public-holiday", async (ctx) => {
//   return (ctx.body = [
//     {
//       id: 1,
//       type: 1,
//     },
//   ]);
// });
router.use("/api/v1", publicHolidayRoute.routes());

module.exports = router;
