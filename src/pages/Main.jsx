import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiCheck, HiXMark, HiOutlineArrowPath } from "react-icons/hi2";
import LineChart from "../components/LineChart";
import Box from "../components/Box";
import formattedCurrency from "../utils/formattedCurrency";
import axios from "../config/axios";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

const styles = {
  sectionTitle: `mb-3 text-xl font-semibold capitalize text-slate-900`,
  orderSummary: {
    wrapper: `mb-5 flex items-center gap-3`,
    icon: `h-12 w-12 shrink-0 rounded-lg p-2`,
    iconThemes: {
      success: `bg-emerald-50 text-emerald-500`,
    },
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
  summaryTable: {
    wrapper: `w-full`,
    row: `grid grid-cols-9 gap-3 mt-2.5 items-center rounded-md bg-slate-100 p-2 ring-1 ring-slate-100`,
    rowHover: `hover:bg-slate-200`,
    rowTitleWrapper: `flex items-center gap-3 capitalize`,
    rowTitle: `overflow-hidden text-ellipsis whitespace-nowrap font-medium`,
    columnGrid: `grid grid-cols-3 text-center font-medium`,
    columnCell: `flex-1 text-xs 2xl:text-sm`,
    titleLg: "flex items-end justify-center text-lg font-semibold capitalize",
    icon: `h-8 w-8 rounded-md bg-white object-contain p-0.5`,
    footer: {
      row: `!ring-slate-200`,
    },
  },
};
const { orderSummary, categoryCard, summaryTable } = styles;

const Main = () => {
  const [clients, setClients] = useState([]);
  const [brands, setBrands] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [categories, setCategories] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: clients },
          { data: brands },
          { data: status },
          { data: categories },
        ] = await Promise.all([
          axios.get("/clients", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/admin-settings/brands", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/admin-settings/order-statuses", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/admin-settings/categories", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
        ]);
        setClients(clients);
        setBrands(brands);
        setStatuses(status);
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Category Wise Clients
  const categorySummary = (categoryId) => {
    const filteredClients = clients.filter(
      (client) => client.category?._id === categoryId
    );

    const clientsLength = filteredClients.length;

    const clientsWorth = formattedCurrency(
      filteredClients.reduce((pv, c) => pv + c.worth, 0)
    );

    const clientsRatio = `${
      parseInt(((clientsLength / clients.length) * 100).toFixed()) || 0
    }%`;

    return { clientsLength, clientsWorth, clientsRatio };
  };
  const categoryWiseClients = useCallback(
    (categoryId) => categorySummary(categoryId),
    [clients]
  );

  // Status Wise Clients
  const statusSummary = (status) => {
    const filteredClients = clients.filter(
      (client) => client.status?.title === status
    );

    const clientsLength = filteredClients.length;

    const clientsWorth = formattedCurrency(
      filteredClients.reduce((pv, c) => pv + c.worth, 0)
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

  // Two dimentional summary function
  const XYsummary = (x, y) => {
    const X = clients.filter((i) => i.brand._id === x);
    const XLength = X.length;
    const XWorth = formattedCurrency(X.reduce((pv, c) => pv + c.worth, 0));
    const XRatio = `${parseInt((XLength / clients.length) * 100) || 0}%`;

    const XY = clients.filter((i) => i.brand._id === x && i.status._id === y);
    const XYLength = XY.length;
    const XYWorth = formattedCurrency(XY.reduce((pv, c) => pv + c.worth, 0));
    const XYRatio = `${parseInt((XYLength / XLength) * 100) || 0}%`;

    const Y = clients.filter((i) => i.status._id === y);
    const YLength = Y.length;
    const YWorth = formattedCurrency(Y.reduce((pv, c) => pv + c.worth, 0));
    const YRatio = `${parseInt((YLength / clients.length) * 100) || 0}%`;

    const ZLength = clients.length;
    const ZWorth = formattedCurrency(
      clients.reduce((pv, c) => pv + c.worth, 0)
    );
    const ZRatio = `100%`;

    return {
      XYLength,
      XYRatio,
      XYWorth,
      XLength,
      XRatio,
      XWorth,
      YLength,
      YRatio,
      YWorth,
      ZLength,
      ZRatio,
      ZWorth,
    };
  };

  const tabularSummary = useCallback((x, y) => XYsummary(x, y), [clients]);

  return (
    <>
      <div className="flex flex-col items-start gap-5 xl:flex-row">
        <div className="w-full xl:w-2/3">
          <h4 className={styles.sectionTitle}>Clients Overview</h4>
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
          <h4 className={styles.sectionTitle}>Category Wise Summary</h4>
          {categories
            .map((category) => {
              return (
                <div className={categoryCard.container} key={category._id}>
                  <div className={categoryCard.titleWrapper}>
                    <img
                      src={`http://localhost:8000/${category.imgUrl}`}
                      alt={category.title}
                      className={categoryCard.icon}
                    />
                    <div>
                      <h5 className={categoryCard.title}>{category.title}</h5>
                      <h6 className={categoryCard.subtitle}>
                        {categoryWiseClients(category._id).clientsRatio}
                      </h6>
                    </div>
                  </div>
                  <div className={categoryCard.infoWrapper}>
                    <ul>
                      <li className={categoryCard.infoTitle}>
                        {categoryWiseClients(category._id).clientsLength}
                      </li>
                      <li className={categoryCard.infoSubtitle}>
                        Total Clients
                      </li>
                    </ul>
                    <ul>
                      <li className={categoryCard.infoTitle}>
                        {categoryWiseClients(category._id).clientsWorth}
                      </li>
                      <li className={categoryCard.infoSubtitle}>
                        Clients Worth
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
      <div className="mt-4">
        <h4 className={styles.sectionTitle}>Brand Wise Summary</h4>
        <Box>
          <table className={summaryTable.wrapper}>
            <thead>
              <tr className={summaryTable.row}>
                <th className={summaryTable.titleLg}>Brands</th>
                {statuses.map((status) => {
                  return (
                    <th key={status._id}>
                      <span className={`capitalize`}>{status.title}</span>
                      <div className={summaryTable.columnGrid}>
                        <span className={summaryTable.columnCell}>Clients</span>
                        <span className={summaryTable.columnCell}>%</span>
                        <span className={summaryTable.columnCell}>$</span>
                      </div>
                    </th>
                  );
                })}
                <th>
                  <span>Total</span>
                  <div className={summaryTable.columnGrid}>
                    <span className={summaryTable.columnCell}>Clients</span>
                    <span className={summaryTable.columnCell}>%</span>
                    <span className={summaryTable.columnCell}>$</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => {
                return (
                  <tr
                    key={brand._id}
                    className={`${summaryTable.row} ${summaryTable.rowHover}`}
                  >
                    <td className={summaryTable.rowTitleWrapper}>
                      <img
                        src={`http://localhost:8000/${brand.imgUrl}`}
                        alt={brand.title}
                        className={summaryTable.icon}
                      />
                      <h5 className={summaryTable.rowTitle}>{brand.title}</h5>
                    </td>
                    {statuses.map((status) => {
                      return (
                        <td key={status._id}>
                          <Link
                            to={`/summary?brand=${brand._id}&status=${status._id}`}
                            className={summaryTable.columnGrid}
                          >
                            <span className={summaryTable.columnCell}>
                              {tabularSummary(brand._id, status._id).XYLength}
                            </span>
                            <span className={summaryTable.columnCell}>
                              {tabularSummary(brand._id, status._id).XYRatio}
                            </span>
                            <span className={summaryTable.columnCell}>
                              {tabularSummary(brand._id, status._id).XYWorth}
                            </span>
                          </Link>
                        </td>
                      );
                    })}
                    <td>
                      <Link
                        to={`/summary?brand=${brand._id}`}
                        className={summaryTable.columnGrid}
                      >
                        <span className={summaryTable.columnCell}>
                          {tabularSummary(brand._id).XLength}
                        </span>
                        <span className={summaryTable.columnCell}>
                          {tabularSummary(brand._id).XRatio}
                        </span>
                        <span className={summaryTable.columnCell}>
                          {tabularSummary(brand._id).XWorth}
                        </span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr
                className={`${summaryTable.row} ${summaryTable.footer.row} ${summaryTable.rowHover}`}
              >
                <td className={summaryTable.titleLg}>Total</td>
                {statuses.map((status) => {
                  return (
                    <td key={status._id}>
                      <Link
                        to={`/summary?status=${status._id}`}
                        className={summaryTable.columnGrid}
                      >
                        <span className={summaryTable.columnCell}>
                          {tabularSummary("", status._id).YLength}
                        </span>
                        <span className={summaryTable.columnCell}>
                          {tabularSummary("", status._id).YRatio}
                        </span>
                        <span className={summaryTable.columnCell}>
                          {tabularSummary("", status._id).YWorth}
                        </span>
                      </Link>
                    </td>
                  );
                })}
                <td>
                  <Link to={`/summary/`} className={summaryTable.columnGrid}>
                    <span className={summaryTable.columnCell}>
                      {tabularSummary().ZLength}
                    </span>
                    <span className={summaryTable.columnCell}>
                      {tabularSummary().ZRatio}
                    </span>
                    <span className={summaryTable.columnCell}>
                      {tabularSummary().ZWorth}
                    </span>
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </Box>
      </div>
    </>
  );
};

export default Main;
