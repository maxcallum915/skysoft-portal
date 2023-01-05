const formattedCurrency = (amount) => {
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    minimumFractionDigits: 0,
  });
  return formatter.format(amount);
};

export default formattedCurrency;
