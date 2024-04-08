const router = require("../index");

router.get("/api/v2/ping", (ctx) => (ctx.body = "pong"));

module.exports = router;
