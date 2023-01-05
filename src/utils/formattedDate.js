import format from "date-fns/format";

const formattedDate = (date) => {
  return format(new Date(date), "MMMM dd, yyyy");
};

export default formattedDate;
