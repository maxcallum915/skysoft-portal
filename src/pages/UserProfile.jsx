import { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  HiCheck,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineStar,
  HiOutlineUser,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import Box from "../components/Box";
import Avatar from "../components/Avatar";
import Chip from "../components/Chip";
import axios from "../config/axios";
import useAuth from "../hooks/useAuth";
import InfoChip from "../components/InfoChip";
import formattedCurrency from "../utils/formattedCurrency";
import formattedDate from "../utils/formattedDate";
import { toast } from "react-hot-toast";

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

const UserProfile = () => {
  const [clients, setClients] = useState([]);
  const [user, setUser] = useState();
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
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data.message);
      }
    };
    fetchClients();
    // axiosFetch({
    //   method: "GET",
    //   url: "clients",
    // });
  }, []);

  const getTotalWorth = formattedCurrency(
    clients.reduce((pv, c) => pv + c.worth, 0)
  );

  const clientsWorth = useMemo(() => getTotalWorth, [clients]);

  return (
    user && (
      <div className="flex gap-5">
        <div className="w-1/3">
          <Box>
            <div className="mx-auto w-max">
              <Avatar title={user.name} size="xl" rounded />
            </div>
            <div className="mt-5 mb-8 flex flex-col items-center gap-2">
              <h5 className="text-xl font-semibold capitalize text-slate-900">
                {user.name}
              </h5>
              <Chip label="project manager" variant="secondary" />
              <div className="mt-8 flex w-full justify-evenly gap-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 shrink-0 rounded-md bg-secondary bg-opacity-10 p-2.5 text-secondary">
                    <HiOutlineStar className="h-full w-full" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold leading-none text-slate-900">
                      {clients.length}
                    </h5>
                    <h6 className="text-sm capitalize text-slate-400">
                      total clients
                    </h6>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 shrink-0 rounded-md bg-secondary bg-opacity-10 p-2.5 text-secondary">
                    <HiCheck className="h-full w-full" />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold leading-none text-slate-900">
                      {clientsWorth}
                    </h5>
                    <h6 className="text-sm capitalize text-slate-400">
                      Clients worth
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="mb-4 flex items-center gap-2 text-sm font-medium uppercase text-slate-500 after:inline-block after:h-0.5 after:w-full after:bg-slate-200">
              About
            </h5>
            <ul className="ml-2">
              <li className="flex items-center gap-2 capitalize text-slate-700">
                <HiOutlineUser className="h-6 w-6 text-secondary" />
                <h5>
                  <b className="mr-2 font-semibold text-slate-900">
                    full name:
                  </b>
                  {user.name}
                </h5>
              </li>
              <li className="mt-4 flex items-center gap-2 capitalize text-slate-700">
                <HiOutlineUserCircle className="h-6 w-6 text-secondary" />
                <h5>
                  <b className="mr-2 font-semibold text-slate-900">email:</b>
                  {user.email}
                </h5>
              </li>
              <li className="mt-4 flex items-center gap-2 capitalize text-slate-700">
                <HiOutlineStar className="h-6 w-6 text-secondary" />
                <h5>
                  <b className="mr-2 font-semibold text-slate-900">Role:</b>
                  {user.role}
                </h5>
              </li>
              <li className="mt-4 flex items-center gap-2 capitalize text-slate-700">
                <HiCheck className="h-6 w-6 text-secondary" />
                <h5 className="flex items-center">
                  <b className="mr-2 font-semibold text-slate-900">status:</b>
                  <Chip label="active" variant="success" />
                </h5>
              </li>
            </ul>
          </Box>
        </div>
        <div className="flex w-2/3 flex-col gap-5">
          <h5 className="mr-auto text-xl font-semibold capitalize text-slate-900">
            Clients
          </h5>
          <div className="h-[500px] w-full">
            <DataGrid
              getRowId={(row) => row._id}
              rows={clients}
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
        </div>
      </div>
    )
  );
};

export default UserProfile;
