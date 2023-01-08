import { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Tab } from "@headlessui/react";
import { toast } from "react-hot-toast";
import {
  HiDocumentDuplicate,
  HiOutlineEnvelope,
  HiOutlinePencil,
  HiOutlinePhone,
} from "react-icons/hi2";
import Box from "../../components/Box";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Chip from "../../components/Chip";
import Progressbar from "../../components/Progressbar";
import Loader from "../../components/Loader";
import EmptyPlaceholder from "../../components/EmptyPlaceholder";
import Select from "../../components/Select";
import Modal from "../../components/Modal";
import relativeDate from "../../utils/relativeDate";
import formattedCurrency from "../../utils/formattedCurrency";
import useAxios from "../../hooks/useAxios";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

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
          {params.value.percentage.toFixed()}%
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
          src={`http://localhost:8000/${params.value.imgUrl}`}
          alt={params.value.title}
          className="block h-5 w-5 object-contain"
        />
        <span className="capitalize">{params.value.title}</span>
      </div>
    ),
    flex: 1,
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
      return relativeDate(value);
      // return new Date(value).toISOString().split("T")[0];
    },
    flex: 1,
  },
];

const styles = {
  clientTitle: `mb-1.5 text-2xl font-semibold capitalize leading-none text-slate-900`,
  clientSubtitle: `text-xs font-medium text-slate-400`,
  avatarWrapper: `flex items-start gap-3`,
  avatarBox: `flex min-w-[225px] items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2.5 py-3`,
  avatarSubtitle: `text-xs font-semibold leading-tight text-slate-400 capitalize`,
  avatarTitle: `font-semibold text-secondary capitalize`,
  infoRow: {
    wrapper: `mt-10 flex flex-wrap items-start justify-between gap-6`,
    title: `font-medium capitalize leading-none text-slate-400`,
    subtitleWrapper: `flex items-center gap-2`,
    subtitle: `font-semibold capitalize leading-tight text-secondary`,
  },
  tabs: {
    tabList: `mb-3 flex gap-2 rounded-xl bg-white p-1.5 border border-slate-200 w-full`,
    tab: `rounded-lg py-2 px-3 font-medium ring-white ring-opacity-20 ring-offset-2 ring-offset-blue-300 focus:outline-none focus:ring-2`,
    tabDefault: `text-slate-700 hover:bg-slate-100 hover:text-slate-900`,
    tabSelected: `bg-gradient-to-l from-primary to-secondary text-white shadow-md`,
  },
  orderCard: {
    top: `mb-5 flex items-start justify-between gap-3 border-b border-slate-200 pb-5`,
    title: `mb-1 text-lg font-semibold capitalize leading-none text-secondary`,
    subtitle: `text-sm capitalize text-slate-400`,
    worth: `max-w-max rounded-md bg-slate-100 py-2 px-3 text-sm font-semibold capitalize text-slate-700`,
    flexBetween: `flex items-center justify-between`,
    icon: `h-5 w-5 object-contain`,
  },
};
const { infoRow, tabs, orderCard } = styles;

const initialChanges = {
  modalTitle: "",
  options: [],
  selectedOption: "",
  requestPath: "",
  fieldName: "",
};

const ClientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState(false);
  const [changes, setChanges] = useState(initialChanges);
  const [toggleView, setToggleView] = useState(false);
  // const { response: client, loading, error, axiosFetch } = useAxios();
  const [client, setClient] = useState();
  const [error, setError] = useState();
  const { auth } = useAuth();
  const [refresh, setRefresh] = useState(false);

  const modal = useRef(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const { data: client } = await axios.get(`/api/clients/${id}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setClient(client);
      } catch (error) {
        console.log(error);
        setError(error?.response?.data.message);
      }
    };

    fetchClient();
    // axiosFetch({
    //   method: "GET",
    //   url: `clients/${id}`,
    // });
  }, [id, refresh]);

  const toggleEditable = () => setIsEditable((prevState) => !prevState);

  const handleEdit = async (e) => {
    const { requestPath, modalTitle, fieldName } = e;
    try {
      const { data: options } = await axios.get(`${requestPath}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      modal.current.toggleModal();
      setChanges((prevState) => ({
        ...prevState,
        requestPath,
        modalTitle,
        options,
        fieldName,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (e) => {
    setChanges((prevState) => ({ ...prevState, selectedOption: e }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `/api/clients/${id}`,
        {
          ...changes.selectedOption,
          fieldName: changes.fieldName,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      toast.success("Order successfully updated");
      setChanges(initialChanges);
      toggleEditable();
      setRefresh((prev) => !prev);
      modal.current.toggleModal();
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  };

  return (
    <>
      {/* {loading && <Loader />}
      {!loading && error && <div>{error}</div>}
      {!loading && !error && !client && <div>Resource not found</div>} */}
      {client && (
        <>
          {auth?._id === client?.user?._id &&
            (isEditable ? (
              <Button handleClick={toggleEditable} classes={"mb-3 ml-auto"}>
                Cancel
              </Button>
            ) : (
              <Button handleClick={toggleEditable} classes={"mb-3 ml-auto"}>
                Edit Client
              </Button>
            ))}

          <Modal modalTitle={changes.modalTitle} ref={modal}>
            <form onSubmit={handleUpdate}>
              <Select
                required
                widthVariant={"full"}
                options={changes.options}
                selected={changes.selectedOption}
                handleSelect={handleSelect}
              />
              <Button type="submit" widthVariant="full" classes={"mt-6"}>
                {changes.modalTitle}
              </Button>
            </form>
          </Modal>

          <Box>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className={`mb-2 flex items-center gap-2`}>
                  <Avatar title={client?.title} size="md" rounded />
                  <h2 className={`${styles.clientTitle} mb-0`}>
                    {client?.title}
                  </h2>
                </div>
                <h5 className={`${styles.clientSubtitle} mb-0.5`}>
                  Client ID: {client?._id}
                </h5>
                <h5 className={styles.clientSubtitle}>
                  Created on: {relativeDate(client?.createdAt)}
                </h5>
              </div>
              <div className={styles.avatarWrapper}>
                <Link
                  to={`/users/${client?.user?._id}`}
                  className={styles.avatarBox}
                >
                  <Avatar rounded title={client?.user.name} shadow />
                  <div>
                    <h6 className={styles.avatarSubtitle}>
                      {client?.user.role}
                    </h6>
                    <h5 className={styles.avatarTitle}>{client?.user.name}</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className={infoRow.wrapper}>
              <div>
                <h5 className={`mb-3 ${infoRow.title}`}>Associated Brand</h5>
                <div className={infoRow.subtitleWrapper}>
                  <img
                    src={`http://localhost:8000/${client?.brand?.imgUrl}`}
                    className="w-8 object-contain"
                  />
                  <h6 className={infoRow.subtitle}>{client?.brand?.title}</h6>
                </div>
              </div>
              <div>
                <h5 className={`mb-3 ${infoRow.title}`}>Client Category</h5>
                <div className={infoRow.subtitleWrapper}>
                  {client?.orders?.length ? (
                    <>
                      <img
                        src={`http://localhost:8000/${client?.category?.imgUrl}`}
                        className="w-5 object-contain"
                      />
                      <h6 className={infoRow.subtitle}>
                        {client?.category?.title}
                      </h6>
                    </>
                  ) : (
                    <h6 className={infoRow.subtitle}>-</h6>
                  )}
                </div>
              </div>
              <div>
                <h5 className={`mb-3 ${infoRow.title}`}>Total Worth</h5>
                <h6 className={infoRow.subtitle}>
                  {client.worth !== 0 ? formattedCurrency(client.worth) : "-"}
                </h6>
              </div>
              <div>
                <h5 className={`mb-3 ${infoRow.title}`}>Initial Payment</h5>
                <h6 className={infoRow.subtitle}>
                  {!client?.orders?.length
                    ? "No order yet"
                    : formattedCurrency(client?.orders[0].amount)}
                </h6>
              </div>
              <div>
                <div className="flex items-start gap-2">
                  <h5 className={`mb-3 ${infoRow.title}`}>Client Status</h5>
                  {isEditable && (
                    <button
                      onClick={() =>
                        handleEdit({
                          requestPath: "/api/order-statuses",
                          modalTitle: "Update Client Status",
                          fieldName: "status",
                        })
                      }
                    >
                      <HiOutlinePencil />
                    </button>
                  )}
                </div>
                <Chip
                  label={client?.status?.title}
                  variant={client?.status?.className}
                />
              </div>
              <div>
                <h5 className={`mb-3 ${infoRow.title}`}>Email</h5>
                <div className={infoRow.subtitleWrapper}>
                  <HiOutlineEnvelope className="h-6 w-6 text-secondary" />
                  <a
                    href={`mailto:${client?.email}`}
                    className={`${infoRow.subtitle} !lowercase`}
                  >
                    {client?.email}
                  </a>
                </div>
              </div>
              <div>
                <h5 className={`mb-3 ${infoRow.title}`}>Phone</h5>
                <div className={infoRow.subtitleWrapper}>
                  <HiOutlinePhone className="h-6 w-6 text-secondary" />
                  <a href={`tel:${client?.phone}`} className={infoRow.subtitle}>
                    {client?.phone}
                  </a>
                </div>
              </div>
            </div>
          </Box>
          <Tab.Group as={"div"} className={"mt-5"}>
            <Tab.List className={`${tabs.tabList}`}>
              <Tab
                className={({ selected }) =>
                  `${tabs.tab} ${selected ? tabs.tabSelected : tabs.tabDefault}`
                }
              >
                Orders
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                {!client?.orders.length ? (
                  <>
                    {auth._id === client.user._id && (
                      <Button
                        classes={"ml-auto mb-3"}
                        handleClick={() => {
                          navigate("/orders/new");
                        }}
                      >
                        Add an order
                      </Button>
                    )}
                    <EmptyPlaceholder
                      icon={<HiDocumentDuplicate className="h-full w-full" />}
                      title={"Create orders to display here"}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      handleClick={() => setToggleView(!toggleView)}
                      classes={"ml-auto mb-3"}
                    >
                      Toggle View
                    </Button>
                    {toggleView ? (
                      <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
                        {client?.orders.map((order) => {
                          return (
                            <Box key={order._id}>
                              <Link to={`/orders/${order._id}`}>
                                <div className={orderCard.top}>
                                  <div>
                                    <h5 className={orderCard.title}>
                                      {order.title}
                                    </h5>
                                    <h6
                                      className={`${orderCard.subtitle} !text-xs`}
                                    >
                                      order ID: {order._id}
                                    </h6>
                                  </div>
                                  <div className={orderCard.worth}>
                                    Amount:{" "}
                                    <span className="text-secondary">
                                      {formattedCurrency(order.amount)}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className={`${orderCard.flexBetween} mb-2.5`}
                                >
                                  <span className={orderCard.subtitle}>
                                    Sale by
                                  </span>
                                  <span
                                    className={`${orderCard.subtitle} !lowercase`}
                                  >
                                    {order.salesEmail}
                                  </span>
                                </div>
                                <div
                                  className={`${orderCard.flexBetween} mb-2.5`}
                                >
                                  <span className={orderCard.subtitle}>
                                    Order Type
                                  </span>
                                  <div className="flex items-center gap-1">
                                    <img
                                      src={`http://localhost:8000/${order.orderType.imgUrl}`}
                                      alt={order.orderType.title}
                                      className={orderCard.icon}
                                    />
                                    <span className={orderCard.subtitle}>
                                      {order.orderType.title}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className={`${orderCard.flexBetween} mb-2.5`}
                                >
                                  <span className={orderCard.subtitle}>
                                    Order Stage
                                  </span>
                                  <Chip
                                    label={order.orderStage.title}
                                    variant={order.orderStage.className}
                                  />
                                </div>
                                <div className={orderCard.flexBetween}>
                                  <span className={orderCard.subtitle}>
                                    Order Health
                                  </span>
                                  <Chip
                                    label={order.orderHealth.title}
                                    variant={order.orderStage.className}
                                  />
                                </div>
                                <div
                                  className={`${orderCard.flexBetween} mb-1 mt-5`}
                                >
                                  <h6 className={orderCard.subtitle}>
                                    Order Completion:
                                  </h6>
                                  <h6 className={orderCard.subtitle}>
                                    {order.orderStage.percentage.toFixed()}%
                                    completed
                                  </h6>
                                </div>
                                <Progressbar
                                  width="w-full"
                                  height="h-1.5"
                                  progress={order.orderStage.percentage.toFixed()}
                                  rounded
                                />
                              </Link>
                            </Box>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="h-[800px] w-full">
                        <DataGrid
                          getRowId={(row) => row._id}
                          rows={client?.orders}
                          columns={columns}
                          // loading={loading}
                          // components={{ Toolbar: GridToolbar }}
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
                    )}
                  </>
                )}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </>
      )}
    </>
  );
};

export default ClientDetails;
