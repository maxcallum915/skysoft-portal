import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
  HiArrowTrendingUp,
  HiCheck,
  HiOutlineUserPlus,
  HiOutlineXMark,
  HiPlus,
} from "react-icons/hi2";
import Avatar from "../../components/Avatar";
import Chip from "../../components/Chip";
import InfoChip from "../../components/InfoChip";
import Progressbar from "../../components/Progressbar";

const VisitManager = ({ params }) => {
  return (
    <Link
      to={`/users/${params.row.managerProfile}`}
      className="flex items-center gap-3"
    >
      <Avatar icon="https://xsgames.co/randomusers/avatar.php?g=male" rounded />
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
  summaryChips: `mb-5 grid gap-5 lg:grid-cols-4`,
  summaryChip: {
    wrapper: `flex items-center gap-3 rounded-lg bg-white p-4 ring-1 ring-slate-200`,
    icon: `h-12 w-12 shrink-0 rounded-lg p-2.5`,
    subtitle: `text-sm capitalize text-slate-400 font-medium`,
    title: `mt-1 text-2xl font-semibold leading-none`,
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
  return (
    <>
      <div className={styles.summaryChips}>
        <div className={summaryChip.wrapper}>
          <div
            className={`${summaryChip.icon} bg-secondary bg-opacity-10 text-secondary`}
          >
            <HiOutlineUserPlus className="h-full w-full" />
          </div>
          <div>
            <h6 className={summaryChip.subtitle}>New orders</h6>
            <h5 className={`${summaryChip.title} text-secondary`}>26</h5>
          </div>
        </div>
        <div className={summaryChip.wrapper}>
          <div className={`${summaryChip.icon} bg-amber-50 text-amber-500`}>
            <HiArrowTrendingUp className="h-full w-full" />
          </div>
          <div>
            <h6 className={summaryChip.subtitle}>orders in-process</h6>
            <h5 className={`${summaryChip.title} text-amber-500`}>587</h5>
          </div>
        </div>
        <div className={summaryChip.wrapper}>
          <div className={`${summaryChip.icon} bg-green-50 text-green-500`}>
            <HiCheck className="h-full w-full" />
          </div>
          <div>
            <h6 className={summaryChip.subtitle}>orders delivered</h6>
            <h5 className={`${summaryChip.title} text-green-500`}>408</h5>
          </div>
        </div>
        <div className={summaryChip.wrapper}>
          <div className={`${summaryChip.icon} bg-red-50 text-red-500`}>
            <HiOutlineXMark className="h-full w-full" />
          </div>
          <div>
            <h6 className={summaryChip.subtitle}>chargedback orders</h6>
            <h5 className={`${summaryChip.title} text-red-500`}>12</h5>
          </div>
        </div>
      </div>
      <div className={addOrder.wrapper}>
        <div>
          <h6 className={addOrder.subtitle}>Total</h6>
          <h5 className={addOrder.title}>
            orders: <span className="font-bold text-secondary">458</span>
          </h5>
        </div>
        <Link to="new" className={addOrder.icon}>
          <HiPlus className="h-full w-full" />
        </Link>
      </div>
      <div className="h-[1000px] w-full">
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

export default Orders;
