import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { HiUsers } from "react-icons/hi2";
import Box from "../../components/Box";
import Avatar from "../../components/Avatar";
import EmptyPlaceholder from "../../components/EmptyPlaceholder";
import Loader from "../../components/Loader";
import RangePicker from "../../components/RangePicker";
import formattedCurrency from "../../utils/formattedCurrency";
import formattedNumber from "../../utils/formattedNumber";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

const styles = {
  sectionTitle: `mb-3 text-xl font-semibold capitalize text-slate-900`,
  infoChip: {
    wrapper: `mb-5 flex items-center gap-3`,
    logo: `h-20 w-20 shrink-0 rounded-md bg-slate-50 object-contain p-1`,
    title: `text-xl font-semibold text-slate-900 capitalize`,
    subtitle: `text-sm text-slate-400`,
  },
  summaryTable: {
    wrapper: `w-full`,
    row: `grid grid-cols-9 gap-2 mt-2.5 items-center rounded-md bg-slate-100 p-2 ring-1 ring-slate-100`,
    rowHover: `hover:bg-slate-200`,
    rowTitleWrapper: `flex items-center gap-3 capitalize`,
    rowTitle: `overflow-hidden text-ellipsis whitespace-nowrap font-medium`,
    columnGrid: `grid grid-cols-3 text-center font-medium p-1 rounded-md`,
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
const { summaryTable, infoChip, theme } = styles;

const ByBrand = () => {
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [users, setUsers] = useState([]);
  const [clients, setClients] = useState([]);
  const [filteredclients, setFilteredClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const q = Object.fromEntries(searchParams);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: brands },
          { data: status },
          { data: users },
          { data: clients },
          { data: category },
        ] = await Promise.all([
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
          axios.get("/api/users/managers", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/api/summary", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
            params: q,
          }),
          axios.get(`/api/categories/${searchParams.get("category")}`, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
        ]);
        setBrands(brands);
        setCategory(category);
        setStatuses(status);
        setUsers(users);
        setClients(clients);
        setFilteredClients(clients);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Two dimentional summary function
  const XYsummary = (XQuery, YQuery, x, y) => {
    const X = filteredclients.filter((i) => i[XQuery]._id === x);
    const XLength = formattedNumber(X.length);
    const XWorth = formattedCurrency(X.reduce((pv, c) => pv + c.worth, 0));
    const XRatio = `${
      parseInt((XLength / filteredclients.length) * 100) || 0
    }%`;

    const Y = filteredclients.filter((i) => i[YQuery]._id === y);
    const YLength = formattedNumber(Y.length);
    const YWorth = formattedCurrency(Y.reduce((pv, c) => pv + c.worth, 0));
    const YRatio = `${
      parseInt((YLength / filteredclients.length) * 100) || 0
    }%`;

    const XY = filteredclients.filter(
      (i) => i[XQuery]._id === x && i[YQuery]._id === y
    );
    const XYLength = formattedNumber(XY.length);
    const XYWorth = formattedCurrency(XY.reduce((pv, c) => pv + c.worth, 0));
    const XYRatio = `${parseInt((XYLength / XLength) * 100) || 0}%`;

    const ZLength = formattedNumber(filteredclients.length);
    const ZWorth = formattedCurrency(
      filteredclients.reduce((pv, c) => pv + c.worth, 0)
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
  const categorySummary = useCallback(
    (XQuery, YQuery, x, y) => XYsummary(XQuery, YQuery, x, y),
    [filteredclients]
  );
  const usersSummary = useCallback(
    (XQuery, YQuery, x, y) => XYsummary(XQuery, YQuery, x, y),
    [filteredclients]
  );

  return (
    <>
      {isLoading &&
      (!clients.length ||
        !statuses.length ||
        !brands.length ||
        !users.length) ? (
        <Loader />
      ) : (
        <>
          {clients.length > 0 ? (
            <>
              <div>
                <div className={infoChip.wrapper}>
                  <img
                    src={`https://backend-production-56ca.up.railway.app/${category.imgUrl}`}
                    className={infoChip.logo}
                  />
                  <div className="mr-auto">
                    <h5 className={infoChip.title}>{category.title}</h5>
                    <h6 className={infoChip.subtitle}>{`${formattedCurrency(
                      category.minValue
                    )} - ${
                      category.title === "diamond"
                        ? "Above"
                        : formattedCurrency(category.maxValue)
                    }`}</h6>
                  </div>
                  <RangePicker array={clients} setState={setFilteredClients} />
                </div>
                <h4 className={styles.sectionTitle}>Brand Wise Summary</h4>
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
                                <span className={summaryTable.columnCell}>
                                  %
                                </span>
                                <span className={summaryTable.columnCell}>
                                  $
                                </span>
                              </div>
                            </th>
                          );
                        })}
                        <th>
                          <span>Total</span>
                          <div className={summaryTable.columnGrid}>
                            <span className={summaryTable.columnCell}>
                              Clients
                            </span>
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
                                    categorySummary(
                                      "brand",
                                      "status",
                                      brand._id,
                                      status._id
                                    ).XYLength > 0
                                      ? "cursor-pointer"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    categorySummary(
                                      "brand",
                                      "status",
                                      brand._id,
                                      status._id
                                    ).XYLength > 0 &&
                                      navigate(
                                        `/summary/byClient?brand=${
                                          brand._id
                                        }&status=${
                                          status._id
                                        }&category=${searchParams.get(
                                          "category"
                                        )}`
                                      );
                                  }}
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
                                </td>
                              );
                            })}
                            <td
                              className={`${summaryTable.columnGrid} ${
                                categorySummary("brand", "status", brand._id)
                                  .XLength > 0
                                  ? "cursor-pointer"
                                  : ""
                              }`}
                              onClick={() => {
                                categorySummary("brand", "status", brand._id)
                                  .XLength > 0 &&
                                  navigate(
                                    `/summary/byClient?brand=${
                                      brand._id
                                    }&category=${searchParams.get("category")}`
                                  );
                              }}
                            >
                              <span className={summaryTable.columnCell}>
                                {
                                  categorySummary("brand", "status", brand._id)
                                    .XLength
                                }
                              </span>
                              <span className={summaryTable.columnCell}>
                                {
                                  categorySummary("brand", "status", brand._id)
                                    .XRatio
                                }
                              </span>
                              <span className={summaryTable.columnCell}>
                                {
                                  categorySummary("brand", "status", brand._id)
                                    .XWorth
                                }
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
                                categorySummary(
                                  "brand",
                                  "status",
                                  "",
                                  status._id
                                ).YLength > 0
                                  ? "cursor-pointer"
                                  : ""
                              }`}
                              onClick={() => {
                                categorySummary(
                                  "brand",
                                  "status",
                                  "",
                                  status._id
                                ).YLength > 0 &&
                                  navigate(
                                    `/summary/byClient?status=${
                                      status._id
                                    }&category=${searchParams.get("category")}`
                                  );
                              }}
                            >
                              <span className={summaryTable.columnCell}>
                                {
                                  categorySummary(
                                    "brand",
                                    "status",
                                    "",
                                    status._id
                                  ).YLength
                                }
                              </span>
                              <span className={summaryTable.columnCell}>
                                {
                                  categorySummary(
                                    "brand",
                                    "status",
                                    "",
                                    status._id
                                  ).YRatio
                                }
                              </span>
                              <span className={summaryTable.columnCell}>
                                {
                                  categorySummary(
                                    "brand",
                                    "status",
                                    "",
                                    status._id
                                  ).YWorth
                                }
                              </span>
                            </td>
                          );
                        })}
                        <td
                          className={`${summaryTable.columnGrid} ${
                            categorySummary("brand", "status").ZLength > 0
                              ? "cursor-pointer"
                              : ""
                          }`}
                          onClick={() => {
                            categorySummary("brand", "status").ZLength > 0 &&
                              navigate(
                                `/summary/byClient?category=${searchParams.get(
                                  "category"
                                )}`
                              );
                          }}
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
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </Box>
              </div>

              {auth.role !== "user" && (
                <div className="mt-6">
                  <h4 className={styles.sectionTitle}>Manager Wise Summary</h4>
                  <Box>
                    <table className={summaryTable.wrapper}>
                      <thead>
                        <tr
                          className={`${summaryTable.row} ${summaryTable.header.row}`}
                        >
                          <th className={summaryTable.titleLg}>Users</th>
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
                                  <span className={summaryTable.columnCell}>
                                    %
                                  </span>
                                  <span className={summaryTable.columnCell}>
                                    $
                                  </span>
                                </div>
                              </th>
                            );
                          })}
                          <th>
                            <span>Total</span>
                            <div className={summaryTable.columnGrid}>
                              <span className={summaryTable.columnCell}>
                                Clients
                              </span>
                              <span className={summaryTable.columnCell}>%</span>
                              <span className={summaryTable.columnCell}>$</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className={summaryTable.body}>
                        {users.map((user) => {
                          return (
                            <tr
                              key={user._id}
                              className={`${summaryTable.row} ${summaryTable.rowHover}`}
                            >
                              <td className={summaryTable.rowTitleWrapper}>
                                <Avatar title={user.name} rounded />
                                <h5 className={summaryTable.rowTitle}>
                                  {user.name}
                                </h5>
                              </td>
                              {statuses.map((status) => {
                                return (
                                  <td
                                    key={status._id}
                                    className={`${summaryTable.columnGrid} ${
                                      usersSummary(
                                        "user",
                                        "status",
                                        user._id,
                                        status._id
                                      ).XYLength > 0
                                        ? "cursor-pointer"
                                        : ""
                                    }`}
                                    onClick={() => {
                                      usersSummary(
                                        "user",
                                        "status",
                                        user._id,
                                        status._id
                                      ).XYLength > 0 &&
                                        navigate(
                                          `/summary/byClient?user=${
                                            user._id
                                          }&status=${
                                            status._id
                                          }&category=${searchParams.get(
                                            "category"
                                          )}`
                                        );
                                    }}
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
                                  </td>
                                );
                              })}
                              <td
                                className={`${summaryTable.columnGrid} ${
                                  usersSummary("user", "status", user._id)
                                    .XLength > 0
                                    ? "cursor-pointer"
                                    : ""
                                }`}
                                onClick={() => {
                                  usersSummary("user", "status", user._id)
                                    .XLength > 0 &&
                                    navigate(
                                      `/summary/byClient?user=${
                                        user._id
                                      }&category=${searchParams.get(
                                        "category"
                                      )}`
                                    );
                                }}
                              >
                                <span className={summaryTable.columnCell}>
                                  {
                                    usersSummary("user", "status", user._id)
                                      .XLength
                                  }
                                </span>
                                <span className={summaryTable.columnCell}>
                                  {
                                    usersSummary("user", "status", user._id)
                                      .XRatio
                                  }
                                </span>
                                <span className={summaryTable.columnCell}>
                                  {
                                    usersSummary("user", "status", user._id)
                                      .XWorth
                                  }
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
                                  usersSummary("user", "status", "", status._id)
                                    .YLength > 0
                                    ? "cursor-pointer"
                                    : ""
                                }`}
                                onClick={() => {
                                  usersSummary("user", "status", "", status._id)
                                    .YLength > 0 &&
                                    navigate(
                                      `/summary/byClient?status=${
                                        status._id
                                      }&category=${searchParams.get(
                                        "category"
                                      )}`
                                    );
                                }}
                              >
                                <span className={summaryTable.columnCell}>
                                  {
                                    usersSummary(
                                      "user",
                                      "status",
                                      "",
                                      status._id
                                    ).YLength
                                  }
                                </span>
                                <span className={summaryTable.columnCell}>
                                  {
                                    usersSummary(
                                      "user",
                                      "status",
                                      "",
                                      status._id
                                    ).YRatio
                                  }
                                </span>
                                <span className={summaryTable.columnCell}>
                                  {
                                    usersSummary(
                                      "user",
                                      "status",
                                      "",
                                      status._id
                                    ).YWorth
                                  }
                                </span>
                              </td>
                            );
                          })}
                          <td
                            className={`${summaryTable.columnGrid} ${
                              usersSummary("user", "status").ZLength > 0
                                ? "cursor-pointer"
                                : ""
                            }`}
                            onClick={() => {
                              usersSummary("user", "status").ZLength > 0 &&
                                navigate(
                                  `/summary/byClient?category=${searchParams.get(
                                    "category"
                                  )}`
                                );
                            }}
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
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </Box>
                </div>
              )}
            </>
          ) : (
            <EmptyPlaceholder
              icon={<HiUsers className="h-full w-full" />}
              title="No clients to display"
            />
          )}
        </>
      )}
    </>
  );
};

export default ByBrand;
