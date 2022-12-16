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

const VisitClient = ({ params }) => {
  return (
    <Link
      to={`/clients/${params.row.clientProfile}`}
      className="flex items-center gap-3"
    >
      <Avatar icon="https://xsgames.co/randomusers/avatar.php?g=male" rounded />
      <div>
        <h5 className="font-semibold capitalize leading-none text-slate-900">
          {params.row.clientName}
        </h5>
        <h6 className="text-sm text-slate-400">{params.row.clientEmail}</h6>
      </div>
    </Link>
  );
};
const rows = [
  {
    id: 1,
    clientId: 461850657,
    clientName: "John doe",
    clientEmail: "johndoe@gmail.com",
    clientProfile: "johndoe",
    clientStatus: "active",
    brand: "The website design",
    package: "Gold",
    clientWorth: 5040.25,
    projectNumbers: 2,
    createdAt: "10-10-2022",
  },
  {
    id: 2,
    clientId: 506574618,
    clientName: "Silver Green",
    clientEmail: "silvergreen@gmail.com",
    clientProfile: "silvergreen",
    clientStatus: "inactive",
    brand: "Web districts",
    package: "Bronze",
    clientWorth: 5040.25,
    projectNumbers: 2,
    createdAt: "10-10-2022",
  },
  {
    id: 3,
    clientId: 574661508,
    clientName: "Brad ford",
    clientEmail: "bradford@gmail.com",
    clientProfile: "bradford",
    clientStatus: "delivered",
    brand: "Seo maisters",
    package: "Silver",
    clientWorth: 5040.25,
    projectNumbers: 2,
    createdAt: "10-10-2022",
  },
  {
    id: 4,
    clientId: 746501865,
    clientName: "Joey Tribbiani",
    clientEmail: "joeytribbiani@gmail.com",
    clientProfile: "joeytribbiani",
    clientStatus: "active",
    brand: "Web districts",
    package: "Bronze",
    clientWorth: 5040.25,
    projectNumbers: 2,
    createdAt: "10-10-2022",
  },
  {
    id: 5,
    clientId: 616574850,
    clientName: "Matthew Perry",
    clientEmail: "matthewperry@gmail.com",
    clientProfile: "matthewperry",
    clientStatus: "inactive",
    brand: "The Website Design",
    package: "Bronze",
    clientWorth: 5040.25,
    projectNumbers: 2,
    createdAt: "10-10-2022",
  },
  {
    id: 6,
    clientId: 661505748,
    clientName: "David Schwimmer",
    clientEmail: "davidschwimmer@gmail.com",
    clientProfile: "davidschwimmer",
    clientStatus: "active",
    brand: "Web districts",
    package: "Silver",
    clientWorth: 5040.25,
    projectNumbers: 2,
    createdAt: "10-10-2022",
  },
  {
    id: 7,
    clientId: 506574618,
    clientName: "Matt Le Blanc",
    clientEmail: "mattleblanc@gmail.com",
    clientProfile: "mattleblanc",
    clientStatus: "active",
    brand: "Web districts",
    package: "Gold",
    clientWorth: 5040.25,
    projectNumbers: 2,
    createdAt: "10-10-2022",
  },
  {
    id: 8,
    clientId: 506574618,
    clientName: "Ross Geller",
    clientEmail: "rossgeller@gmail.com",
    clientProfile: "rossgeller",
    clientStatus: "delivered",
    brand: "SEO Maisters",
    package: "Bronze",
    clientWorth: 5040.25,
    projectNumbers: 2,
    createdAt: "10-10-2022",
  },
  {
    id: 9,
    clientId: 506574618,
    clientName: "Silver Green",
    clientEmail: "silvergreen@gmail.com",
    clientProfile: "silvergreen",
    clientStatus: "active",
    brand: "Web districts",
    package: "Bronze",
    clientWorth: 5040.25,
    projectNumbers: 2,
    createdAt: "10-10-2022",
  },
];
const columns = [
  { field: "clientId", headerName: "Client ID" },
  {
    field: "clientName",
    headerName: "Client Info",
    width: 220,
    renderCell: (params) => <VisitClient params={params} />,
  },
  {
    field: "clientStatus",
    headerName: "Client Status",
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
    field: "brand",
    headerName: "Associated Brand",
    width: 250,
    renderCell: (params) => <InfoChip title={params.value} />,
  },
  {
    field: "package",
    width: 140,
    headerAlign: "center",
    align: "center",
    headerName: `Package Name`,
  },
  {
    field: "clientWorth",
    width: 135,
    headerAlign: "center",
    align: "center",
    headerName: `Client's Worth`,
    valueFormatter: (params) => {
      return `$ ${params.value}`;
    },
  },
  {
    field: "projectNumbers",
    width: 135,
    headerAlign: "center",
    align: "center",
    headerName: `No. of Projects`,
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
  addClient: {
    wrapper: `mb-5 flex items-end gap-2`,
    subtitle: `text-sm capitalize leading-none text-slate-400`,
    title: `text-xl font-semibold capitalize text-slate-900`,
    icon: `relative mb-1 h-6 w-6 rounded-full border-2 border-secondary text-secondary after:invisible after:absolute after:top-1/2 after:left-full after:ml-1 after:mt-2 after:w-max after:-translate-y-1/2 after:rounded-md after:bg-slate-900 after:px-3 after:py-1 after:text-sm after:capitalize after:text-white after:opacity-0 after:transition-all after:duration-300 after:content-['add_order'] hover:bg-secondary hover:text-white hover:after:visible hover:after:mt-0 hover:after:opacity-100`,
  },
};
const { summaryChip, addClient } = styles;

const Clients = () => {
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
            <h6 className={summaryChip.subtitle}>New clients</h6>
            <h5 className={`${summaryChip.title} text-secondary`}>26</h5>
          </div>
        </div>
        <div className={summaryChip.wrapper}>
          <div className={`${summaryChip.icon} bg-amber-50 text-amber-500`}>
            <HiArrowTrendingUp className="h-full w-full" />
          </div>
          <div>
            <h6 className={summaryChip.subtitle}>clients in-process</h6>
            <h5 className={`${summaryChip.title} text-amber-500`}>587</h5>
          </div>
        </div>
        <div className={summaryChip.wrapper}>
          <div className={`${summaryChip.icon} bg-green-50 text-green-500`}>
            <HiCheck className="h-full w-full" />
          </div>
          <div>
            <h6 className={summaryChip.subtitle}>clients delivered</h6>
            <h5 className={`${summaryChip.title} text-green-500`}>408</h5>
          </div>
        </div>
        <div className={summaryChip.wrapper}>
          <div className={`${summaryChip.icon} bg-red-50 text-red-500`}>
            <HiOutlineXMark className="h-full w-full" />
          </div>
          <div>
            <h6 className={summaryChip.subtitle}>chargedback clients</h6>
            <h5 className={`${summaryChip.title} text-red-500`}>12</h5>
          </div>
        </div>
      </div>
      <div className={addClient.wrapper}>
        <div>
          <h6 className={addClient.subtitle}>Total</h6>
          <h5 className={addClient.title}>
            clients: <span className="font-bold text-secondary">458</span>
          </h5>
        </div>
        <Link to="new" className={addClient.icon}>
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

export default Clients;
