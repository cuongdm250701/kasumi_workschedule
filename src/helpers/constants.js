const REST_FULL_API_CODE = {
  GET_SUCCESS: { code: 200, message: "Successfully" },
  CREATED_SUCCESS: { code: 200, message: "Successfully" },
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
const LIST_PUBLIC_HOLIDAY_SPECIFIC = [
  {
    type: 1,
    month: 1,
    date: 1,
    event_details: "元旦",
  },
  {
    type: 1,
    month: 2,
    date: 11,
    event_details: "建国記念日",
  },
  {
    type: 1,
    month: 3,
    date: 20,
    event_details: "春分の日",
  },
  {
    type: 1,
    month: 4,
    date: 29,
    event_details: "昭和の日",
  },
  {
    type: 1,
    month: 5,
    date: 3,
    event_details: "憲法記念日",
  },
  {
    type: 1,
    month: 5,
    date: 4,
    event_details: "みどりの日",
  },
  {
    type: 1,
    month: 5,
    date: 5,
    event_details: "こどもの日",
  },
  {
    type: 1,
    month: 8,
    date: 11,
    event_details: "山の日",
  },
  {
    type: 1,
    month: 9,
    date: 22,
    event_details: "国民の休日",
  },
  {
    type: 1,
    month: 11,
    date: 3,
    event_details: "文化の日",
  },
  {
    type: 1,
    month: 11,
    date: 23,
    event_details: "勤労感謝の日",
  },
];

const LIST_PUBLIC_HOLIDAY_NOT_SPECIFIC = [
  {
    day: 1,
    week: 2,
    month: 0,
    type: 1,
    event_details: "成人の日",
  },
  {
    day: 0,
    week: 2,
    month: 4,
    type: 2,
    event_details: "母の日",
  },
  {
    day: 0,
    week: 3,
    month: 5,
    type: 2,
    event_details: "父の日",
  },
  {
    day: 1,
    week: 3,
    month: 6,
    type: 1,
    event_detail: "海の日",
  },
  {
    day: 1,
    week: 3,
    month: 8,
    type: 1,
    event_details: "敬老の日",
  },
  {
    day: 1,
    week: 2,
    month: 9,
    type: 1,
    event_details: "体育の日",
  },
];

const LIST_EVENT_SPECIFIC = [
  {
    type: 2,
    month: 2,
    date: 3,
    event_details: "節分",
  },
  {
    type: 2,
    month: 2,
    date: 14,
    event_details: "ﾊﾞﾚﾝﾀｲﾝﾃﾞｰ",
  },
  {
    type: 2,
    month: 3,
    date: 3,
    event_details: "ひなまつり",
  },
  {
    type: 2,
    month: 3,
    date: 14,
    event_details: "ホワイトデー",
  },
  {
    type: 2,
    month: 7,
    date: 7,
    event_details: "七夕",
  },
  {
    type: 2,
    month: 8,
    date: 13,
    event_details: "お盆入り",
  },
  {
    type: 2,
    month: 8,
    date: 15,
    event_details: "お盆",
  },
  {
    type: 2,
    month: 12,
    date: 24,
    event_details: "ｸﾘｽﾏｽ･ｲﾌﾞ",
  },
  {
    type: 2,
    month: 12,
    date: 25,
    event_details: "クリスマス",
  },
  {
    type: 2,
    month: 12,
    date: 31,
    event_details: "大晦日",
  },
];

module.exports = {
  REST_FULL_API_CODE,
  LIST_PUBLIC_HOLIDAY_NOT_SPECIFIC,
  LIST_PUBLIC_HOLIDAY_SPECIFIC,
  LIST_EVENT_SPECIFIC,
};
