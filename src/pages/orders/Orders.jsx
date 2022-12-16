import AvatarGroup from "../../components/AvatarGroup";
import { HiOutlineStar } from "react-icons/hi2";
import {
  HiArrowTrendingUp,
  HiCheck,
  HiOutlineUserPlus,
  HiOutlineXMark,
} from "react-icons/hi2";
import { HiOutlinePlusSm } from "react-icons/hi";
import Button from "../../components/Button";
import Box from "../../components/Box";
import Dropdown from "../../components/Dropdown";
import Avatar from "../../components/Avatar";
import Chip from "../../components/Chip";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import Input from "../../components/Input";
import { Fragment } from "react";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import InputRadio from "../../components/InputRadio";
import { DataGrid } from "@mui/x-data-grid";
import InfoChip from "../../components/InfoChip";
import { Link } from "react-router-dom";
import Progressbar from "../../components/Progressbar";
import TagInput from "../../components/TagInput";

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
  summaryChipWrapper: `mb-5 grid gap-5 lg:grid-cols-4`,
  summaryChip: `flex items-center gap-3 rounded-lg bg-white p-4 shadow-md`,
  summaryChipIcon: `h-12 w-12 shrink-0 rounded-lg p-2.5`,
  summaryChipSubtitle: `text-sm capitalize text-slate-400 font-medium`,
  summaryChipTitle: `mt-1 text-2xl font-semibold leading-none`,
};

