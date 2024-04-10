const axios = require("axios");
const { LIST_PUBLIC_HOLIDAY_SPECIFIC } = require("./constants");

const getListPublicHoliday = async (countryCode, year) => {
  try {
    const publicHoliday = await axios.get(
      `https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`
    );
    return publicHoliday.data;
  } catch (error) {
    console.log(error);
  }
};

function getSpecificWeekdayOfMonth(year, month, targetDay, targetWeek) {
  const firstDayOfMonth = new Date(year, month, 1);
  const firstWeekday = firstDayOfMonth.getDay();
  console.log(firstWeekday);
  let offset = targetDay - firstWeekday;
  console.log(offset);
  if (offset < 0) {
    offset += 7;
  }
  const targetDate = 1 + offset + (targetWeek - 1) * 7;
  console.log(targetDate);
  return new Date(year, month, targetDate);
}
// Lấy ngày thứ 2 tuần thứ 2 của tháng 1 năm 2024
const year = 2024;
// Tháng 1 (JavaScript đếm tháng từ 0)
const month = 0;
// Thứ 2 (0 là Chủ Nhật, 1 là Thứ 2, ..., 6 là Thứ 7)
const targetDay = 1;
// Tuần thứ 2
const targetWeek = 2;
const secondMondayOfJanuary2024 = getSpecificWeekdayOfMonth(
  year,
  month,
  targetDay,
  targetWeek
);
console.log(secondMondayOfJanuary2024.toDateString());

// const extraDaysOff = () => {
//   const date = new Date();
//   const listPublicHoliday = LIST_PUBLIC_HOLIDAY_SPECIFIC;
//   const dayOff = [];
//   const currentYear = date.getFullYear();
//   listPublicHoliday.forEach((item) => {
//     const isSunday = new Date(currentYear, item.month - 1, item.date).getDay()
//       ? false
//       : true;
//     if (isSunday) {
//       const addDayOff = {
//         type: 1,
//         month: item.month,
//         date: item.date + 1,
//         event_details: "振替休日",
//       };
//       dayOff.push(addDayOff);
//     }
//   });
//   return [...listPublicHoliday, ...dayOff];
// };
const extraDaysOff = () => {
  const date = new Date();
  const listPublicHoliday = [...LIST_PUBLIC_HOLIDAY_SPECIFIC];
  const currentYear = date.getFullYear();
  listPublicHoliday.forEach((item) => {
    const isSunday = new Date(currentYear, item.month - 1, item.date).getDay()
      ? false
      : true;
    if (isSunday) {
      const dayOff = {
        type: 1,
        month: item.month,
        date: item.date + 1,
        event_details: "振替休日",
      };
      listPublicHoliday.push(dayOff);
    }
  });
  console.log(listPublicHoliday);
  return listPublicHoliday;
};

module.exports = { getListPublicHoliday };
