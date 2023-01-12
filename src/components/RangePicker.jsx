import { useState } from "react";
import { DateRange } from "react-date-range";
import { formatISO } from "date-fns";
import Button from "./Button";

const initialDateRange = [
  {
    startDate: new Date(),
    endDate: null,
    key: "selection",
  },
];

const RangePicker = ({ setState, array = [] }) => {
  const [dateRange, setDateRange] = useState(initialDateRange);
  const [toggleDateRange, setToggleDateRange] = useState(false);

  //   Toggle date range picker
  const handleToggleRange = () => setToggleDateRange((prev) => !prev);

  //   Filter data by date range
  const handleRangeSelection = () => {
    const { startDate, endDate } = dateRange[0];
    let startDateISO = formatISO(startDate);
    let endDateISO = formatISO(endDate).replace("T00:00:00", "T23:59:59");
    const filtered = array.filter(
      (item) => item.createdAt >= startDateISO && item.createdAt <= endDateISO
    );
    setToggleDateRange((prevState) => !prevState);
    setState(filtered);
  };

  //   Reset data and date range selection
  const resetRangeSelection = () => {
    setToggleDateRange((prevState) => !prevState);
    setDateRange(initialDateRange);
    setState(array);
  };

  return (
    <div>
      <Button handleClick={handleToggleRange}>Search By Date</Button>
      {toggleDateRange && (
        <div className="relative">
          <div className="absolute top-0 right-0 z-50 shadow-lg">
            <DateRange
              onChange={(item) => setDateRange([item.selection])}
              ranges={dateRange}
              rangeColors={["#019dff"]}
            />
            <div className="flex gap-2">
              <Button widthVariant="full" handleClick={resetRangeSelection}>
                Reset
              </Button>
              <Button widthVariant="full" handleClick={handleRangeSelection}>
                Search
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RangePicker;
