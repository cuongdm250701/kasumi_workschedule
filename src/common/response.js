const _ = require("lodash");
const { REST_FULL_API_CODE } = require("../helpers/constants");

const return_response = ({ ctx, result }, { code, status, message }) => {
  let data = result;
  if (!_.isObject(result) || !result.data) {
    data = { data: result };
  }
  ctx.body = {
    status,
    code,
    message: message,
    ...data,
  };
};

const response_create_or_update = (handler) => {
  return async (ctx) => {
    try {
      const result = await handler(ctx);
      return_response({ ctx, result }, REST_FULL_API_CODE.CREATED_SUCCESS);
    } catch (error) {
      console.log(error);
    }
  };
};

const response_get = (handler) => {
  return async (ctx) => {
    try {
      const result = await handler(ctx);
      return_response({ ctx, result }, REST_FULL_API_CODE.GET_SUCCESS);
    } catch (error) {
      console.log(error);
    }
  };
};

const response_delete = (handler) => {
  return async (ctx) => {
    try {
      const result = await handler(ctx);
      return_response({ ctx, result }, REST_FULL_API_CODE.DELETED_SUCCESS);
    } catch (error) {
      console.log(error);
    }
  };
};

module.exports = { response_create_or_update, response_get, response_delete };
