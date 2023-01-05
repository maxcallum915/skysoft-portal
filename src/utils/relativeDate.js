import formatRelative from "date-fns/formatRelative";

const relativeDate = (date) => {
  return formatRelative(new Date(date), new Date());
};

export default relativeDate;
