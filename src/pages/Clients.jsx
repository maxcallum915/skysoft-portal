import {
  HiArrowTrendingUp,
  HiCheck,
  HiOutlineUserPlus,
  HiOutlineXMark,
} from "react-icons/hi2";
import { HiOutlinePlusSm } from "react-icons/hi";
import Button from "../components/Button";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import Input from "../components/Input";
import { Fragment } from "react";
import Select from "../components/Select";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import Chip from "../components/Chip";
import InfoChip from "../components/InfoChip";

const VisitClient = ({ params }) => {
  return (
    <Link
      to={`/users/${params.row.clientProfile}`}
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
  summaryChipWrapper: `mb-5 grid gap-5 lg:grid-cols-4`,
  summaryChip: `flex items-center gap-3 rounded-lg bg-white p-4 shadow-md`,
  summaryChipIcon: `h-12 w-12 shrink-0 rounded-lg p-2.5`,
  summaryChipSubtitle: `text-sm capitalize text-slate-400 font-medium`,
  summaryChipTitle: `mt-1 text-2xl font-semibold leading-none`,
};

const Clients = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => setOpenModal((previousState) => !previousState);
  return (
    <>
      <Transition show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          open={openModal}
          onClose={handleModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="mx-auto flex min-h-full max-w-5xl items-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full">
                  <div className="transform overflow-hidden rounded-md bg-white p-5 shadow-xl transition-all">
                    <h1 className="mb-6 border-b border-b-slate-200 pb-2 text-2xl font-semibold capitalize text-slate-900">
                      Add a new client
                    </h1>
                    <div className="grid grid-cols-2 gap-x-5">
                      <Select widthVariant="full" label="Select brand" />
                      <Input required label="Client Name" widthVariant="full" />
                      <Input
                        required
                        type="email"
                        label="Client email"
                        widthVariant="full"
                      />
                      <Input
                        required
                        type="tel"
                        label="Client phone"
                        widthVariant="full"
                      />
                      <Input
                        required
                        type="password"
                        label="Password"
                        widthVariant="full"
                      />
                      <Input
                        required
                        type="password"
                        label="Re-enter password"
                        widthVariant="full"
                      />
                    </div>
                    <div className="mt-2 flex justify-end gap-3 border-t border-t-slate-200 pt-5">
                      <Button handleClick={handleModal}>Cancel</Button>
                      <Button>Add client</Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>{" "}
        </Dialog>
      </Transition>
      <div className={styles.summaryChipWrapper}>
        <div className={styles.summaryChip}>
          <div
            className={`${styles.summaryChipIcon} bg-secondary bg-opacity-10 text-secondary`}
          >
            <HiOutlineUserPlus className="h-full w-full" />
          </div>
          <div>
            <h6 className={styles.summaryChipSubtitle}>New clients</h6>
            <h5 className={`${styles.summaryChipTitle} text-secondary`}>26</h5>
          </div>
        </div>
        <div className={styles.summaryChip}>
          <div
            className={`${styles.summaryChipIcon} bg-amber-50 text-amber-500`}
          >
            <HiArrowTrendingUp className="h-full w-full" />
          </div>
          <div>
            <h6 className={styles.summaryChipSubtitle}>clients in-process</h6>
            <h5 className={`${styles.summaryChipTitle} text-amber-500`}>587</h5>
          </div>
        </div>
        <div className={styles.summaryChip}>
          <div
            className={`${styles.summaryChipIcon} bg-green-50 text-green-500`}
          >
            <HiCheck className="h-full w-full" />
          </div>
          <div>
            <h6 className={styles.summaryChipSubtitle}>clients delivered</h6>
            <h5 className={`${styles.summaryChipTitle} text-green-500`}>408</h5>
          </div>
        </div>
        <div className={styles.summaryChip}>
          <div className={`${styles.summaryChipIcon} bg-red-50 text-red-500`}>
            <HiOutlineXMark className="h-full w-full" />
          </div>
          <div>
            <h6 className={styles.summaryChipSubtitle}>chargedback clients</h6>
            <h5 className={`${styles.summaryChipTitle} text-red-500`}>12</h5>
          </div>
        </div>
      </div>
      <div className="mb-5 flex items-center gap-2">
        <div>
          <h6 className="text-sm capitalize leading-none text-slate-400">
            Total
          </h6>
          <h5 className="text-xl font-semibold capitalize text-slate-900">
            Clients: <span className="font-bold text-secondary">458</span>
          </h5>
        </div>
        <button
          onClick={handleModal}
          after="Add client"
          className="relative mb-0.5 h-6 w-6 self-end rounded-full border-2 border-secondary text-secondary after:invisible after:absolute after:top-1/2 after:left-full after:ml-1 after:mt-2 after:w-max after:-translate-y-1/2 after:rounded-md after:bg-slate-900 after:px-3 after:py-1 after:text-sm after:capitalize after:text-white after:opacity-0 after:transition-all after:duration-300 after:content-[attr(after)] hover:bg-secondary hover:text-white hover:after:visible hover:after:mt-0 hover:after:opacity-100"
        >
          <HiOutlinePlusSm className="h-full w-full" />
        </button>
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
