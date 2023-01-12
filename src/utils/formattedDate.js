import format from "date-fns/format";

const formattedDate = (date) => {
  let dateFormatted = date.split("T")[0];
  return format(new Date(dateFormatted), "MMMM dd, yyyy");
};

export default formattedDate;
