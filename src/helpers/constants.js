const REST_FULL_API_CODE = {
  GET_SUCCESS: { code: 200, message: "Successfully" },
  CREATED_SUCCESS: { code: 1, message: "Successfully" },
  DELETED_SUCCESS: { code: 200, message: "Successfully" },
  CREATE_FAIL: { code: 2, message: "Can't create this action" },
  NOT_FOUND: { code: 3, message: "Can't find user" },
  PASSWORD_INVALID: { code: 4, message: "Password invalid" },
  PERMISSION_DENIED: { code: 5, message: "Permission denied" },
  NOT_EXISTS: { code: 6, message: "NOT EXISTS" },
  UPDATE_FAIL: { code: 7, message: "Can't update" },
  INVALID_TOKEN_OR_EXPIRES: {
    code: 8,
    message: "Invalid token or expires",
  },
};

module.exports = {
  REST_FULL_API_CODE,
};
