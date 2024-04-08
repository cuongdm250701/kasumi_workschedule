const axios = require("axios");
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

module.exports = { getListPublicHoliday };
