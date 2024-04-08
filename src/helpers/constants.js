const REST_FULL_API_CODE = {
  GET_SUCCESS: { code: 1, status: 200, message: "Successfully" },
  CREATED_SUCCESS: { code: 1, status: 201, message: "Successfully" },
  DELETED_SUCCESS: { code: 1, status: 204, message: "Delete success" },
  CREATE_FAIL: { code: 2, status: 400, message: "Can't create this action" },
  NOT_FOUND: { code: 3, status: 404, message: "Can't find user" },
  PASSWORD_INVALID: { code: 4, status: 400, message: "Password invalid" },
  PERMISSION_DENIED: { code: 5, status: 400, message: "Permission denied" },
  NOT_EXISTS: { code: 6, status: 400, message: "NOT EXISTS" },
  UPDATE_FAIL: { code: 7, status: 400, message: "Can't update" },
  INVALID_TOKEN_OR_EXPIRES: {
    code: 8,
    status: 400,
    message: "Invalid token or expires",
  },
};

module.exports = {
  REST_FULL_API_CODE,
};
