const models = require("../models/index");

models.sequelize
  .sync({ force: false, alert: false })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("err", err);
    throw new Error(err);
  });
