const getDateMonthYearFromDate = (dateInput) => {
  const date = new Date(dateInput);
  return {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
};
