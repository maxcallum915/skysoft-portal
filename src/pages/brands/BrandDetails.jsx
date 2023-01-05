import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Box from "../../components/Box";
import relativeDate from "../../utils/relativeDate";
import formattedCurrency from "../../utils/formattedCurrency";
import axios from "../../config/axios";

const styles = {
  brand: {
    wrapper: `mb-5 flex items-center gap-3`,
    logo: `h-20 w-20 shrink-0 rounded-md bg-slate-50 object-contain p-1`,
    title: `text-xl font-semibold text-slate-900 capitalize`,
    subtitle: `text-sm text-slate-400`,
  },
  statusTable: {
    row: `grid grid-cols-5 gap-8`,
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
const { statusTable } = styles;

const BrandDetails = () => {
  const [clients, setClients] = useState([]);
  const [categories, setCategories] = useState([]);
  const {
    state: { brand, status },
  } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const [{ data: fetchedClients }, { data: fetchedCategories }] =
        await Promise.all([axios.get("/clients"), axios.get("/categories")]);
      setClients(fetchedClients);
      setCategories(fetchedCategories);
    };
    fetchData();
  }, []);

  // Brand Wise Clients
  const categorySummary = ({ categoryId, fieldStatus } = {}) => {
    const filteredClients = clients.filter((client) => {
      if (categoryId && brand._id && status) {
        return (
          client.category?._id === categoryId &&
          client.brand?._id === brand._id &&
          client.status?.title === fieldStatus &&
          client.status?.title === status
        );
      }
      //   if (brandId && !status) {
      //     return client.brand?._id === brandId;
      //   }
      //   if (!brandId && status) {
      //     return client.status?.title === status;
      //   }
      //   return client;
    });

    const clientsLength = filteredClients.length;

    const clientsWorth = formattedCurrency(
      filteredClients.reduce((pv, c) => {
        return pv + c.worth;
      }, 0)
    );

    const clientsRatio = `${((clientsLength / 1) * 100).toFixed()}%`;
    // const clientsRatio = `${(
    //   (clientsLength / clients.length) *
    //   100
    // ).toFixed()}%`;

    return { clientsLength, clientsWorth, clientsRatio, filteredClients };
  };

  const categoryWiseClients = useCallback(
    (categoryId, fieldStatus) => categorySummary(categoryId, fieldStatus),
    [clients]
  );

  return (
    <>
      <Box>
        <div className={styles.brand.wrapper}>
          <img
            src={`http://localhost:8000/${brand.imgUrl}`}
            alt={brand.title}
            className={styles.brand.logo}
          />
          <div>
            <h3 className={styles.brand.title}>{brand.title}</h3>
            <h4 className={styles.brand.subtitle}>
              {relativeDate(brand.createdAt)}
            </h4>
          </div>
        </div>
        <div className={`${statusTable.row} ${statusTable.header.row}`}>
          <div className={statusTable.column}>
            <h5 className={statusTable.header.columnTitle}>Category</h5>
          </div>
          <div className={`${statusTable.column} ${statusTable.header.column}`}>
            <h5
              className={`${statusTable.header.columnTitle} text-emerald-500`}
            >
              Delivered
            </h5>
            <ul
              className={`${statusTable.columnCells} rounded-md bg-emerald-50 text-emerald-700`}
            >
              <li className={statusTable.columnSpan}>orders</li>
              <li className={statusTable.columnSpan}>%</li>
              <li className={statusTable.columnSpan}>$</li>
            </ul>
          </div>
          <div className={`${statusTable.column} ${statusTable.header.column}`}>
            <h5 className={`${statusTable.header.columnTitle} text-amber-500`}>
              In Process
            </h5>
            <ul
              className={`${statusTable.columnCells} rounded-md bg-amber-50 text-amber-700`}
            >
              <li className={statusTable.columnSpan}>orders</li>
              <li className={statusTable.columnSpan}>%</li>
              <li className={statusTable.columnSpan}>$</li>
            </ul>
          </div>
          <div className={`${statusTable.column} ${statusTable.header.column}`}>
            <h5 className={`${statusTable.header.columnTitle} text-red-500`}>
              Refund
            </h5>
            <ul
              className={`${statusTable.columnCells} rounded-md bg-red-50 text-red-700`}
            >
              <li className={statusTable.columnSpan}>orders</li>
              <li className={statusTable.columnSpan}>%</li>
              <li className={statusTable.columnSpan}>$</li>
            </ul>
          </div>
          <div className={`${statusTable.column} ${statusTable.header.column}`}>
            <h5 className={`${statusTable.header.columnTitle} text-red-800`}>
              Chargeback
            </h5>
            <ul
              className={`${statusTable.columnCells} rounded-md bg-red-50 text-red-700`}
            >
              <li className={statusTable.columnSpan}>orders</li>
              <li className={statusTable.columnSpan}>%</li>
              <li className={statusTable.columnSpan}>$</li>
            </ul>
          </div>
        </div>
        {categories.map((category) => {
          return (
            <div
              className={`${statusTable.row} ${statusTable.body.row}`}
              key={category._id}
            >
              <div className={`${statusTable.column} gap-2`}>
                <img
                  src={`http://localhost:8000/${category.imgUrl}`}
                  alt="brand icon"
                  className={statusTable.icon}
                />
                <h5 className="font-medium">{category.title}</h5>
              </div>
              <ul className={statusTable.columnCells}>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "delivered",
                    }).clientsLength
                  }
                </li>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "delivered",
                    }).clientsRatio
                  }
                </li>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "delivered",
                    }).clientsWorth
                  }
                </li>
              </ul>
              <ul className={statusTable.columnCells}>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "in process",
                    }).clientsLength
                  }
                </li>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "in process",
                    }).clientsRatio
                  }
                </li>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "in process",
                    }).clientsWorth
                  }
                </li>
              </ul>
              <ul className={statusTable.columnCells}>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "refunded",
                    }).clientsLength
                  }
                </li>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "refunded",
                    }).clientsRatio
                  }
                </li>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "refunded",
                    }).clientsWorth
                  }
                </li>
              </ul>
              <ul className={statusTable.columnCells}>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "chargeback",
                    }).clientsLength
                  }
                </li>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "chargeback",
                    }).clientsRatio
                  }
                </li>
                <li className={statusTable.columnSpan}>
                  {
                    categoryWiseClients({
                      categoryId: category._id,
                      fieldStatus: "chargeback",
                    }).clientsWorth
                  }
                </li>
              </ul>
            </div>
          );
        })}
        {/* <div className={`${statusTable.row} ${statusTable.body.row}`}>
            <div className={`${statusTable.column} gap-2`}>
              <h5 className="font-medium">Total</h5>
            </div>
            <ul className={statusTable.columnCells}>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "delivered" }).clientsLength}
              </li>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "delivered" }).clientsRatio}
              </li>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "delivered" }).clientsWorth}
              </li>
            </ul>
            <ul className={statusTable.columnCells}>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "in process" }).clientsLength}
              </li>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "in process" }).clientsRatio}
              </li>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "in process" }).clientsWorth}
              </li>
            </ul>
            <ul className={statusTable.columnCells}>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "refunded" }).clientsLength}
              </li>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "refunded" }).clientsRatio}
              </li>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "refunded" }).clientsWorth}
              </li>
            </ul>
            <ul className={statusTable.columnCells}>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "chargeback" }).clientsLength}
              </li>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "chargeback" }).clientsRatio}
              </li>
              <li className={statusTable.columnSpan}>
                {brandWiseClients({ status: "chargeback" }).clientsWorth}
              </li>
            </ul>
            <ul className={statusTable.columnCells}>
              <li className={statusTable.columnSpan}>
                {brandWiseClients().clientsLength}
              </li>
              <li className={statusTable.columnSpan}>
                {brandWiseClients().clientsRatio}
              </li>
              <li className={statusTable.columnSpan}>
                {brandWiseClients().clientsWorth}
              </li>
            </ul>
          </div> */}
      </Box>
    </>
  );
};

export default BrandDetails;
