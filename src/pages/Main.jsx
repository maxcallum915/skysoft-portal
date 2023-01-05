import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import {
  HiCheck,
  HiChevronDown,
  HiXMark,
  HiOutlineArrowPath,
} from "react-icons/hi2";
import bronzeIcon from "../assets/package-icon-1.png";
import silverIcon from "../assets/package-icon-2.png";
import goldIcon from "../assets/package-icon-3.png";
import platinumIcon from "../assets/package-icon-4.png";
import diamondIcon from "../assets/package-icon-5.png";
import LineChart from "../components/LineChart";
import Box from "../components/Box";
import formattedCurrency from "../utils/formattedCurrency";
import axios from "../config/axios";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

const styles = {
  orderSummary: {
    wrapper: `mb-5 flex items-center gap-3`,
    icon: `h-12 w-12 shrink-0 rounded-lg p-2`,
    title: `text-xl font-semibold capitalize text-slate-900`,
    body: `flex flex-col justify-between gap-4 2xl:flex-row 2xl:items-end 2xl:gap-5`,
    textInfo: `mb-1 flex items-end gap-1.5`,
    orders: `text-3xl font-bold leading-none text-slate-900`,
    percentage: `font-medium text-slate-400`,
    amount: `text-lg font-semibold leading-none`,
    chart: `2xl:w-2/3`,
  },
  categoryCard: {
    container: `mb-4 flex cursor-pointer select-none flex-col items-center gap-3 rounded-lg py-3 pl-2 pr-3 bg-white hover:bg-slate-100 2xl:flex-row ring-1 ring-slate-200`,
    titleWrapper: `flex w-full items-center gap-2 2xl:w-40`,
    icon: `h-14 w-14 shrink-0 object-contain`,
    title: `text-lg font-bold leading-tight capitalize text-slate-900`,
    subtitle: `font-semibold text-slate-400`,
    infoWrapper: `flex w-full flex-1 items-center justify-around gap-4 rounded-md text-center 2xl:justify-end`,
    infoTitle: `mb-1 text-xl font-bold leading-none text-secondary`,
    infoSubtitle: `text-xs font-medium capitalize text-slate-900`,
  },
  statusTable: {
    row: `grid grid-cols-6 gap-8`,
    column: `flex items-center capitalize`,
    columnCells: `flex w-full items-center justify-between gap-2.5 py-1 px-2 text-center font-medium`,
    columnSpan: `flex-1 text-sm`,
    icon: `h-8 w-8 rounded-md bg-white object-contain p-0.5`,
    header: {
      row: `mb-4 items-end`,
      column: `flex-col gap-1`,
      columnTitle: `text-lg font-semibold`,
    },
    body: {
      row: `mt-2.5 items-center rounded-md bg-slate-50 p-2 hover:bg-slate-100`,
    },
  },
};
const { orderSummary, categoryCard, statusTable } = styles;

