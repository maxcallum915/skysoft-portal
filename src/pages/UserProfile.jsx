import { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  HiOutlineBriefcase,
  HiOutlineCurrencyDollar,
  HiOutlineStar,
  HiOutlineUser,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import Box from "../components/Box";
import Avatar from "../components/Avatar";
import Chip from "../components/Chip";
import InfoChip from "../components/InfoChip";
import Loader from "../components/Loader";
import formattedCurrency from "../utils/formattedCurrency";
import formattedDate from "../utils/formattedDate";
import formattedNumber from "../utils/formattedNumber";
import axios from "../config/axios";
import useAuth from "../hooks/useAuth";

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
  userInfo: {
    avatar: `mx-auto w-max`,
    titleWrapper: `mt-5 mb-8 flex flex-col items-center gap-2`,
    title: `text-xl font-semibold capitalize text-slate-900`,
  },
  infoChips: `mb-8 flex w-full justify-evenly gap-5`,
  infoChip: {
    wrapper: `flex items-center gap-3`,
    icon: `h-12 w-12 shrink-0 rounded-md bg-secondary bg-opacity-10 p-2.5 text-secondary`,
    title: `text-xl font-semibold leading-none text-slate-900`,
    subtitle: `text-sm capitalize text-slate-400`,
  },
  iconList: {
    heading: `mb-4 flex items-center gap-2 text-sm font-medium uppercase text-slate-500 after:inline-block after:h-0.5 after:w-full after:bg-slate-200`,
    wrapper: `ml-2 space-y-5`,
    item: `flex items-center gap-2 capitalize text-slate-700`,
    icon: `h-6 w-6 text-secondary`,
    label: `font-semibold text-slate-900`,
  },
  sectionTitle: `mb-3 text-xl font-semibold capitalize text-slate-900`,
};
const { userInfo, infoChip, iconList } = styles;

const UserProfile = () => {
  const [clients, setClients] = useState([]);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { auth } = useAuth();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const [{ data: clients }, { data: user }] = await Promise.all([
          axios.get("/api/clients/byUser", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
            params: {
              userId: params.id,
            },
          }),
          axios.get(`/api/users/${params.id}`, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
        ]);
        setClients(clients);
        setUser(user);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchClients();
  }, []);

  const getTotalWorth = formattedCurrency(
    clients.reduce((pv, c) => pv + c.worth, 0)
  );

  const clientsWorth = useMemo(() => getTotalWorth, [clients]);

  return (
    <>
      {isLoading && (!user || !clients.length) ? (
        <Loader />
      ) : (
        <div className="flex gap-5">
          <div className="w-1/3">
            <Box>
              <div className={userInfo.avatar}>
                <Avatar title={user.name} size="xl" rounded />
              </div>
              <div className={userInfo.titleWrapper}>
                <h5 className={userInfo.title}>{user.name}</h5>
                <Chip label={user.role} variant="secondary" />
              </div>
              <div className={styles.infoChips}>
                <div className={infoChip.wrapper}>
                  <div className={infoChip.icon}>
                    <HiOutlineBriefcase className="h-full w-full" />
                  </div>
                  <div>
                    <h6 className={infoChip.subtitle}>total clients</h6>
                    <h5 className={infoChip.title}>
                      {formattedNumber(clients.length)}
                    </h5>
                  </div>
                </div>
                <div className={infoChip.wrapper}>
                  <div className={infoChip.icon}>
                    <HiOutlineCurrencyDollar className="h-full w-full" />
                  </div>
                  <div>
                    <h6 className={infoChip.subtitle}>Clients worth</h6>
                    <h5 className={infoChip.title}>{clientsWorth}</h5>
                  </div>
                </div>
              </div>
              <h5 className={iconList.heading}>About</h5>
              <ul className={iconList.wrapper}>
                <li className={iconList.item}>
                  <HiOutlineUser className={iconList.icon} />
                  <h5 className={iconList.label}>full name:</h5>
                  <span>{user.name}</span>
                </li>
                <li className={iconList.item}>
                  <HiOutlineUserCircle className={iconList.icon} />
                  <h5 className={iconList.label}>email:</h5>
                  <span className="!lowercase">{user.email}</span>
                </li>
                <li className={iconList.item}>
                  <HiOutlineStar className={iconList.icon} />
                  <h5 className={iconList.label}>Role:</h5>
                  <span>{user.role}</span>
                </li>
              </ul>
            </Box>
          </div>
          <div className="w-2/3">
            <h5 className={styles.sectionTitle}>Clients</h5>
            <>
              {clients.length > 0 ? (
                <div className="h-[500px] w-full">
                  <DataGrid
                    getRowId={(row) => row._id}
                    rows={clients}
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
              ) : (
                <EmptyPlaceholder
                  icon={<HiUsers className="h-full w-full" />}
                  title="No clients to display"
                />
              )}
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
