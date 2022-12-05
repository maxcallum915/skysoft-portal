import Box from "../components/Box";
import Dropdown from "../components/Dropdown";
import Chart from "react-apexcharts";
import { HiOutlineChevronUp, HiOutlineExclamationCircle } from "react-icons/hi";
import Button from "../components/Button";
import InfoChip from "../components/InfoChip";
import brand1 from "../assets/brand-logo-1.png";
import brand2 from "../assets/brand-logo-2.png";
import brand3 from "../assets/brand-logo-3.png";
import Avatar from "../components/Avatar";
import trophy from "../assets/achievers-trophy.png";
import packageicon1 from "../assets/package-icon-1.png";
import packageicon2 from "../assets/package-icon-2.png";
import packageicon3 from "../assets/package-icon-3.png";
import packageicon4 from "../assets/package-icon-4.png";
import packageicon5 from "../assets/package-icon-5.png";
import { HiCheck, HiXMark } from "react-icons/hi2";

const Main = () => {
  const series = [
    {
      data: [690, 1100, 400, 1200, 470, 580, 1380],
    },
  ];
  const series1 = [50, 35, 10, 5];
  const defualtOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["Delivered", "Pending", "Refunds", "Chargebacks"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: ["#34D399", "#FBBF24", "#EF4444", "#DC2626"],
  };
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    fill: {
      colors: ["#3862e1"],
      opacity: 1,
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
    // Conditional color
    // fill: {
    //   colors: [
    //     function ({ value }) {
    //       if (value < 55) {
    //         return "#7E36AF";
    //       } else if (value >= 55 && value < 80) {
    //         return "#164666";
    //       } else {
    //         return "#D9534F";
    //       }
    //     },
    //   ],
    // },
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
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "70%",
      },
    },
    // dataLabels: {
    //   enabled: false,
    // },
  };
  return (
    <>
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="lg:w-1/3">
          <Box>
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold capitalize leading-tight text-slate-700">
                  Congratulate John!
                </span>
                <Avatar
                  icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png"
                  rounded
                  shadow
                  title="John Doe"
                />
              </div>
              <p className="text-slate-400">Achiever of the month</p>
              <h5 className="mt-6 text-4xl font-semibold text-primary">
                $42.5k
              </h5>
              <img
                src={trophy}
                alt="trophy"
                className="absolute bottom-0 right-0 block w-1/5 md:w-1/6"
              />
            </div>
          </Box>
        </div>
        <div className="flex-1">
          <Box>
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xl font-semibold capitalize text-slate-700">
                Projects overview
              </span>
              <Dropdown />
            </div>
            <div className="flex items-center gap-5">
              <div className="w-1/2 xl:w-1/3">
                <Chart
                  options={defualtOptions}
                  series={series1}
                  type="donut"
                  width="100%"
                />
              </div>
              <div className="grid w-2/3 grid-cols-2 gap-5">
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 shrink-0 rounded-md bg-emerald-400 p-2.5 text-center text-xl capitalize text-white">
                    <HiCheck className="h-full w-full" />
                  </div>
                  <div>
                    <h6 className="text-sm text-slate-400">
                      Projects Delivered
                    </h6>
                    <h5 className="text-2xl font-semibold text-slate-700">
                      285
                    </h5>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 shrink-0 rounded-md bg-amber-400 p-2.5 text-center text-xl capitalize text-white">
                    <HiOutlineExclamationCircle className="h-full w-full" />
                  </div>
                  <div>
                    <h6 className="text-sm text-slate-400">Projects Pending</h6>
                    <h5 className="text-2xl font-semibold text-slate-700">
                      35
                    </h5>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 shrink-0 rounded-md bg-red-500 p-2.5 text-center text-xl capitalize text-white">
                    <HiXMark className="h-full w-full" />
                  </div>
                  <div>
                    <h6 className="text-sm text-slate-400">
                      Projects Refunded
                    </h6>
                    <h5 className="text-2xl font-semibold text-slate-700">
                      12
                    </h5>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 shrink-0 rounded-md bg-red-600 p-2.5 text-center text-xl capitalize text-white">
                    <HiXMark className="h-full w-full" />
                  </div>
                  <div>
                    <h6 className="text-sm text-slate-400">
                      Projects Chargeback
                    </h6>
                    <h5 className="text-2xl font-semibold text-slate-700">5</h5>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <div className="mt-5 grid items-start gap-5 lg:grid-cols-2">
        <div>
          <Box>
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xl font-semibold capitalize text-slate-700">
                Weekly sales overview
              </span>
              <Dropdown />
            </div>
            <Chart
              options={options}
              series={series}
              type="bar"
              width={"100%"}
            />
            <div className="mb-5 flex gap-3">
              <h5 className="text-2xl font-semibold text-slate-700">45%</h5>
              <p className="text-sm text-slate-400">
                Your sales performance is 45% better compared to last month
              </p>
            </div>
            <Button title="View details" widthVariant="full" />
          </Box>
        </div>
        <div>
          <div className="mb-5">
            <Box>
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xl font-semibold capitalize text-slate-700">
                  Packages wise sales
                </span>
                <Dropdown />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2 rounded-lg bg-slate-100 px-3 pt-2 pb-3">
                  <img src={packageicon1} alt="package icon" />
                  <span className="text-lg font-semibold capitalize text-slate-700">
                    Bronze
                  </span>
                  <span className="block w-full rounded-md bg-secondary p-1 text-center font-semibold capitalize text-white">
                    $25.4k
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-slate-100 px-3 pt-2 pb-3">
                  <img src={packageicon2} alt="package icon" />
                  <span className="text-lg font-semibold capitalize text-slate-700">
                    Silver
                  </span>
                  <span className="block w-full rounded-md bg-secondary p-1 text-center font-semibold capitalize text-white">
                    $12.8k
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-slate-100 px-3 pt-2 pb-3">
                  <img src={packageicon3} alt="package icon" />
                  <span className="text-lg font-semibold capitalize text-slate-700">
                    gold
                  </span>
                  <span className="block w-full rounded-md bg-secondary p-1 text-center font-semibold capitalize text-white">
                    $25.4k
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-slate-100 px-3 pt-2 pb-3">
                  <img src={packageicon4} alt="package icon" />
                  <span className="text-lg font-semibold capitalize text-slate-700">
                    platinum
                  </span>
                  <span className="block w-full rounded-md bg-secondary p-1 text-center font-semibold capitalize text-white">
                    $25.4k
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-slate-100 px-3 pt-2 pb-3">
                  <img src={packageicon5} alt="package icon" />
                  <span className="text-lg font-semibold capitalize text-slate-700">
                    Bronze
                  </span>
                  <span className="block w-full rounded-md bg-secondary p-1 text-center font-semibold capitalize text-white">
                    $25.4k
                  </span>
                </div>
              </div>
            </Box>
          </div>
          <Box>
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xl font-semibold capitalize text-slate-700">
                Total Earnings
              </span>
              <Dropdown />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[2rem] font-semibold leading-tight text-slate-700">
                $24,895
              </span>
              <span className="flex items-center font-semibold text-green-500">
                <HiOutlineChevronUp className="h-4 w-4" /> 10%
              </span>
            </div>
            <p className="mb-10 text-sm text-slate-400">
              Compared to $84,325 last year
            </p>

            <InfoChip
              icon={brand1}
              title="The website designs"
              subtitle="minimal info about brand"
            />
            <InfoChip
              icon={brand2}
              title="web district"
              subtitle="minimal info about brand"
            />
            <InfoChip
              icon={brand3}
              title="website design engines"
              subtitle="minimal info about brand"
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default Main;
