import { Link, useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
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
import InfoChip from "../components/InfoChip";
import ActivityChip from "../components/ActivityChip";
import ActivityChipGroup from "../components/ActivityChipGroup";

const VisitClient = ({ params }) => {
  return (
    <Link
      to={`clients/${params.row.clientProfile}`}
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
    orderNumbers: 2,
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
    orderNumbers: 2,
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
    orderNumbers: 2,
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
    orderNumbers: 2,
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
    orderNumbers: 2,
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
    orderNumbers: 2,
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
    orderNumbers: 2,
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
    orderNumbers: 2,
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
    orderNumbers: 2,
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
  // {
  //   field: "brand",
  //   headerName: "Associated Brand",
  //   width: 250,
  //   renderCell: (params) => <InfoChip title={params.value} />,
  // },
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
  // {
  //   field: "orderNumbers",
  //   width: 135,
  //   headerAlign: "center",
  //   align: "center",
  //   headerName: `No. of Orders`,
  // },
  // {
  //   field: "createdAt",
  //   width: 135,
  //   headerAlign: "center",
  //   align: "center",
  //   headerName: `Created On`,
  //   valueFormatter: ({ value }) => {
  //     return new Date(value).toISOString().split("T")[0];
  //   },
  // },
];

const UserProfile = () => {
  const params = useParams();
  return (
    <div className="flex gap-5">
      <div className="w-1/3">
        <Box>
          <img
            src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png"
            alt="avatar"
            className="mx-auto block h-28 w-28 overflow-hidden rounded-md"
          />
          <div className="mt-5 mb-8 flex flex-col items-center gap-2">
            <h5 className="text-xl font-semibold capitalize text-slate-900">
              {params.id}
            </h5>
            <Chip label="project manager" variant="secondary" />
            <div className="mt-8 flex w-full justify-evenly gap-5">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-md bg-secondary bg-opacity-10 p-2.5 text-secondary">
                  <HiOutlineStar className="h-full w-full" />
                </div>
                <div>
                  <h5 className="text-xl font-semibold leading-none text-slate-900">
                    568
                  </h5>
                  <h6 className="text-sm capitalize text-slate-400">
                    orders done
                  </h6>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-md bg-secondary bg-opacity-10 p-2.5 text-secondary">
                  <HiCheck className="h-full w-full" />
                </div>
                <div>
                  <h5 className="text-xl font-semibold leading-none text-slate-900">
                    1.5k
                  </h5>
                  <h6 className="text-sm capitalize text-slate-400">
                    Tasks done
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
                <b className="mr-2 font-semibold text-slate-900">Full name:</b>
                john doe
              </h5>
            </li>
            <li className="mt-4 flex items-center gap-2 capitalize text-slate-700">
              <HiOutlineUserCircle className="h-6 w-6 text-secondary" />
              <h5>
                <b className="mr-2 font-semibold text-slate-900">Pseudo:</b>
                charles xaviers
              </h5>
            </li>
            <li className="mt-4 flex items-center gap-2 capitalize text-slate-700">
              <HiOutlineStar className="h-6 w-6 text-secondary" />
              <h5>
                <b className="mr-2 font-semibold text-slate-900">
                  designation:
                </b>
                project manager
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
          <h5 className="mt-6 mb-4 flex items-center gap-2 text-sm font-medium uppercase text-slate-500 after:inline-block after:h-0.5 after:w-full after:bg-slate-200">
            Contact
          </h5>
          <ul className="ml-2">
            <li className="flex items-center gap-2 text-slate-700">
              <HiOutlineEnvelope className="h-6 w-6 text-secondary" />
              <h5>
                <b className="mr-2 font-semibold capitalize text-slate-900">
                  email:
                </b>
                johndoe@email.com
              </h5>
            </li>
            <li className="mt-4 flex items-center gap-2 text-slate-700">
              <HiOutlinePhone className="h-6 w-6 text-secondary" />
              <h5>
                <b className="mr-2 font-semibold capitalize text-slate-900">
                  phone:
                </b>
                (000)-000-0000
              </h5>
            </li>
          </ul>
        </Box>
      </div>
      <div className="flex w-2/3 flex-col gap-5">
        <h5 className="mr-auto text-xl font-semibold capitalize text-slate-700">
          Clients
        </h5>
        <div className="h-[500px] w-full">
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
        <Box>
          <h5 className="mr-auto mb-5 text-xl font-semibold capitalize text-slate-700">
            Activity timeline
          </h5>
          <ActivityChipGroup>
            <ActivityChip
              title={"Order # 51248 has been updated"}
              subtitle={"You have added a comment to order # 51248"}
              date={"January 13th, 2022"}
            />
            <ActivityChip
              title={"New project has been created"}
              subtitle={"You have created a new project"}
              date={"January 13th, 2022"}
            />
            <ActivityChip
              title={"New comment has been added to order # 85491"}
              subtitle={"You have added a comment to order # 51248"}
              date={"January 13th, 2022"}
            />
          </ActivityChipGroup>
        </Box>
      </div>
    </div>
  );
};

export default UserProfile;
