import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineCurrencyDollar,
  HiDocumentDuplicate,
  HiPlus,
} from "react-icons/hi2";
import Avatar from "../../components/Avatar";
import Chip from "../../components/Chip";
import InfoChip from "../../components/InfoChip";
import Progressbar from "../../components/Progressbar";
import Loader from "../../components/Loader";
import EmptyPlaceholder from "../../components/EmptyPlaceholder";
import RangePicker from "../../components/RangePicker";
import formattedCurrency from "../../utils/formattedCurrency";
import formattedDate from "../../utils/formattedDate";
import formattedNumber from "../../utils/formattedNumber";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

const VisitClient = ({ params }) => {
  return (
    <Link
      to={`/clients/${params?.value?._id}`}
      className="flex items-center gap-3"
    >
      <Avatar title={params?.value?.title} rounded />
      <div>
        <h5 className="font-semibold capitalize leading-none text-slate-900">
          {params?.value?.title}
        </h5>
        {/* <h6 className="text-sm text-slate-400">{params.value.email}</h6> */}
      </div>
    </Link>
  );
};

const ShowProgress = ({ params }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <Progressbar
          width="w-20"
          rounded
          progress={params.value.percentage.toFixed()}
        />
        <span className="text-sm font-semibold text-slate-900">
          {params?.value?.percentage.toFixed()}%
        </span>
      </div>
      {/* <Chip label={params.value.title} variant={params.value.className} /> */}
    </div>
  );
};

const columns = [
  { field: "_id", headerName: "Order ID" },
  {
    field: "title",
    headerName: "Order Title",
    width: 150,
    renderCell: (params) => (
      <Link
        to={`/orders/${params.row._id}`}
        className="block w-full font-medium capitalize text-secondary"
      >
        {params.value}
      </Link>
    ),
    flex: 1,
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 200,
    renderCell: (params) => (
      <InfoChip
        icon={`https://backend-production-56ca.up.railway.app/${params.value.imgUrl}`}
        title={params.value.title}
      />
    ),
    flex: 1,
  },
  {
    field: "client",
    headerName: "Client",
    width: 200,
    renderCell: (params) => <VisitClient params={params} />,
    flex: 1,
  },
  {
    field: "orderHealth",
    headerName: "Order Health",
    width: 140,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => (
      <Chip label={params.value.title} variant={params.value.className} />
    ),
  },
  {
    field: "orderStage",
    headerName: "Order Progress",
    width: 150,
    // flex: 1,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => <ShowProgress params={params} />,
    flex: 1,
  },
  {
    field: "orderType",
    width: 140,
    headerAlign: "center",
    align: "center",
    headerName: `Order Type`,
    renderCell: (params) => (
      <div className="flex items-center gap-2">
        <img
          src={`https://backend-production-56ca.up.railway.app/${params.value.imgUrl}`}
          alt={params.value.title}
          className="block h-5 w-5 object-contain"
        />
        <span className="capitalize">{params.value.title}</span>
      </div>
    ),
  },
  {
    field: "amount",
    width: 135,
    headerAlign: "center",
    align: "center",
    headerName: `Order Worth`,
    valueFormatter: ({ value }) => {
      return formattedCurrency(value);
    },
  },
  {
    field: "paymentType",
    width: 135,
    headerAlign: "center",
    align: "center",
    headerName: `Payment Type`,
  },
  {
    field: "createdAt",
    width: 135,
    headerAlign: "center",
    align: "center",
    headerName: `Created On`,
    valueFormatter: ({ value }) => {
      return formattedDate(value);
    },
  },
];

const styles = {
  summaryChips: `mb-5 grid gap-5 lg:grid-cols-2`,
  summaryChip: {
    wrapper: `flex items-center gap-3 rounded-lg bg-white p-4 ring-1 ring-slate-200`,
    icon: `h-12 w-12 shrink-0 rounded-lg p-2.5 bg-secondary bg-opacity-10 text-secondary`,
    subtitle: `text-sm capitalize text-slate-400 font-medium`,
    title: `mt-1 text-2xl font-semibold leading-none text-secondary`,
  },
  addOrder: {
    wrapper: `mb-5 flex items-end gap-2`,
    subtitle: `text-sm capitalize leading-none text-slate-400`,
    title: `text-xl font-semibold capitalize text-slate-900`,
    icon: `relative mb-1 h-6 w-6 rounded-full border-2 border-secondary text-secondary after:invisible after:absolute after:top-1/2 after:left-full after:ml-1 after:mt-2 after:w-max after:-translate-y-1/2 after:rounded-md after:bg-slate-900 after:px-3 after:py-1 after:text-sm after:capitalize after:text-white after:opacity-0 after:transition-all after:duration-300 after:content-['add_order'] hover:bg-secondary hover:text-white hover:after:visible hover:after:mt-0 hover:after:opacity-100`,
  },
};
const { summaryChip, addOrder } = styles;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data: orders } = await axios.get("/api/orders", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setOrders(orders);
        setFilteredOrders(orders);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      {isLoading && !orders.length ? (
        <Loader />
      ) : (
        <>
          {orders?.length > 0 ? (
            <>
              <div className={styles.summaryChips}>
                <div className={summaryChip.wrapper}>
                  <div className={summaryChip.icon}>
                    <HiOutlineClipboardDocumentList className="h-full w-full" />
                  </div>
                  <div>
                    <h6 className={summaryChip.subtitle}>No. of Orders</h6>
                    <h5 className={summaryChip.title}>
                      {formattedNumber(filteredOrders.length)}
                    </h5>
                  </div>
                </div>
                <div className={summaryChip.wrapper}>
                  <div className={summaryChip.icon}>
                    <HiOutlineCurrencyDollar className="h-full w-full" />
                  </div>
                  <div>
                    <h6 className={summaryChip.subtitle}>Orders Worth</h6>
                    <h5 className={summaryChip.title}>
                      {formattedCurrency(
                        filteredOrders.reduce((pv, c) => pv + c.amount, 0)
                      )}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className={addOrder.wrapper}>
                  <div>
                    <h6 className={addOrder.subtitle}>Total</h6>
                    <h5 className={addOrder.title}>
                      orders:{" "}
                      <span className="font-bold text-secondary">
                        {formattedNumber(filteredOrders.length)}
                      </span>
                    </h5>
                  </div>
                  {auth.role === "user" && (
                    <Link to="new" className={addOrder.icon}>
                      <HiPlus className="h-full w-full" />
                    </Link>
                  )}
                </div>
                <RangePicker array={orders} setState={setFilteredOrders} />
              </div>
              <div className="h-[800px] w-full">
                <DataGrid
                  getRowId={(row) => row._id}
                  rows={filteredOrders}
                  columns={columns}
                  components={{ Toolbar: GridToolbar }}
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
          ) : auth.role === "user" ? (
            <Link to="new">
              <EmptyPlaceholder
                icon={<HiDocumentDuplicate className="h-full w-full" />}
                title="No orders to display Click to Add"
              />
            </Link>
          ) : (
            <EmptyPlaceholder
              icon={<HiDocumentDuplicate className="h-full w-full" />}
              title="No orders to display"
            />
          )}
        </>
      )}
    </>
  );
};

export default Orders;
