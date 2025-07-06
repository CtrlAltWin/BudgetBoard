const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0);
};

module.exports = {
  getDaysInMonth,
};
