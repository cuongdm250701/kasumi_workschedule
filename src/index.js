const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./routes/v1/index");
const connectDb = require("./config/connect-db");
const App = new Koa();
const port = 8000;

// https://date.nager.at/api/v3/publicholidays/2024/AT
// /api/v3/PublicHolidays/{Year}/{CountryCode}

App.use(parser());
App.use(cors());
App.use(router.routes());
connectDb();
App.listen(port, "0.0.0.0", () => {
  console.log(`Server listening port ${port}`);
});
