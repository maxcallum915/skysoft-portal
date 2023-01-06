import { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Box from "../../components/Box";
import Avatar from "../../components/Avatar";
import formattedCurrency from "../../utils/formattedCurrency";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

const styles = {
  sectionTitle: `mb-3 text-xl font-semibold capitalize text-slate-900`,
  brand: {
    wrapper: `mb-5 flex items-center gap-3`,
    logo: `h-20 w-20 shrink-0 rounded-md bg-slate-50 object-contain p-1`,
    title: `text-xl font-semibold text-slate-900 capitalize`,
    subtitle: `text-sm text-slate-400`,
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
const { summaryTable } = styles;

const ByBrand = () => {
  const [brands, setBrands] = useState([]);
  const [clients, setClients] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [users, setUsers] = useState([]);
  const { auth } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const q = Object.fromEntries(searchParams);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: brands },
          { data: categories },
          { data: status },
          { data: users },
          { data: summary },
        ] = await Promise.all([
          axios.get("/admin-settings/brands", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/admin-settings/categories", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/admin-settings/order-statuses", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/users/managers", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/summary", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
            params: q,
          }),
        ]);
        setBrands(brands);
        setCategories(categories);
        setStatuses(status);
        setUsers(users);
        setClients(summary);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Two dimentional summary function
  const XYsummary = (XQuery, YQuery, x, y) => {
    const X = clients.filter((i) => i[XQuery]._id === x);
    const XLength = X.length;
    const XWorth = formattedCurrency(X.reduce((pv, c) => pv + c.worth, 0));
    const XRatio = `${parseInt((XLength / clients.length) * 100) || 0}%`;

    const XY = clients.filter(
      (i) => i[XQuery]._id === x && i[YQuery]._id === y
    );
    const XYLength = XY.length;
    const XYWorth = formattedCurrency(XY.reduce((pv, c) => pv + c.worth, 0));
    const XYRatio = `${parseInt((XYLength / XLength) * 100) || 0}%`;

    const Y = clients.filter((i) => i[YQuery]._id === y);
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

  const categorySummary = useCallback(
    (XQuery, YQuery, x, y) => XYsummary(XQuery, YQuery, x, y),
    [clients]
  );

  const usersSummary = useCallback(
    (XQuery, YQuery, x, y) => XYsummary(XQuery, YQuery, x, y),
    [users]
  );

  return (
    <>
      <div>
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
                            to={`/summary/byClient?brand=${brand._id}&status=${
                              status._id
                            }&category=${searchParams.get("category")}`}
                            className={summaryTable.columnGrid}
                          >
                            <span className={summaryTable.columnCell}>
                              {
                                categorySummary(
                                  "brand",
                                  "status",
                                  brand._id,
                                  status._id
                                ).XYLength
                              }
                            </span>
                            <span className={summaryTable.columnCell}>
                              {
                                categorySummary(
                                  "brand",
                                  "status",
                                  brand._id,
                                  status._id
                                ).XYRatio
                              }
                            </span>
                            <span className={summaryTable.columnCell}>
                              {
                                categorySummary(
                                  "brand",
                                  "status",
                                  brand._id,
                                  status._id
                                ).XYWorth
                              }
                            </span>
                          </Link>
                        </td>
                      );
                    })}
                    <td>
                      <Link
                        to={`/summary/byClient?brand=${
                          brand._id
                        }&category=${searchParams.get("category")}`}
                        className={summaryTable.columnGrid}
                      >
                        <span className={summaryTable.columnCell}>
                          {
                            categorySummary("brand", "status", brand._id)
                              .XLength
                          }
                        </span>
                        <span className={summaryTable.columnCell}>
                          {categorySummary("brand", "status", brand._id).XRatio}
                        </span>
                        <span className={summaryTable.columnCell}>
                          {categorySummary("brand", "status", brand._id).XWorth}
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
                        to={`/summary/byClient?status=${
                          status._id
                        }&category=${searchParams.get("category")}`}
                        className={summaryTable.columnGrid}
                      >
                        <span className={summaryTable.columnCell}>
                          {
                            categorySummary("brand", "status", "", status._id)
                              .YLength
                          }
                        </span>
                        <span className={summaryTable.columnCell}>
                          {
                            categorySummary("brand", "status", "", status._id)
                              .YRatio
                          }
                        </span>
                        <span className={summaryTable.columnCell}>
                          {
                            categorySummary("brand", "status", "", status._id)
                              .YWorth
                          }
                        </span>
                      </Link>
                    </td>
                  );
                })}
                <td>
                  <Link
                    to={`/summary/byClient?category=${searchParams.get(
                      "category"
                    )}`}
                    className={summaryTable.columnGrid}
                  >
                    <span className={summaryTable.columnCell}>
                      {categorySummary("brand", "status").ZLength}
                    </span>
                    <span className={summaryTable.columnCell}>
                      {categorySummary("brand", "status").ZRatio}
                    </span>
                    <span className={summaryTable.columnCell}>
                      {categorySummary("brand", "status").ZWorth}
                    </span>
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </Box>
      </div>

      <div className="mt-6">
        <h4 className={styles.sectionTitle}>Manager Wise Summary</h4>
        <Box>
          <table className={summaryTable.wrapper}>
            <thead>
              <tr className={summaryTable.row}>
                <th className={summaryTable.titleLg}>Users</th>
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
              {users.map((user) => {
                return (
                  <tr
                    key={user._id}
                    className={`${summaryTable.row} ${summaryTable.rowHover}`}
                  >
                    <td className={summaryTable.rowTitleWrapper}>
                      <Avatar title={user.name} rounded />
                      <h5 className={summaryTable.rowTitle}>{user.name}</h5>
                    </td>
                    {statuses.map((status) => {
                      return (
                        <td key={status._id}>
                          <Link
                            to={`/summary/byClient?user=${user._id}&status=${
                              status._id
                            }&category=${searchParams.get("category")}`}
                            className={summaryTable.columnGrid}
                          >
                            <span className={summaryTable.columnCell}>
                              {
                                usersSummary(
                                  "user",
                                  "status",
                                  user._id,
                                  status._id
                                ).XYLength
                              }
                            </span>
                            <span className={summaryTable.columnCell}>
                              {
                                usersSummary(
                                  "user",
                                  "status",
                                  user._id,
                                  status._id
                                ).XYRatio
                              }
                            </span>
                            <span className={summaryTable.columnCell}>
                              {
                                usersSummary(
                                  "user",
                                  "status",
                                  user._id,
                                  status._id
                                ).XYWorth
                              }
                            </span>
                          </Link>
                        </td>
                      );
                    })}
                    <td>
                      <Link
                        to={`/summary/byClient?user=${
                          user._id
                        }&category=${searchParams.get("category")}`}
                        className={summaryTable.columnGrid}
                      >
                        <span className={summaryTable.columnCell}>
                          {usersSummary("user", "status", user._id).XLength}
                        </span>
                        <span className={summaryTable.columnCell}>
                          {usersSummary("user", "status", user._id).XRatio}
                        </span>
                        <span className={summaryTable.columnCell}>
                          {usersSummary("user", "status", user._id).XWorth}
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
                        to={`/summary/byClient?status=${
                          status._id
                        }&category=${searchParams.get("category")}`}
                        className={summaryTable.columnGrid}
                      >
                        <span className={summaryTable.columnCell}>
                          {
                            usersSummary("user", "status", "", status._id)
                              .YLength
                          }
                        </span>
                        <span className={summaryTable.columnCell}>
                          {
                            usersSummary("user", "status", "", status._id)
                              .YRatio
                          }
                        </span>
                        <span className={summaryTable.columnCell}>
                          {
                            usersSummary("user", "status", "", status._id)
                              .YWorth
                          }
                        </span>
                      </Link>
                    </td>
                  );
                })}
                <td>
                  <Link
                    to={`/summary/byClient?category=${searchParams.get(
                      "category"
                    )}`}
                    className={summaryTable.columnGrid}
                  >
                    <span className={summaryTable.columnCell}>
                      {usersSummary("user", "status").ZLength}
                    </span>
                    <span className={summaryTable.columnCell}>
                      {usersSummary("user", "status").ZRatio}
                    </span>
                    <span className={summaryTable.columnCell}>
                      {usersSummary("user", "status").ZWorth}
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

export default ByBrand;
