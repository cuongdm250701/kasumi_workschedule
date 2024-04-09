const getDateMonthYearFromDate = (dateInput) => {
  const date = new Date(dateInput);
  return {
    date: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
};

const getListDataDefaultPublicHoliday = (listPublicHoliday) => {
  const data = listPublicHoliday.map((item) => {
    const getDateMonthYear = getDateMonthYearFromDate(item.date);
    return {
      month: getDateMonthYear.month,
      date: getDateMonthYear.date,
      year: getDateMonthYear.year,
      event_details: item.localName,
      type: 1,
      store_code: "KSM01",
      holidays: `${getDateMonthYear.year}-${
        getDateMonthYear.month > 9
          ? getDateMonthYear.month
          : "0" + getDateMonthYear.month
      }-${
        getDateMonthYear.date > 9
          ? getDateMonthYear.date
          : "0" + getDateMonthYear.date
      }`,
    };
  });
  return data;
};

module.exports = { getDateMonthYearFromDate, getListDataDefaultPublicHoliday };