const Orders = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => setOpenModal((previousState) => !previousState);
  return (
    <>
      {/* <Transition show={openModal} as={Fragment}>
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
                      Add a new order
                    </h1>
                    <Input
                      label="order title"
                      required
                      widthVariant="full"
                      type="text"
                    />
                    <div className="grid grid-cols-2 gap-x-5"></div>
                    <div className="grid grid-cols-3 gap-x-5">
                      <Select
                        widthVariant="full"
                        label="Select brand"
                        required
                      />
                      <Select
                        widthVariant="full"
                        label="Select client"
                        required
                      />
                      <Input
                        label="Sales email"
                        required
                        widthVariant="full"
                        type="email"
                      />
                      <Select widthVariant="full" label="order type" required />
                      <Input
                        label="Order Amount"
                        required
                        widthVariant="full"
                        type="number"
                      />
                      <Select widthVariant="full" label="payment gateway" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <Textarea
                        label="Description"
                        required
                        widthVariant="full"
                        rows={3}
                      />
                      <TagInput label="Services Tags" />
                    </div>
                    <h5 className="mb-3 select-none text-lg font-medium capitalize text-slate-700">
                      Services
                    </h5>
                    <div className="grid grid-cols-3 gap-x-5">
                      <InputRadio type="checkbox" text="logo design" />
                      <InputRadio type="checkbox" text="3d logo design" />
                      <InputRadio type="checkbox" text="logo/illustration" />
                      <InputRadio type="checkbox" text="website design" />
                      <InputRadio type="checkbox" text="stationary design" />
                      <InputRadio type="checkbox" text="brochure design" />
                      <InputRadio type="checkbox" text="website development" />
                      <InputRadio type="checkbox" text="project status" />
                      <InputRadio type="checkbox" text="social media design" />
                      <InputRadio type="checkbox" text="video production" />
                      <InputRadio type="checkbox" text="content writing" />
                      <InputRadio type="checkbox" text="copyright design" />
                      <InputRadio type="checkbox" text="other services" />
                      <InputRadio type="checkbox" text="no package" />
                      <InputRadio type="checkbox" text="client questionnaire" />
                      <InputRadio type="checkbox" text="SEO questionnaire" />
                      <InputRadio type="checkbox" text="trademark services" />
                      <InputRadio
                        type="checkbox"
                        text="email marketing questionnaire"
                      />
                      <InputRadio
                        type="checkbox"
                        text="academic writing questionnaire"
                      />
                    </div>
                    <div className="mt-2 flex justify-end gap-3 border-t border-t-slate-200 pt-5">
                      <Button handleClick={handleModal}>Cancel</Button>
                      <Button>Add order</Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
      <div className={styles.summaryChipWrapper}>
        <div className={styles.summaryChip}>
          <div
            className={`${styles.summaryChipIcon} bg-secondary bg-opacity-10 text-secondary`}
          >
            <HiOutlineUserPlus className="h-full w-full" />
          </div>
          <div>
            <h6 className={styles.summaryChipSubtitle}>New orders</h6>
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
            <h6 className={styles.summaryChipSubtitle}>orders in-process</h6>
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
            <h6 className={styles.summaryChipSubtitle}>orders delivered</h6>
            <h5 className={`${styles.summaryChipTitle} text-green-500`}>408</h5>
          </div>
        </div>
        <div className={styles.summaryChip}>
          <div className={`${styles.summaryChipIcon} bg-red-50 text-red-500`}>
            <HiOutlineXMark className="h-full w-full" />
          </div>
          <div>
            <h6 className={styles.summaryChipSubtitle}>chargedback orders</h6>
            <h5 className={`${styles.summaryChipTitle} text-red-500`}>12</h5>
          </div>
        </div>
      </div>
      <div className="mb-5 flex items-end gap-2">
        <div>
          <h6 className="text-sm capitalize leading-none text-slate-400">
            Total
          </h6>
          <h5 className="text-xl font-semibold capitalize text-slate-900">
            orders: <span className="font-bold text-secondary">458</span>
          </h5>
        </div>
        <Link to="new">
          <button
            // onClick={handleModal}
            after="Add order"
            className="relative mb-1 h-6 w-6 rounded-full border-2 border-secondary text-secondary after:invisible after:absolute after:top-1/2 after:left-full after:ml-1 after:mt-2 after:w-max after:-translate-y-1/2 after:rounded-md after:bg-slate-900 after:px-3 after:py-1 after:text-sm after:capitalize after:text-white after:opacity-0 after:transition-all after:duration-300 after:content-[attr(after)] hover:bg-secondary hover:text-white hover:after:visible hover:after:mt-0 hover:after:opacity-100"
          >
            <HiOutlinePlusSm className="h-full w-full" />
          </button>
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
      {/* <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        <Box>
          <div className="mb-5 flex items-start gap-3">
            <div className="mr-auto">
              <span className="text-xl font-semibold capitalize text-slate-700">
                Create Website
              </span>
              <span className="block text-sm capitalize text-slate-400">
                <b>client:</b> christian jimenez
              </span>
            </div>
            <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
            <Dropdown />
          </div>
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="max-w-max rounded-md bg-slate-100 py-2 px-3 text-sm font-medium capitalize text-slate-700">
              <div>
                Budget: <span className="font-bold">$28.4k</span>
              </div>
            </div>
            <div>
              <p className="mb-1 text-right text-xs">
                Start date: <span className="font-bold">01/01/2023</span>
              </p>
              <p className="text-right text-xs">
                End date: <span className="font-bold">31/01/2023</span>
              </p>
            </div>
          </div>
          <p className="text-slate-400">
            Your domain name should reflect your products or services so that
            your...
          </p>
          <div className="mt-5 border-t border-slate-200 pt-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-light text-slate-400">
                <b className="font-semibold text-slate-500">All Hours:</b>{" "}
                328/344
              </span>
              <Chip label="4 days left" variant="danger" />
            </div>
            <div className="mb-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs capitalize text-slate-400">
                  Tasks: 328/344
                </span>
                <span className="text-xs capitalize text-slate-400">
                  95% completed
                </span>
              </div>
              <Progressbar
                width="w-full"
                height="h-1.5"
                rounded
                completed={90}
              />
            </div>
            <AvatarGroup>
              <Avatar
                icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png"
                rounded
                title="John Doe"
              />
              <Avatar
                icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/6.png"
                rounded
                title="John Doe"
              />
              <Avatar
                icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/7.png"
                rounded
                title="John Doe"
              />
              <Avatar
                icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png"
                rounded
                title="John Doe"
              />
            </AvatarGroup>
          </div>
        </Box>
      </div> */}
    </>
  );
};

export default Orders;
