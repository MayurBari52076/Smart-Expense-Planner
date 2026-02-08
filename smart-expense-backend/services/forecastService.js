exports.calculateForecast = (expenses) => {
  if (expenses.length === 0) return 0;

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return Math.round(total / expenses.length);
};
