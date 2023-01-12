import { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiCheck,
  HiXMark,
  HiOutlineArrowPath,
  HiOutlineExclamationCircle,
  HiOutlineArrowDownOnSquare,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";
import Box from "../components/Box";
import Loader from "../components/Loader";
import RangePicker from "../components/RangePicker";
import formattedCurrency from "../utils/formattedCurrency";
import formattedNumber from "../utils/formattedNumber";
import axios from "../config/axios";
import useAuth from "../hooks/useAuth";

const styles = {
  sectionTitle: `mb-3 text-xl font-semibold capitalize text-slate-900`,
  statusCard: {
    wrapper: `mb-5 flex items-center gap-3`,
    icon: `h-12 w-12 shrink-0 rounded-lg p-2`,
    title: `text-xl font-semibold capitalize text-slate-900`,
    body: `flex flex-col justify-between gap-4 2xl:flex-row 2xl:items-end 2xl:gap-5`,
    textInfo: `mb-1 flex items-end gap-1.5`,
    orders: `text-3xl font-bold leading-none text-slate-900`,
    percentage: `font-medium text-slate-400`,
    amount: `text-lg font-semibold leading-none`,
    chart: `2xl:w-2/3`,
    theme: {
      bg: {
        success: `bg-emerald-50`,
        warning: `bg-amber-50`,
        danger: `bg-red-50`,
        default: `bg-slate-100`,
      },
      text: {
        success: `text-emerald-500`,
        warning: `text-amber-500`,
        danger: `text-red-500`,
        default: `text-slate-500`,
      },
    },
  },
  categoryCard: {
    container: `flex cursor-pointer select-none flex-col items-center gap-3 rounded-lg py-3 pl-2 pr-3 bg-white hover:bg-slate-100 xl:flex-row ring-1 ring-slate-200`,
    titleWrapper: `flex w-full items-center gap-2 2xl:w-40`,
    icon: `h-14 w-14 shrink-0 object-contain`,
    title: `text-lg font-bold leading-tight capitalize text-slate-900`,
    subtitle: `font-semibold text-slate-400`,
    infoWrapper: `flex w-full items-center justify-around gap-4 rounded-md text-center 2xl:justify-end`,
    infoTitle: `mb-1 text-xl font-bold leading-none text-secondary`,
    infoSubtitle: `text-xs font-medium capitalize text-slate-900`,
  },
  summaryTable: {
    wrapper: `w-full`,
    row: `grid grid-cols-9 gap-2 mt-2.5 items-center rounded-md bg-slate-100 p-2 ring-1 ring-slate-100`,
    rowHover: `hover:bg-slate-200`,
    rowTitleWrapper: `flex items-center gap-3 capitalize`,
    rowTitle: `overflow-hidden text-ellipsis whitespace-nowrap font-medium`,
    columnGrid: `grid grid-cols-3 rounded-md p-1 text-center font-medium`,
    columnCell: `flex-1 text-xs 2xl:text-sm`,
    columnSeparator: `relative after:absolute after:bottom-0 after:-left-2 after:h-6 after:w-1 after:bg-slate-400`,
    titleLg: "flex items-end justify-center text-lg font-semibold capitalize",
    icon: `h-8 w-8 rounded-md bg-white object-contain p-0.5 shrink-0`,
    header: {
      row: `!bg-transparent !p-0 !ring-0`,
    },
    body: "max-h-[400px] overflow-y-auto block custom-scrollbar relative w-[calc(100%_+_0.5rem)] pr-2",
    footer: {
      row: `!ring-slate-200`,
    },
  },
  theme: {
    bg: {
      success: `bg-emerald-100`,
      warning: `bg-amber-100`,
      danger: `bg-red-100`,
      default: `bg-slate-100`,
      secondary: `bg-secondary bg-opacity-10`,
    },
    text: {
      success: `text-emerald-500`,
      warning: `text-amber-500`,
      danger: `text-red-500`,
      default: `text-slate-500`,
      secondary: `text-secondary`,
    },
  },
};
const { statusCard, categoryCard, summaryTable, theme } = styles;

const Main = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [brands, setBrands] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: clients },
          { data: brands },
          { data: status },
          { data: categories },
        ] = await Promise.all([
          axios.get("/api/clients", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/api/brands", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/api/order-statuses", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/api/categories", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
        ]);
        setClients(clients);
        setFilteredClients(clients);
        setBrands(brands);
        setStatuses(status);
        setCategories(categories);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // One dimentional summary function
  const XSummary = (XQuery, x) => {
    const X = filteredClients.filter((client) => client[XQuery]._id === x);

    const XLength = formattedNumber(X.length);
    const XWorth = formattedCurrency(X.reduce((pv, c) => pv + c.worth, 0));
    const XRatio = `${
      parseInt(((XLength / filteredClients.length) * 100).toFixed()) || 0
    }%`;

    return { XLength, XWorth, XRatio };
  };
  const statusWiseClients = useCallback(
    (XQuery, x) => XSummary(XQuery, x),
    [filteredClients]
  );
  const categoryWiseClients = useCallback(
    (XQuery, x) => XSummary(XQuery, x),
    [filteredClients]
  );

  // Two dimentional summary function
  const XYsummary = (XQuery, YQuery, x, y) => {
    const X = filteredClients.filter((i) => i[XQuery]._id === x);
    const XLength = formattedNumber(X.length);
    const XWorth = formattedCurrency(X.reduce((pv, c) => pv + c.worth, 0));
    const XRatio = `${
      parseInt((XLength / filteredClients.length) * 100) || 0
    }%`;

    const Y = filteredClients.filter((i) => i[YQuery]._id === y);
    const YLength = formattedNumber(Y.length);
    const YWorth = formattedCurrency(Y.reduce((pv, c) => pv + c.worth, 0));
    const YRatio = `${
      parseInt((YLength / filteredClients.length) * 100) || 0
    }%`;

    const XY = filteredClients.filter(
      (i) => i[XQuery]._id === x && i[YQuery]._id === y
    );
    const XYLength = formattedNumber(XY.length);
    const XYWorth = formattedCurrency(XY.reduce((pv, c) => pv + c.worth, 0));
    const XYRatio = `${parseInt((XYLength / XLength) * 100) || 0}%`;

    const ZLength = formattedNumber(filteredClients.length);
    const ZWorth = formattedCurrency(
      filteredClients.reduce((pv, c) => pv + c.worth, 0)
    );
    const ZRatio = `100%`;

    return {
      XLength,
      XRatio,
      XWorth,
      YLength,
      YRatio,
      YWorth,
      XYLength,
      XYRatio,
      XYWorth,
      ZLength,
      ZRatio,
      ZWorth,
    };
  };
  const brandSummary = useCallback(
    (XQuery, YQuery, x, y) => XYsummary(XQuery, YQuery, x, y),
    [filteredClients]
  );

  return (
    <>
      {isLoading &&
      (!clients.length ||
        !brands.length ||
        !statuses.length ||
        !categories.length) ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-end">
            <RangePicker array={clients} setState={setFilteredClients} />
          </div>
          <div className="mb-6">
            <h4 className={styles.sectionTitle}>Brands Wise Summary</h4>
            <Box>
              <table className={summaryTable.wrapper}>
                <thead>
                  <tr
                    className={`${summaryTable.row} ${summaryTable.header.row}`}
                  >
                    <th className={summaryTable.titleLg}>Brands</th>
                    {statuses.map((status) => {
                      return (
                        <th key={status._id}>
                          <span
                            className={`capitalize ${
                              theme.text[status.className]
                            }`}
                          >
                            {status.title}
                          </span>
                          <div
                            className={`${summaryTable.columnGrid} ${
                              theme.bg[status.className]
                            } ${theme.text[status.className]}`}
                          >
                            <span className={summaryTable.columnCell}>
                              Clients
                            </span>
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
                <tbody className={summaryTable.body}>
                  {brands.map((brand) => {
                    return (
                      <tr
                        key={brand._id}
                        className={`${summaryTable.row} ${summaryTable.rowHover}`}
                      >
                        <td className={summaryTable.rowTitleWrapper}>
                          <img
                            src={`https://backend-production-56ca.up.railway.app/${brand.imgUrl}`}
                            alt={brand.title}
                            className={summaryTable.icon}
                          />
                          <h5 className={summaryTable.rowTitle}>
                            {brand.title}
                          </h5>
                        </td>
                        {statuses.map((status) => {
                          return (
                            <td
                              key={status._id}
                              className={`${summaryTable.columnGrid} ${
                                brandSummary(
                                  "brand",
                                  "status",
                                  brand._id,
                                  status._id
                                ).XYLength > 0
                                  ? "cursor-pointer"
                                  : ""
                              }`}
                              onClick={() =>
                                brandSummary(
                                  "brand",
                                  "status",
                                  brand._id,
                                  status._id
                                ).XYLength > 0 &&
                                navigate(
                                  `/summary/byBrand?brand=${brand._id}&status=${status._id}`
                                )
                              }
                            >
                              <span className={summaryTable.columnCell}>
                                {
                                  brandSummary(
                                    "brand",
                                    "status",
                                    brand._id,
                                    status._id
                                  ).XYLength
                                }
                              </span>
                              <span className={summaryTable.columnCell}>
                                {
                                  brandSummary(
                                    "brand",
                                    "status",
                                    brand._id,
                                    status._id
                                  ).XYRatio
                                }
                              </span>
                              <span className={summaryTable.columnCell}>
                                {
                                  brandSummary(
                                    "brand",
                                    "status",
                                    brand._id,
                                    status._id
                                  ).XYWorth
                                }
                              </span>
                            </td>
                          );
                        })}
                        <td
                          className={`${summaryTable.columnGrid} ${
                            brandSummary("brand", "status", brand._id).XLength >
                            0
                              ? "cursor-pointer"
                              : ""
                          }`}
                          onClick={() => {
                            brandSummary("brand", "status", brand._id).XLength >
                              0 &&
                              navigate(`/summary/byBrand?brand=${brand._id}`);
                          }}
                        >
                          <span className={summaryTable.columnCell}>
                            {brandSummary("brand", "status", brand._id).XLength}
                          </span>
                          <span className={summaryTable.columnCell}>
                            {brandSummary("brand", "status", brand._id).XRatio}
                          </span>
                          <span className={summaryTable.columnCell}>
                            {brandSummary("brand", "status", brand._id).XWorth}
                          </span>
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
                        <td
                          key={status._id}
                          className={`${summaryTable.columnGrid} ${
                            brandSummary("brand", "status", "", status._id)
                              .YLength > 0
                              ? "cursor-pointer"
                              : ""
                          }`}
                          onClick={() => {
                            brandSummary("brand", "status", "", status._id)
                              .YLength > 0 &&
                              navigate(`/summary/byBrand?status=${status._id}`);
                          }}
                        >
                          <span className={summaryTable.columnCell}>
                            {
                              brandSummary("brand", "status", "", status._id)
                                .YLength
                            }
                          </span>
                          <span className={summaryTable.columnCell}>
                            {
                              brandSummary("brand", "status", "", status._id)
                                .YRatio
                            }
                          </span>
                          <span className={summaryTable.columnCell}>
                            {
                              brandSummary("brand", "status", "", status._id)
                                .YWorth
                            }
                          </span>
                        </td>
                      );
                    })}
                    <td
                      className={`${summaryTable.columnGrid} ${
                        brandSummary("brand", "status").ZLength > 0
                          ? "cursor-pointer"
                          : ""
                      }`}
                      onClick={() => {
                        brandSummary("brand", "status").ZLength > 0 &&
                          navigate(`/summary/byBrand/`);
                      }}
                    >
                      <span className={summaryTable.columnCell}>
                        {brandSummary("brand", "status").ZLength}
                      </span>
                      <span className={summaryTable.columnCell}>
                        {brandSummary("brand", "status").ZRatio}
                      </span>
                      <span className={summaryTable.columnCell}>
                        {brandSummary("brand", "status").ZWorth}
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </Box>
          </div>
          <div className="flex flex-col items-start gap-5 xl:flex-row">
            <div className="w-full xl:w-2/3">
              <h4 className={styles.sectionTitle}>Status Wise Summary</h4>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {statuses.map((status) => {
                  return (
                    <Box key={status._id}>
                      <div className={statusCard.wrapper}>
                        <div
                          className={`${statusCard.icon} ${
                            theme.bg[status.className]
                          } ${theme.text[status.className]}`}
                        >
                          {status.className === "success" && (
                            <HiCheck className="h-full w-full" />
                          )}
                          {status.className === "secondary" && (
                            <HiOutlineQuestionMarkCircle className="h-full w-full" />
                          )}
                          {status.className === "warning" &&
                            status.title !== "hold" && (
                              <HiOutlineArrowPath className="h-full w-full" />
                            )}
                          {status.className === "warning" &&
                            status.title === "hold" && (
                              <HiOutlineArrowDownOnSquare className="h-full w-full" />
                            )}
                          {status.className === "danger" &&
                            !status.title.includes("concern") && (
                              <HiXMark className="h-full w-full" />
                            )}
                          {status.className === "danger" &&
                            status.title.includes("concern") && (
                              <HiOutlineExclamationCircle className="h-full w-full" />
                            )}
                          {status.className === "default" && (
                            <HiXMark className="h-full w-full" />
                          )}
                        </div>
                        <span className={statusCard.title}>{status.title}</span>
                      </div>
                      <div className={statusCard.body}>
                        <div>
                          <div className={statusCard.textInfo}>
                            <h5 className={statusCard.orders}>
                              {statusWiseClients("status", status._id).XLength}
                            </h5>
                            <h6 className={statusCard.percentage}>
                              {statusWiseClients("status", status._id).XRatio}
                            </h6>
                          </div>
                          <h6
                            className={`${statusCard.amount} ${
                              theme.text[status.className]
                            }`}
                          >
                            {statusWiseClients("status", status._id).XWorth}
                          </h6>
                        </div>
                      </div>
                    </Box>
                  );
                })}
              </div>
            </div>
            <div className="w-full xl:w-1/3">
              <h4 className={styles.sectionTitle}>Category Wise Summary</h4>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
                {categories
                  .map((category) => {
                    return (
                      <Link
                        to={`/summary/byCategory?category=${category._id}`}
                        className={categoryCard.container}
                        key={category._id}
                      >
                        <div className={categoryCard.titleWrapper}>
                          <img
                            src={`https://backend-production-56ca.up.railway.app/${category.imgUrl}`}
                            alt={category.title}
                            className={categoryCard.icon}
                          />
                          <div>
                            <h5 className={categoryCard.title}>
                              {category.title}
                            </h5>
                            <h6 className={categoryCard.subtitle}>
                              {
                                categoryWiseClients("category", category._id)
                                  .XRatio
                              }
                            </h6>
                          </div>
                        </div>
                        <div className={categoryCard.infoWrapper}>
                          <ul>
                            <li className={categoryCard.infoTitle}>
                              {
                                categoryWiseClients("category", category._id)
                                  .XLength
                              }
                            </li>
                            <li className={categoryCard.infoSubtitle}>
                              Total Clients
                            </li>
                          </ul>
                          <ul>
                            <li className={categoryCard.infoTitle}>
                              {
                                categoryWiseClients("category", category._id)
                                  .XWorth
                              }
                            </li>
                            <li className={categoryCard.infoSubtitle}>
                              Clients Worth
                            </li>
                          </ul>
                        </div>
                      </Link>
                    );
                  })
                  .reverse()}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Main;
