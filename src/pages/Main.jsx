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
import { HiCheck, HiChevronDown, HiXMark } from "react-icons/hi2";
import Progressbar from "../components/Progressbar";
import LineChart from "../components/LineChart";
import { DataGrid } from "@mui/x-data-grid";
import Chip from "../components/Chip";
import { Link } from "react-router-dom";
import MultiProgress from "../components/MultiProgress";
import { Disclosure } from "@headlessui/react";

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
  const VisitManager = ({ params }) => {
    return (
      <Link
        to={`/users/${params.row.managerProfile}`}
        className="flex items-center gap-3"
      >
        <Avatar
          icon="https://xsgames.co/randomusers/avatar.php?g=male"
          rounded
        />
        <div>
          <h5 className="font-semibold capitalize leading-none text-slate-900">
            {params.row.accountManager}
          </h5>
          <h6 className="text-sm text-slate-400">{params.row.managerEmail}</h6>
        </div>
      </Link>
    );
  };

  const ShowProgress = ({ params }) => {
    return (
      <div className="flex items-center gap-2">
        <Progressbar width="w-20" rounded progress={params.row.orderProgress} />
        <span className="text-sm font-semibold text-slate-900">
          {params.row.orderProgress}%
        </span>
      </div>
    );
  };

  const rows = [
    {
      id: 1,
      orderId: 461850657,
      orderTitle: `Order Title`,
      accountManager: "John doe",
      managerEmail: "johndoe@gmail.com",
      managerProfile: "johndoe",
      orderStatus: "active",
      orderProgress: `25`,
      brand: "The website design",
      package: "Gold",
      orderWorth: 5040.25,
      createdAt: "10-10-2022",
    },
    {
      id: 2,
      orderId: 506574618,
      orderTitle: `Order Title`,
      accountManager: "Silver Green",
      managerEmail: "silvergreen@gmail.com",
      managerProfile: "silvergreen",
      orderStatus: "inactive",
      orderProgress: `68`,
      brand: "Web districts",
      package: "Bronze",
      orderWorth: 5040.25,
      createdAt: "10-10-2022",
    },
    {
      id: 3,
      orderId: 574661508,
      orderTitle: `Order Title`,
      accountManager: "Brad ford",
      managerEmail: "bradford@gmail.com",
      managerProfile: "bradford",
      orderStatus: "delivered",
      orderProgress: `41`,
      brand: "Seo maisters",
      package: "Silver",
      orderWorth: 5040.25,
      createdAt: "10-10-2022",
    },
    {
      id: 4,
      orderId: 746501865,
      orderTitle: `Order Title`,
      accountManager: "Joey Tribbiani",
      managerEmail: "joeytribbiani@gmail.com",
      managerProfile: "joeytribbiani",
      orderStatus: "active",
      orderProgress: `89`,
      brand: "Web districts",
      package: "Bronze",
      orderWorth: 5040.25,
      createdAt: "10-10-2022",
    },
    {
      id: 5,
      orderId: 616574850,
      orderTitle: `Order Title`,
      accountManager: "Matthew Perry",
      managerEmail: "matthewperry@gmail.com",
      managerProfile: "matthewperry",
      orderStatus: "inactive",
      orderProgress: `29`,
      brand: "The Website Design",
      package: "Bronze",
      orderWorth: 5040.25,
      createdAt: "10-10-2022",
    },
    {
      id: 6,
      orderId: 661505748,
      orderTitle: `Order Title`,
      accountManager: "David Schwimmer",
      managerEmail: "davidschwimmer@gmail.com",
      managerProfile: "davidschwimmer",
      orderStatus: "active",
      orderProgress: `58`,
      brand: "Web districts",
      package: "Silver",
      orderWorth: 5040.25,
      createdAt: "10-10-2022",
    },
    {
      id: 7,
      orderId: 506574618,
      orderTitle: `Order Title`,
      accountManager: "Matt Le Blanc",
      managerEmail: "mattleblanc@gmail.com",
      managerProfile: "mattleblanc",
      orderStatus: "active",
      orderProgress: `45`,
      brand: "Web districts",
      package: "Gold",
      orderWorth: 5040.25,
      createdAt: "10-10-2022",
    },
    {
      id: 8,
      orderId: 506574618,
      orderTitle: `Order Title`,
      accountManager: "Ross Geller",
      managerEmail: "rossgeller@gmail.com",
      managerProfile: "rossgeller",
      orderStatus: "delivered",
      orderProgress: `91`,
      brand: "SEO Maisters",
      package: "Bronze",
      orderWorth: 5040.25,
      createdAt: "10-10-2022",
    },
    {
      id: 9,
      orderId: 506574618,
      orderTitle: `Order Title`,
      accountManager: "Silver Green",
      managerEmail: "silvergreen@gmail.com",
      managerProfile: "silvergreen",
      orderStatus: "active",
      orderProgress: `12`,
      brand: "Web districts",
      package: "Bronze",
      orderWorth: 5040.25,
      createdAt: "10-10-2022",
    },
  ];
  const columns = [
    { field: "orderId", headerName: "Order ID" },
    { field: "orderTitle", headerName: "Order Title", width: 150 },
    {
      field: "brand",
      headerName: "Brand",
      width: 250,
      renderCell: (params) => <InfoChip title={params.value} />,
    },
    {
      field: "accountManager",
      headerName: "Account Manager",
      width: 220,
      renderCell: (params) => <VisitManager params={params} />,
    },
    {
      field: "orderStatus",
      headerName: "Order Status",
      width: 140,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Chip
          variant={
            params.value === "active" || params.value === "delivered"
              ? "success"
              : "warning"
          }
          label={params.value}
        />
      ),
    },
    {
      field: "orderProgress",
      headerName: "Order Progress",
      width: 140,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => <ShowProgress params={params} />,
    },
    {
      field: "package",
      width: 140,
      headerAlign: "center",
      align: "center",
      headerName: `Package Name`,
    },
    {
      field: "orderWorth",
      width: 135,
      headerAlign: "center",
      align: "center",
      headerName: `Order Worth`,
      valueFormatter: (params) => {
        return `$ ${params.value}`;
      },
    },
    {
      field: "createdAt",
      width: 135,
      headerAlign: "center",
      align: "center",
      headerName: `Created On`,
      valueFormatter: ({ value }) => {
        return new Date(value).toISOString().split("T")[0];
      },
    },
  ];

  const styles = {
    summaryChipWrapper: `mb-5 grid gap-5 lg:grid-cols-4`,
    summaryChip: `flex items-center gap-3 rounded-lg bg-white p-4 shadow-md`,
    summaryChipIcon: `h-12 w-12 shrink-0 rounded-lg bg-slate-100 p-2.5`,
    summaryChipSubtitle: `text-sm capitalize text-slate-400`,
    summaryChipTitle: `mt-1 text-2xl font-semibold leading-none`,
  };
  return (
    <>
      {/* <div className="flex flex-col gap-5 lg:flex-row">
        <div className="lg:w-1/3">
          <Box>
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold capitalize leading-tight text-slate-700">
                  Congratulate John!
                </span>
                <Avatar
                  icon="https://xsgames.co/randomusers/avatar.php?g=male"
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
                orders overview
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
                    <h6 className="text-sm text-slate-400">orders Delivered</h6>
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
                    <h6 className="text-sm text-slate-400">orders Pending</h6>
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
                    <h6 className="text-sm text-slate-400">orders Refunded</h6>
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
                      orders Chargeback
                    </h6>
                    <h5 className="text-2xl font-semibold text-slate-700">5</h5>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div> */}
      <div className="flex items-start gap-5">
        <div className="grid w-2/3 grid-cols-2 gap-5">
          <Box>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-slate-100 p-2 text-green-500">
                  <HiCheck className="h-full w-full" />
                </div>
                <span className="text-lg font-semibold capitalize">
                  Orders delivered
                </span>
              </div>
              {/* <Dropdown /> */}
            </div>
            <div className="flex flex-col justify-between gap-4 2xl:flex-row 2xl:items-center 2xl:gap-5">
              <div>
                <h5 className="text-2xl font-bold text-slate-900">58</h5>
                <h6 className="font-medium text-slate-300">$4589.54</h6>
              </div>
              <div className="2xl:w-2/3">
                <LineChart width="100%" height={115} tempProp="Delivered" />
              </div>
            </div>
          </Box>
          <Box>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-slate-100 p-2 text-amber-400">
                  <HiOutlineExclamationCircle className="h-full w-full" />
                </div>
                <span className="text-lg font-semibold capitalize">
                  Orders pending
                </span>
              </div>
              {/* <Dropdown /> */}
            </div>
            <div className="flex flex-col justify-between gap-4 2xl:flex-row 2xl:items-center 2xl:gap-5">
              <div>
                <h5 className="text-2xl font-bold text-slate-900">12</h5>
                <h6 className="font-medium text-slate-300">$1125.54</h6>
              </div>
              <div className="2xl:w-2/3">
                <LineChart width="100%" height={115} tempProp="Pending" />
              </div>
            </div>
          </Box>
          <Box>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-slate-100 p-2 text-red-500">
                  <HiXMark className="h-full w-full" />
                </div>
                <span className="text-lg font-semibold capitalize">
                  Orders refunded
                </span>
              </div>
              {/* <Dropdown /> */}
            </div>
            <div className="flex flex-col justify-between gap-4 2xl:flex-row 2xl:items-center 2xl:gap-5">
              <div>
                <h5 className="text-2xl font-bold text-slate-900">5</h5>
                <h6 className="font-medium text-slate-300">$589.54</h6>
              </div>
              <div className="2xl:w-2/3">
                <LineChart width="100%" height={115} tempProp="Refunded" />
              </div>
            </div>
          </Box>
          <Box>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-slate-100 p-2 text-red-600">
                  <HiXMark className="h-full w-full" />
                </div>
                <span className="text-lg font-semibold capitalize">
                  Orders chargedback
                </span>
              </div>
              {/* <Dropdown /> */}
            </div>
            <div className="flex flex-col justify-between gap-4 2xl:flex-row 2xl:items-center 2xl:gap-5">
              <div>
                <h5 className="text-2xl font-bold text-slate-900">2</h5>
                <h6 className="font-medium text-slate-300">$589.54</h6>
              </div>
              <div className="2xl:w-2/3">
                <LineChart width="100%" height={115} tempProp="Chargedback" />
              </div>
            </div>
          </Box>
        </div>
        <div className="w-1/3">
          <h5 className="mb-3 text-xl font-semibold capitalize text-slate-900">
            Category Wise Projects
          </h5>
          <div className="mb-4 rounded-lg bg-white p-1.5 shadow-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="div"
                    className={`flex cursor-pointer select-none flex-col items-center gap-3 rounded-lg p-2 transition-all hover:bg-slate-100 2xl:flex-row ${
                      open && "bg-slate-100"
                    }`}
                  >
                    <div className="flex w-full items-center gap-2 2xl:w-40">
                      <img
                        src={packageicon1}
                        alt="package icon"
                        className="h-14 w-14"
                      />
                      <span
                        className={`text-lg font-bold capitalize text-slate-900`}
                      >
                        Bronze
                      </span>
                    </div>
                    <div className="w-full flex-1">
                      <div
                        className={`flex items-center justify-around gap-4 rounded-md 2xl:justify-end`}
                      >
                        <ul className={`text-center`}>
                          <li className="mb-1 text-xl font-bold leading-none text-secondary">
                            77
                          </li>
                          <li className="text-xs font-medium capitalize text-slate-900">
                            Total Projects
                          </li>
                        </ul>
                        <ul className={`text-center`}>
                          <li className="mb-1 text-xl font-bold leading-none text-secondary">
                            $45.5k
                          </li>
                          <li className="text-xs font-medium capitalize text-slate-900">
                            Projects Worth
                          </li>
                        </ul>
                        <HiChevronDown
                          className={`ml-auto transition-transform duration-300 2xl:ml-0 ${
                            open && "rotate-180"
                          }`}
                        />
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-5">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand1}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        The Website engine
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $28.4k
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand2}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        Web Districts
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $4.2k
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand3}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        Web Districts
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $13.4k
                        </li>
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mb-4 rounded-lg bg-white p-1.5 shadow-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="div"
                    className={`flex cursor-pointer select-none flex-col items-center gap-3 rounded-lg p-2 transition-all hover:bg-slate-100 2xl:flex-row ${
                      open && "bg-slate-100"
                    }`}
                  >
                    <div className="flex w-full items-center gap-2 2xl:w-40">
                      <img
                        src={packageicon2}
                        alt="package icon"
                        className="h-14 w-14"
                      />
                      <span
                        className={`text-lg font-bold capitalize text-slate-900`}
                      >
                        Silver
                      </span>
                    </div>
                    <div className="w-full flex-1">
                      <div
                        className={`flex items-center justify-around gap-4 rounded-md 2xl:justify-end`}
                      >
                        <ul className={`text-center`}>
                          <li className="mb-1 text-xl font-bold leading-none text-secondary">
                            77
                          </li>
                          <li className="text-xs font-medium capitalize text-slate-900">
                            Total Projects
                          </li>
                        </ul>
                        <ul className={`text-center`}>
                          <li className="mb-1 text-xl font-bold leading-none text-secondary">
                            $45.5k
                          </li>
                          <li className="text-xs font-medium capitalize text-slate-900">
                            Projects Worth
                          </li>
                        </ul>
                        <HiChevronDown
                          className={`ml-auto transition-transform duration-300 2xl:ml-0 ${
                            open && "rotate-180"
                          }`}
                        />
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-5">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand1}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        The Website engine
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $28.4k
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand2}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        Web Districts
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $4.2k
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand3}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        Web Districts
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $13.4k
                        </li>
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mb-4 rounded-lg bg-white p-1.5 shadow-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="div"
                    className={`flex cursor-pointer select-none flex-col items-center gap-3 rounded-lg p-2 transition-all hover:bg-slate-100 2xl:flex-row ${
                      open && "bg-slate-100"
                    }`}
                  >
                    <div className="flex w-full items-center gap-2 2xl:w-40">
                      <img
                        src={packageicon3}
                        alt="package icon"
                        className="h-14 w-14"
                      />
                      <span
                        className={`text-lg font-bold capitalize text-slate-900`}
                      >
                        Gold
                      </span>
                    </div>
                    <div className="w-full flex-1">
                      <div
                        className={`flex items-center justify-around gap-4 rounded-md 2xl:justify-end`}
                      >
                        <ul className={`text-center`}>
                          <li className="mb-1 text-xl font-bold leading-none text-secondary">
                            77
                          </li>
                          <li className="text-xs font-medium capitalize text-slate-900">
                            Total Projects
                          </li>
                        </ul>
                        <ul className={`text-center`}>
                          <li className="mb-1 text-xl font-bold leading-none text-secondary">
                            $45.5k
                          </li>
                          <li className="text-xs font-medium capitalize text-slate-900">
                            Projects Worth
                          </li>
                        </ul>
                        <HiChevronDown
                          className={`ml-auto transition-transform duration-300 2xl:ml-0 ${
                            open && "rotate-180"
                          }`}
                        />
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-5">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand1}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        The Website engine
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $28.4k
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand2}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        Web Districts
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $4.2k
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand3}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        Web Districts
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $13.4k
                        </li>
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mb-4 rounded-lg bg-white p-1.5 shadow-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="div"
                    className={`flex cursor-pointer select-none flex-col items-center gap-3 rounded-lg p-2 transition-all hover:bg-slate-100 2xl:flex-row ${
                      open && "bg-slate-100"
                    }`}
                  >
                    <div className="flex w-full items-center gap-2 2xl:w-40">
                      <img
                        src={packageicon4}
                        alt="package icon"
                        className="h-14 w-14"
                      />
                      <span
                        className={`text-lg font-bold capitalize text-slate-900`}
                      >
                        platinum
                      </span>
                    </div>
                    <div className="w-full flex-1">
                      <div
                        className={`flex items-center justify-around gap-4 rounded-md 2xl:justify-end`}
                      >
                        <ul className={`text-center`}>
                          <li className="mb-1 text-xl font-bold leading-none text-secondary">
                            77
                          </li>
                          <li className="text-xs font-medium capitalize text-slate-900">
                            Total Projects
                          </li>
                        </ul>
                        <ul className={`text-center`}>
                          <li className="mb-1 text-xl font-bold leading-none text-secondary">
                            $45.5k
                          </li>
                          <li className="text-xs font-medium capitalize text-slate-900">
                            Projects Worth
                          </li>
                        </ul>
                        <HiChevronDown
                          className={`ml-auto transition-transform duration-300 2xl:ml-0 ${
                            open && "rotate-180"
                          }`}
                        />
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-5">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand1}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        The Website engine
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $28.4k
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand2}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        Web Districts
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $4.2k
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand3}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        Web Districts
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $13.4k
                        </li>
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mb-4 rounded-lg bg-white p-1.5 shadow-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="div"
                    className={`flex cursor-pointer select-none flex-col items-center gap-3 rounded-lg p-2 transition-all hover:bg-slate-100 2xl:flex-row ${
                      open && "bg-slate-100"
                    }`}
                  >
                    <div className="flex w-full items-center gap-2 2xl:w-40">
                      <img
                        src={packageicon5}
                        alt="package icon"
                        className="h-14 w-14"
                      />
                      <span
                        className={`text-lg font-bold capitalize text-slate-900`}
                      >
                        diamond
                      </span>
                    </div>
                    <div className="w-full flex-1">
                      <div
                        className={`flex items-center justify-around gap-4 rounded-md 2xl:justify-end`}
                      >
                        <ul className={`text-center`}>
                          <li className="mb-1 text-xl font-bold leading-none text-secondary">
                            77
                          </li>
                          <li className="text-xs font-medium capitalize text-slate-900">
                            Total Projects
                          </li>
                        </ul>
                        <ul className={`text-center`}>
                          <li className="mb-1 text-xl font-bold leading-none text-secondary">
                            $45.5k
                          </li>
                          <li className="text-xs font-medium capitalize text-slate-900">
                            Projects Worth
                          </li>
                        </ul>
                        <HiChevronDown
                          className={`ml-auto transition-transform duration-300 2xl:ml-0 ${
                            open && "rotate-180"
                          }`}
                        />
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-5">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand1}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        The Website engine
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $28.4k
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand2}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        Web Districts
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $4.2k
                        </li>
                      </ul>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-slate-100 p-0.5">
                        <img
                          src={brand3}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className="font-semibold capitalize text-slate-900">
                        Web Districts
                      </h5>
                      <ul className="ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold">
                        <li className="text-slate-900">21</li>
                        <li className="text-secondary before:mr-2 before:content-['/']">
                          $13.4k
                        </li>
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      {/* <div className="mb-5">
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
      </div> */}
      {/* <div className="mt-5 grid items-start gap-5 lg:grid-cols-2">
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
            <Button widthVariant="full">View details</Button>
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
            <div className="flex items-center gap-3">
              <InfoChip
                icon={brand1}
                title="The website designs"
                subtitle="minimal info about brand"
              />
              <div className="ml-auto flex flex-col gap-1">
                <h5 className="mb-1 text-right font-semibold capitalize leading-none text-slate-700">
                  $24,865.4
                </h5>
                <Progressbar progress={25} rounded />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <InfoChip
                icon={brand2}
                title="web district"
                subtitle="minimal info about brand"
              />
              <div className="ml-auto flex flex-col gap-1">
                <h5 className="mb-1 text-right font-semibold capitalize leading-none text-slate-700">
                  $24,865.4
                </h5>
                <Progressbar progress={50} rounded />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <InfoChip
                icon={brand3}
                title="website design engines"
                subtitle="minimal info about brand"
              />
              <div className="ml-auto flex flex-col gap-1">
                <h5 className="mb-1 text-right font-semibold capitalize leading-none text-slate-700">
                  $24,865.4
                </h5>
                <Progressbar progress={85} rounded />
              </div>
            </div>
          </Box>
        </div>
      </div> */}
      <div className="mt-5 h-[1000px] w-full">
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            background: "#f1f5f9",
            border: "none",
            borderRadius: "0.75rem",
            padding: `0.5rem`,
            "& .MuiDataGrid-row": {
              maxHeight: `65px !important`,
              minHeight: `65px !important`,
              background: "#fff",
              borderRadius: "0.75rem",
              marginTop: `1rem`,
              transition: `all 300ms ease-in-out`,
            },
            "& .MuiDataGrid-row:hover": {
              background: `#e2e8f0`,
              boxShadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`,
            },
            "& .MuiDataGrid-cell": {
              maxHeight: `100% !important`,
              minHeight: `100% !important`,
            },
          }}
        />
      </div>
    </>
  );
};

export default Main;