const Main = () => {
  const [clients, setClients] = useState([]);
  const [brands, setBrands] = useState([]);
  const [status, setStatus] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: clients }, { data: brands }, { data: status }] =
          await Promise.all([
            axios.get("/clients", {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }),
            axios.get("/brands", {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }),
            axios.get("/order-statuses", {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }),
          ]);
        setClients(clients);
        setBrands(brands);
        setStatus(status);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(clients);

  // Category Wise Clients
  const categorySummary = (categoryName) => {
    const filteredClients = clients.filter(
      (client) => client.category?.title === categoryName
    );

    const clientsLength = filteredClients.length;

    const clientsWorth = formattedCurrency(
      filteredClients.reduce((pv, c) => {
        return pv + c.worth;
      }, 0)
    );

    const clientsRatio = `${
      parseInt(((clientsLength / clients.length) * 100).toFixed()) || 0
    }%`;

    return { clientsLength, clientsWorth, clientsRatio };
  };
  const categoryWiseClients = useCallback(
    (categoryName) => categorySummary(categoryName),
    [clients]
  );

  // Status Wise Clients
  const statusSummary = (status) => {
    const filteredClients = clients.filter(
      (client) => client.status?.title === status
    );

    const clientsLength = filteredClients.length;

    const clientsWorth = formattedCurrency(
      filteredClients.reduce((pv, c) => {
        return pv + c.worth;
      }, 0)
    );

    const clientsRatio = `${
      parseInt(((clientsLength / clients.length) * 100).toFixed()) || 0
    }%`;

    return { clientsLength, clientsWorth, clientsRatio, filteredClients };
  };
  const statusWiseClients = useCallback(
    (status) => statusSummary(status),
    [clients]
  );

  // Brand Wise Clients
  const brandSummary = (brandId, status) => {
    const filteredClients = clients.filter(
      (client) =>
        brandId &&
        client.brand?._id === brandId &&
        client.status?.title === status
    );

    const clientsLength = filteredClients.length;

    const clientsWorth = formattedCurrency(
      filteredClients.reduce((pv, c) => {
        return pv + c.worth;
      }, 0)
    );

    const clientsRatio = `${
      parseInt(((clientsLength / clients.length) * 100).toFixed()) || 0
    }%`;

    return { clientsLength, clientsWorth, clientsRatio, filteredClients };
  };
  const brandWiseClients = useCallback(
    (brandId, status) => brandSummary(brandId, status),
    [clients]
  );

  // Brand Wise Clients
  const brandSummary2 = (brandId, statusId) => {
    const filteredClients = clients.filter(
      (client) =>
        client.brand?._id === brandId && client.statusId?._id === statusId
    );

    // clients.forEach((i) => console.log(i.status._id));
    console.log(clients.filter((i) => i.status._id.toString() === statusId));
    // console.log(statusId);

    const clientsLength = filteredClients.length;

    const clientsWorth = formattedCurrency(
      filteredClients.reduce((pv, c) => {
        return pv + c.worth;
      }, 0)
    );

    const clientsRatio = `${
      parseInt(((clientsLength / clients.length) * 100).toFixed()) || 0
    }%`;

    return { clientsLength, clientsWorth, clientsRatio, filteredClients };
  };
  const brandWiseClients2 = useCallback(
    (brandId, statusId) => brandSummary2(brandId, statusId),
    [clients]
  );

  return (
    <>
      <div className="flex flex-col items-start gap-5 xl:flex-row">
        <div className="w-full xl:w-2/3">
          <h4 className="mb-3 text-xl font-semibold capitalize text-slate-900">
            Clients Overview
          </h4>
          <div className="grid grid-cols-2 gap-5">
            <Box>
              <div className={orderSummary.wrapper}>
                <div
                  className={`${orderSummary.icon} bg-emerald-50 text-emerald-500`}
                >
                  <HiCheck className="h-full w-full" />
                </div>
                <span className={orderSummary.title}>Clients delivered</span>
              </div>
              <div className={orderSummary.body}>
                <div>
                  <div className={orderSummary.textInfo}>
                    <h5 className={orderSummary.orders}>
                      {statusWiseClients("delivered").clientsLength}
                    </h5>
                    <h6 className={orderSummary.percentage}>
                      {statusWiseClients("delivered").clientsRatio}
                    </h6>
                  </div>
                  <h6 className={`${orderSummary.amount} text-emerald-400`}>
                    {statusWiseClients("delivered").clientsWorth}
                  </h6>
                </div>
                <div className={orderSummary.chart}>
                  <LineChart width="100%" height={115} tempProp="Delivered" />
                </div>
              </div>
            </Box>
            <Box>
              <div className={orderSummary.wrapper}>
                <div
                  className={`${orderSummary.icon} bg-amber-50 text-amber-500`}
                >
                  <HiOutlineArrowPath className="h-full w-full" />
                </div>
                <span className={orderSummary.title}>Clients in-process</span>
              </div>
              <div className={orderSummary.body}>
                <div>
                  <div className={orderSummary.textInfo}>
                    <h5 className={orderSummary.orders}>
                      {statusWiseClients("in process").clientsLength}
                    </h5>
                    <h6 className={orderSummary.percentage}>
                      {statusWiseClients("in process").clientsRatio}
                    </h6>
                  </div>
                  <h6 className={`${orderSummary.amount} text-amber-400`}>
                    {statusWiseClients("in process").clientsWorth}
                  </h6>
                </div>
                <div className={orderSummary.chart}>
                  <LineChart width="100%" height={115} tempProp="Delivered" />
                </div>
              </div>
            </Box>
            <Box>
              <div className={orderSummary.wrapper}>
                <div className={`${orderSummary.icon} bg-red-50 text-red-500`}>
                  <HiXMark className="h-full w-full" />
                </div>
                <span className={orderSummary.title}>Clients refunded</span>
              </div>
              <div className={orderSummary.body}>
                <div>
                  <div className={orderSummary.textInfo}>
                    <h5 className={orderSummary.orders}>
                      {statusWiseClients("refunded").clientsLength}
                    </h5>
                    <h6 className={orderSummary.percentage}>
                      {statusWiseClients("refunded").clientsRatio}
                    </h6>
                  </div>
                  <h6 className={`${orderSummary.amount} text-red-500`}>
                    {statusWiseClients("refunded").clientsWorth}
                  </h6>
                </div>
                <div className={orderSummary.chart}>
                  <LineChart width="100%" height={115} tempProp="Delivered" />
                </div>
              </div>
            </Box>
            <Box>
              <div className={orderSummary.wrapper}>
                <div className={`${orderSummary.icon} bg-red-50 text-red-600`}>
                  <HiXMark className="h-full w-full" />
                </div>
                <span className={orderSummary.title}>Clients chargedback</span>
              </div>
              <div className={orderSummary.body}>
                <div>
                  <div className={orderSummary.textInfo}>
                    <h5 className={orderSummary.orders}>
                      {statusWiseClients("chargeback").clientsLength}
                    </h5>
                    <h6 className={orderSummary.percentage}>
                      {statusWiseClients("chargeback").clientsRatio}
                    </h6>
                  </div>
                  <h6 className={`${orderSummary.amount} text-red-600`}>
                    {statusWiseClients("chargeback").clientsWorth}
                  </h6>
                </div>
                <div className={orderSummary.chart}>
                  <LineChart width="100%" height={115} tempProp="Delivered" />
                </div>
              </div>
            </Box>
          </div>
        </div>
        <div className="w-full xl:w-1/3">
          <h4 className="mb-3 text-xl font-semibold capitalize text-slate-900">
            Category Wise Clients
          </h4>
          <div className={categoryCard.container}>
            <div className={categoryCard.titleWrapper}>
              <img
                src={diamondIcon}
                alt="package icon"
                className={categoryCard.icon}
              />
              <div>
                <h5 className={categoryCard.title}>diamond</h5>
                <h6 className={categoryCard.subtitle}>
                  {categoryWiseClients("diamond").clientsRatio}
                </h6>
              </div>
            </div>
            <div className={categoryCard.infoWrapper}>
              <ul>
                <li className={categoryCard.infoTitle}>
                  {categoryWiseClients("diamond").clientsLength}
                </li>
                <li className={categoryCard.infoSubtitle}>Total Clients</li>
              </ul>
              <ul>
                <li className={categoryCard.infoTitle}>
                  {categoryWiseClients("diamond").clientsWorth}
                </li>
                <li className={categoryCard.infoSubtitle}>Clients Worth</li>
              </ul>
            </div>
          </div>
          <div className={categoryCard.container}>
            <div className={categoryCard.titleWrapper}>
              <img
                src={platinumIcon}
                alt="package icon"
                className={categoryCard.icon}
              />
              <div>
                <h5 className={categoryCard.title}>platinum</h5>
                <h6 className={categoryCard.subtitle}>
                  {categoryWiseClients("platinum").clientsRatio}
                </h6>
              </div>
            </div>
            <div className={categoryCard.infoWrapper}>
              <ul>
                <li className={categoryCard.infoTitle}>
                  {categoryWiseClients("platinum").clientsLength}
                </li>
                <li className={categoryCard.infoSubtitle}>Total Clients</li>
              </ul>
              <ul>
                <li className={categoryCard.infoTitle}>
                  {categoryWiseClients("platinum").clientsWorth}
                </li>
                <li className={categoryCard.infoSubtitle}>Clients Worth</li>
              </ul>
            </div>
          </div>
          <div className={categoryCard.container}>
            <div className={categoryCard.titleWrapper}>
              <img
                src={goldIcon}
                alt="package icon"
                className={categoryCard.icon}
              />
              <div>
                <h5 className={categoryCard.title}>gold</h5>
                <h6 className={categoryCard.subtitle}>
                  {categoryWiseClients("gold").clientsRatio}
                </h6>
              </div>
            </div>
            <div className={categoryCard.infoWrapper}>
              <ul>
                <li className={categoryCard.infoTitle}>
                  {categoryWiseClients("gold").clientsLength}
                </li>
                <li className={categoryCard.infoSubtitle}>Total Clients</li>
              </ul>
              <ul>
                <li className={categoryCard.infoTitle}>
                  {categoryWiseClients("gold").clientsWorth}
                </li>
                <li className={categoryCard.infoSubtitle}>Clients Worth</li>
              </ul>
            </div>
          </div>
          <div className={categoryCard.container}>
            <div className={categoryCard.titleWrapper}>
              <img
                src={silverIcon}
                alt="package icon"
                className={categoryCard.icon}
              />
              <div>
                <h5 className={categoryCard.title}>silver</h5>
                <h6 className={categoryCard.subtitle}>
                  {categoryWiseClients("silver").clientsRatio}
                </h6>
              </div>
            </div>
            <div className={categoryCard.infoWrapper}>
              <ul>
                <li className={categoryCard.infoTitle}>
                  {categoryWiseClients("silver").clientsLength}
                </li>
                <li className={categoryCard.infoSubtitle}>Total Clients</li>
              </ul>
              <ul>
                <li className={categoryCard.infoTitle}>
                  {categoryWiseClients("silver").clientsWorth}
                </li>
                <li className={categoryCard.infoSubtitle}>Clients Worth</li>
              </ul>
            </div>
          </div>
          <div className={categoryCard.container}>
            <div className={categoryCard.titleWrapper}>
              <img
                src={bronzeIcon}
                alt="package icon"
                className={categoryCard.icon}
              />
              <div>
                <h5 className={categoryCard.title}>bronze</h5>
                <h6 className={categoryCard.subtitle}>
                  {categoryWiseClients("bronze").clientsRatio}
                </h6>
              </div>
            </div>
            <div className={categoryCard.infoWrapper}>
              <ul>
                <li className={categoryCard.infoTitle}>
                  {categoryWiseClients("bronze").clientsLength}
                </li>
                <li className={categoryCard.infoSubtitle}>Total Clients</li>
              </ul>
              <ul>
                <li className={categoryCard.infoTitle}>
                  {categoryWiseClients("bronze").clientsWorth}
                </li>
                <li className={categoryCard.infoSubtitle}>Clients Worth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Box>
          <table>
            <thead>
              <tr>
                <th>Brands</th>
                {status.map((status) => {
                  return <th key={status._id}>{status.title}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => {
                return (
                  <tr key={brand._id}>
                    <td>{brand.title}</td>
                    {status.map((status) => {
                      return (
                        <td key={status._id}>
                          {
                            brandWiseClients2(brand._id, status._id)
                              .clientsLength
                          }
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={`${statusTable.row} ${statusTable.header.row}`}>
            <div className={statusTable.column}>
              <h5 className={statusTable.header.columnTitle}>Brand</h5>
            </div>
            <div
              className={`${statusTable.column} ${statusTable.header.column}`}
            >
              <h5
                className={`${statusTable.header.columnTitle} text-emerald-500`}
              >
                Delivered
              </h5>
              <ul
                className={`${statusTable.columnCells} rounded-md bg-emerald-50 text-emerald-700`}
              >
                <li className={statusTable.columnSpan}>clients</li>
                <li className={statusTable.columnSpan}>Percentage</li>
                <li className={statusTable.columnSpan}>Worth</li>
              </ul>
            </div>
            <div
              className={`${statusTable.column} ${statusTable.header.column}`}
            >
              <h5
                className={`${statusTable.header.columnTitle} text-amber-500`}
              >
                In Process
              </h5>
              <ul
                className={`${statusTable.columnCells} rounded-md bg-amber-50 text-amber-700`}
              >
                <li className={statusTable.columnSpan}>clients</li>
                <li className={statusTable.columnSpan}>Percentage</li>
                <li className={statusTable.columnSpan}>Worth</li>
              </ul>
            </div>
            <div
              className={`${statusTable.column} ${statusTable.header.column}`}
            >
              <h5 className={`${statusTable.header.columnTitle} text-red-500`}>
                Refund
              </h5>
              <ul
                className={`${statusTable.columnCells} rounded-md bg-red-50 text-red-700`}
              >
                <li className={statusTable.columnSpan}>clients</li>
                <li className={statusTable.columnSpan}>Percentage</li>
                <li className={statusTable.columnSpan}>Worth</li>
              </ul>
            </div>
            <div
              className={`${statusTable.column} ${statusTable.header.column}`}
            >
              <h5 className={`${statusTable.header.columnTitle} text-red-800`}>
                Chargeback
              </h5>
              <ul
                className={`${statusTable.columnCells} rounded-md bg-red-50 text-red-700`}
              >
                <li className={statusTable.columnSpan}>clients</li>
                <li className={statusTable.columnSpan}>Percentage</li>
                <li className={statusTable.columnSpan}>Worth</li>
              </ul>
            </div>
            <div
              className={`${statusTable.column} ${statusTable.header.column}`}
            >
              <h5
                className={`${statusTable.header.columnTitle} text-secondary`}
              >
                Total
              </h5>
              <ul
                className={`${statusTable.columnCells} rounded-md bg-secondary bg-opacity-10 text-secondary`}
              >
                <li className={statusTable.columnSpan}>clients</li>
                <li className={statusTable.columnSpan}>Percentage</li>
                <li className={statusTable.columnSpan}>Worth</li>
              </ul>
            </div>
          </div>
          {brands.map((brand) => {
            return (
              <div
                className={`${statusTable.row} ${statusTable.body.row}`}
                key={brand._id}
              >
                <div className={`${statusTable.column} gap-2`}>
                  <img
                    src={`http://localhost:8000/${brand.imgUrl}`}
                    alt={brand.title}
                    className={statusTable.icon}
                  />
                  <h5 className="overflow-hidden text-ellipsis whitespace-nowrap font-medium">
                    {brand.title}
                  </h5>
                </div>
                <ul className={statusTable.columnCells}>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "delivered").clientsLength}
                  </li>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "delivered").clientsRatio}
                  </li>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "delivered").clientsWorth}
                  </li>
                </ul>
                <ul className={statusTable.columnCells}>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "in process").clientsLength}
                  </li>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "in process").clientsRatio}
                  </li>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "in process").clientsWorth}
                  </li>
                </ul>
                <ul className={statusTable.columnCells}>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "refunded").clientsLength}
                  </li>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "refunded").clientsRatio}
                  </li>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "refunded").clientsWorth}
                  </li>
                </ul>
                <ul className={statusTable.columnCells}>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "chargeback").clientsLength}
                  </li>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "chargeback").clientsRatio}
                  </li>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "chargeback").clientsWorth}
                  </li>
                </ul>
                <ul className={statusTable.columnCells}>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "chargeback").clientsLength}
                  </li>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "chargeback").clientsRatio}
                  </li>
                  <li className={statusTable.columnSpan}>
                    {brandWiseClients(brand._id, "chargeback").clientsWorth}
                  </li>
                </ul>
              </div>
            );
          })}
          <div className={`${statusTable.row} ${statusTable.body.row}`}>
            <div className={`${statusTable.column} gap-2`}>
              <h5 className="font-medium">Total</h5>
            </div>
            <ul className={statusTable.columnCells}>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("delivered").clientsLength}
              </li>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("delivered").clientsRatio}
              </li>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("delivered").clientsWorth}
              </li>
            </ul>
            <ul className={statusTable.columnCells}>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("in process").clientsLength}
              </li>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("in process").clientsRatio}
              </li>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("in process").clientsWorth}
              </li>
            </ul>
            <ul className={statusTable.columnCells}>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("refunded").clientsLength}
              </li>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("refunded").clientsRatio}
              </li>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("refunded").clientsWorth}
              </li>
            </ul>
            <ul className={statusTable.columnCells}>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("chargeback").clientsLength}
              </li>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("chargeback").clientsRatio}
              </li>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("chargeback").clientsWorth}
              </li>
            </ul>
            <ul className={statusTable.columnCells}>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("chargeback").clientsLength}
              </li>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("chargeback").clientsRatio}
              </li>
              <li className={statusTable.columnSpan}>
                {statusWiseClients("chargeback").clientsWorth}
              </li>
            </ul>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Main;
