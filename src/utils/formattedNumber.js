const formattedNumber = (number) => {
  const formatter = Intl.NumberFormat("en-US", {
    notation: "compact",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
  return formatter.format(number);
};

export default formattedNumber;
