import { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = ({ width, height, title, dates }) => {
  const [data, setData] = useState([
    {
      name: title,
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ]);

  const options = {
    stroke: {
      curve: "smooth",
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2022",
        "2/11/2022",
        "3/11/2022",
        "4/11/2022",
        "5/11/2022",
        "6/11/2022",
        "7/11/2022",
        "8/11/2022",
        "9/11/2022",
      ],
      labels: {
        show: false,
        formatter: function (value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp), "dd MMM");
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#019dff", "#3862e1"],
        opacityFrom: 0.75,
        opacityTo: 1,
      },
    },
    grid: {
      show: true,
      borderColor: "#00000020",
      strokeDashArray: 10,
      position: "back",
      row: {
        colors: undefined,
        opacity: 0.5,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <Chart
      options={options}
      series={data}
      type="line"
      width={width}
      height={height}
    />
  );
};

export default LineChart;
