import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  HiOutlineCurrencyDollar,
  HiOutlineUsers,
  HiUsers,
} from "react-icons/hi2";
import Avatar from "../../components/Avatar";
import Chip from "../../components/Chip";
import InfoChip from "../../components/InfoChip";
import Loader from "../../components/Loader";
import EmptyPlaceholder from "../../components/EmptyPlaceholder";
import Button from "../../components/Button";
import formattedDate from "../../utils/formattedDate";
import formattedCurrency from "../../utils/formattedCurrency";
import useAxios from "../../hooks/useAxios";
import { DateRange } from "react-date-range";
import { formatISO } from "date-fns";
import useAuth from "../../hooks/useAuth";
import axios from "../../config/axios";

const VisitClient = ({ params }) => {
  return (
    <Link to={`/clients/${params.row._id}`} className="flex items-center gap-3">
      <Avatar title={params.row.title} rounded />
      <div>
        <h5 className="font-semibold capitalize leading-none text-slate-900">
          {params.row.title}
        </h5>
        <h6 className="text-sm text-slate-400">{params.row.email}</h6>
      </div>
    </Link>
  );
};

const VisitUser = ({ params }) => {
  const { auth } = useAuth();
  return (
    <Link to={`/users/${params.value._id}`} className="flex items-center gap-3">
      <Avatar
        title={auth.name === params.value.name ? "You" : params.value.name}
        rounded
      />
      <div>
        <h5 className="font-semibold capitalize leading-none text-slate-900">
          {auth.name === params.value.name ? "You" : params.value.name}
        </h5>
        <h6 className="text-sm text-slate-400">{params.value.email}</h6>
      </div>
    </Link>
  );
};

const columns = [
  { field: "_id", headerName: "Order ID" },
  {
    field: "title",
    headerName: "Client",
    width: 200,
    renderCell: (params) => <VisitClient params={params} />,
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
    field: "user",
    headerName: "Manager",
    width: 200,
    renderCell: (params) => <VisitUser params={params} />,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Client Status",
    width: 140,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => (
      <Chip label={params.value.title} variant={params.value.className} />
    ),
  },
  {
    field: "category",
    width: 140,
    headerAlign: "center",
    align: "center",
    headerName: `Category`,
    renderCell: (params) =>
      !!params.value ? (
        <div className="flex items-center gap-2">
          <img
            src={`https://backend-production-56ca.up.railway.app/${params.value.imgUrl}`}
            alt={params.value.title}
            className="block h-5 w-5 object-contain"
          />
          <span className="capitalize">{params.value.title}</span>
        </div>
      ) : (
        "No orders yet"
      ),
    flex: 1,
  },
  {
    field: "worth",
    width: 135,
    headerAlign: "center",
    align: "center",
    headerName: `Client Worth`,
    valueFormatter: ({ value }) => {
      return formattedCurrency(value);
    },
  },
  {
    field: "orders",
    headerName: "No. of orders",
    width: 135,
    headerAlign: "center",
    align: "center",
    valueFormatter: ({ value }) => {
      return value.length;
    },
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
    flex: 1,
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
  addClient: {
    wrapper: `mb-5 flex items-end gap-2`,
    subtitle: `text-sm capitalize leading-none text-slate-400`,
    title: `text-xl font-semibold capitalize text-slate-900`,
    icon: `relative mb-1 h-6 w-6 rounded-full border-2 border-secondary text-secondary after:invisible after:absolute after:top-1/2 after:left-full after:ml-1 after:mt-2 after:w-max after:-translate-y-1/2 after:rounded-md after:bg-slate-900 after:px-3 after:py-1 after:text-sm after:capitalize after:text-white after:opacity-0 after:transition-all after:duration-300 after:content-['add_order'] hover:bg-secondary hover:text-white hover:after:visible hover:after:mt-0 hover:after:opacity-100`,
  },
};
const { summaryChip, addClient } = styles;

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState();
  const { auth } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const q = Object.fromEntries(searchParams);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [toggleDateRange, setToggleDateRange] = useState(false);

  const handleToggleRange = () => setToggleDateRange((prev) => !prev);

  const handleRangeSelection = () => {
    setToggleDateRange((prevState) => !prevState);
    const { startDate, endDate } = dateRange[0];
    const filtered = clients.filter(
      (order) =>
        order.createdAt >= formatISO(startDate) &&
        order.createdAt <= formatISO(endDate)
    );
    setFilteredClients(filtered);
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const { data: clients } = await axios.get("/api/summary", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
          params: q,
        });
        setClients(clients);
        setFilteredClients(clients);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();
    // axiosFetch({
    //   method: "GET",
    //   url: "clients",
    // });
  }, []);

  return (
    <>
      {/* {loading && <Loader />}
      {!loading && error && <div>{error}</div>}
      {!loading && !error && !clients?.length && (
        <Link to="new">
          <EmptyPlaceholder
            icon={<HiUsers className="h-full w-full" />}
            title="No clients to display Click to Add"
          />
        </Link>
      )} */}
      {/* {!loading && !error && clients?.length > 0 && ( */}
      {clients?.length > 0 ? (
        <>
          <div className={styles.summaryChips}>
            <div className={summaryChip.wrapper}>
              <div className={summaryChip.icon}>
                <HiOutlineUsers className="h-full w-full" />
              </div>
              <div>
                <h6 className={summaryChip.subtitle}>No. of Clients</h6>
                <h5 className={summaryChip.title}>{filteredClients.length}</h5>
              </div>
            </div>
            <div className={summaryChip.wrapper}>
              <div className={summaryChip.icon}>
                <HiOutlineCurrencyDollar className="h-full w-full" />
              </div>
              <div>
                <h6 className={summaryChip.subtitle}>Clients Worth</h6>
                <h5 className={summaryChip.title}>
                  {formattedCurrency(
                    filteredClients.reduce((pv, c) => pv + c.worth, 0)
                  )}
                </h5>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className={addClient.wrapper}>
              <div>
                <h6 className={addClient.subtitle}>Total</h6>
                <h5 className={addClient.title}>
                  clients:{" "}
                  <span className="font-bold text-secondary">
                    {clients.length}
                  </span>
                </h5>
              </div>
            </div>
            <div>
              <Button handleClick={handleToggleRange}>Search By Date</Button>
              {toggleDateRange && (
                <div className="relative">
                  <div className="absolute top-0 right-0 z-50 shadow-lg">
                    <DateRange
                      onChange={(item) => setDateRange([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dateRange}
                      rangeColors={["#019dff"]}
                      showDateDisplay={true}
                    />
                    <Button
                      widthVariant="full"
                      handleClick={handleRangeSelection}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="h-[800px] w-full">
            <DataGrid
              getRowId={(row) => row._id}
              rows={!filteredClients ? clients : filteredClients}
              columns={columns}
              // loading={loading}
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
            icon={<HiUsers className="h-full w-full" />}
            title="No clients to display Click to Add"
          />
        </Link>
      ) : (
        <EmptyPlaceholder
          icon={<HiUsers className="h-full w-full" />}
          title="No clients to display Click to Add"
        />
      )}
    </>
  );
};

export default Clients;
