import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { toast } from "react-hot-toast";
import {
  HiChatBubbleLeftRight,
  HiOutlinePencil,
  HiPaperAirplane,
  HiPaperClip,
  HiXMark,
} from "react-icons/hi2";
import Box from "../../components/Box";
import Avatar from "../../components/Avatar";
import Chip from "../../components/Chip";
import Progressbar from "../../components/Progressbar";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import ActivityChipGroup from "../../components/ActivityChipGroup";
import ActivityChip from "../../components/ActivityChip";
import EmptyPlaceholder from "../../components/EmptyPlaceholder";
import Modal from "../../components/Modal";
import relativeDate from "../../utils/relativeDate";
import formattedCurrency from "../../utils/formattedCurrency";
import useAxios from "../../hooks/useAxios";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

const styles = {
  orderTitle: `mb-1.5 text-2xl font-semibold capitalize leading-none text-slate-900`,
  orderSubtitle: `text-xs font-medium text-slate-400`,
  avatarWrapper: `flex items-start gap-3`,
  avatarBox: `flex min-w-[225px] items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2.5 py-3`,
  avatarSubtitle: `text-xs font-semibold leading-tight text-slate-400`,
  avatarTitle: `font-semibold text-secondary capitalize`,
  infoRow: {
    wrapper: `mt-10 flex flex-wrap items-start justify-between gap-6`,
    title: `font-medium capitalize leading-none text-slate-400 min-w-max`,
    subtitleWrapper: `flex items-center gap-2`,
    subtitle: `font-semibold capitalize leading-tight text-secondary`,
  },
  tabs: {
    tabList: `mb-3 flex gap-2 rounded-xl bg-white p-1.5 border border-slate-200 w-full`,
    tab: `rounded-lg py-2 px-3 font-medium ring-white ring-opacity-20 ring-offset-2 ring-offset-blue-300 focus:outline-none focus:ring-2`,
    tabDefault: `text-slate-700 hover:bg-slate-100 hover:text-slate-900`,
    tabSelected: `bg-gradient-to-l from-primary to-secondary text-white shadow-md`,
  },
  commentForm: {
    wrapper: `relative mt-8 flex items-start gap-2`,
    uploadBtn: `relative block w-max rounded-lg bg-gradient-to-l from-primary to-secondary py-2.5 px-3 capitalize text-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg`,
    uploadInput: `absolute inset-0 opacity-0`,
    fileChip: `flex w-max items-center gap-3 rounded-full bg-secondary bg-opacity-10 py-2 pr-2 pl-3 text-xs font-semibold text-secondary`,
    fileChipBtn: `h-5 w-5 rounded-full bg-secondary p-0.5 text-white hover:bg-red-400`,
  },
};
const { infoRow, tabs, commentForm } = styles;

const initialCommentInputs = {
  comment: "",
  commentError: "",
  files: "",
};

const initialChanges = {
  modalTitle: "",
  options: [],
  selectedOption: "",
  requestPath: "",
  fieldName: "",
};

const OrderDetails = () => {
  const { id } = useParams();
  const [commentInputs, setCommentInputs] = useState(initialCommentInputs);
  const [comments, setComments] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [changes, setChanges] = useState(initialChanges);
  const [order, setOrder] = useState("");
  const { auth } = useAuth();
  const [refresh, setRefresh] = useState(false);
  // const { response: order, loading, error, axiosFetch } = useAxios();

  const modal = useRef(null);

  const commentRef = useRef(null);

  useEffect(() => {
    // axiosFetch({
    //   method: "GET",
    //   url: `orders/${id}`,
    // });
    const fetchData = async () => {
      try {
        const [{ data: order }, { data: comments }] = await Promise.all([
          axios.get(`orders/${id}`, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/comments", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
            params: {
              orderId: id,
            },
          }),
        ]);
        setOrder(order);
        setComments(comments);
      } catch (error) {
        console.log(error);
      }
    };
    console.log("first");
    fetchData();
  }, [id, refresh]);

  useEffect(() => {
    commentRef.current?.scrollIntoView();
  }, [comments]);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (files) {
      setCommentInputs((prevState) => ({ ...prevState, [name]: files }));
    }
    if (type !== "file") {
      setCommentInputs((prevState) => ({ ...prevState, [name]: value }));
    }
    if (commentInputs.commentError) {
      setCommentInputs((prevState) => ({ ...prevState, commentError: "" }));
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentInputs.comment && !commentInputs.files) {
      return setCommentInputs((prevState) => ({
        ...prevState,
        commentError: "Please enter a comment",
      }));
    }
    const formData = new FormData();
    formData.append("orderId", id);
    if (!commentInputs.commentError) {
      if (commentInputs.comment) {
        formData.append("comment", commentInputs.comment);
      }
      if (commentInputs.files) {
        for (let i = 0; i < commentInputs.files.length; i++) {
          formData.append("files", commentInputs.files[i]);
        }
      }
    }
    setCommentInputs(initialCommentInputs);
    const { data: newComment } = await axios.post("/comments", formData, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    setComments((prevState) => [...prevState, newComment]);
  };

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
        `/orders/${id}`,
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
      modal.current.toggleModal();
      toggleEditable();
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  // const deleteFiles = (name) => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     files: Object.values(prevState.files).filter(
  //       (file) => file.name !== name
  //     ),
  //   }));
  // };
  {
    console.log(auth, order);
  }
  return (
    <>
      {/* {loading && <Loader />}
      {!loading && error && <div>{error}</div>}
      {!loading && !error && !order && <div>Resource not available</div>} */}
      {/* {!loading && !error && order && ( */}
      {order && (
        <>
          {auth?._id === order?.user?._id &&
            (isEditable ? (
              <Button handleClick={toggleEditable} classes={"mb-3 ml-auto"}>
                Cancel
              </Button>
            ) : (
              <Button handleClick={toggleEditable} classes={"mb-3 ml-auto"}>
                Edit Order
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
                <h2 className={styles.orderTitle}>{order?.title}</h2>
                <h5 className={`${styles.orderSubtitle} mb-0.5`}>
                  Order ID: {order?._id}
                </h5>
                <h5 className={styles.orderSubtitle}>
                  Created on: {relativeDate(order?.createdAt)}
                </h5>
              </div>
              <div className={styles.avatarWrapper}>
                <Link
                  to={`/clients/${order?.client?._id}`}
                  className={styles.avatarBox}
                >
                  <Avatar rounded title={order?.client?.title} />
                  <div>
                    <h5 className={styles.avatarSubtitle}>Client</h5>
                    <h5 className={styles.avatarTitle}>
                      {order?.client?.title}
                    </h5>
                  </div>
                </Link>
                {/* <div className={styles.avatarBox}>
                  <Avatar
                    icon={"https://xsgames.co/randomusers/avatar.php?g=male"}
                    rounded
                    title={"John doe"}
                    shadow
                  />
                  <div>
                    <h5 className={styles.avatarSubtitle}>Account Manager</h5>
                    <h5 className={styles.avatarTitle}>Sylvia Serenity</h5>
                  </div>
                </div> */}
              </div>
            </div>
            <div className={infoRow.wrapper}>
              <div>
                <h5 className={`mb-3 ${infoRow.title}`}>Associated Brand</h5>
                <div className={infoRow.subtitleWrapper}>
                  <img
                    src={`http://localhost:8000/${order?.brand?.imgUrl}`}
                    className="w-8 object-contain"
                  />
                  <h6 className={infoRow.subtitle}>{order?.brand?.title}</h6>
                </div>
              </div>
              <div>
                <h5 className={`mb-3 ${infoRow.title}`}>Sale by</h5>
                <h6 className={`${infoRow.subtitle} !lowercase`}>
                  {order?.salesEmail}
                </h6>
              </div>
              <div>
                <h5 className={`mb-3 ${infoRow.title}`}>Payment Type</h5>
                <h6 className={infoRow.subtitle}>{order?.paymentType}</h6>
              </div>
              <div>
                <h5 className={`mb-3 ${infoRow.title}`}>Order Amount</h5>
                <h6 className={infoRow.subtitle}>
                  {formattedCurrency(order?.amount)}
                </h6>
              </div>
              <div>
                <div className="flex items-start gap-2">
                  <h5 className={`mb-3 ${infoRow.title}`}>Order Type</h5>
                  {isEditable && (
                    <button
                      onClick={() =>
                        handleEdit({
                          requestPath: "/order-types",
                          modalTitle: "Update Order Type",
                          fieldName: "orderType",
                        })
                      }
                    >
                      <HiOutlinePencil />
                    </button>
                  )}
                </div>
                <div className={infoRow.subtitleWrapper}>
                  <img
                    src={`http://localhost:8000/${order?.orderType?.imgUrl}`}
                    className="w-5 object-contain"
                  />
                  <h6 className={infoRow.subtitle}>
                    {order?.orderType?.title}
                  </h6>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-2">
                  <h5 className={`mb-3 ${infoRow.title}`}>Order Health</h5>
                  {isEditable && (
                    <button
                      onClick={() =>
                        handleEdit({
                          requestPath: "/order-health",
                          modalTitle: "Update Order Health",
                          fieldName: "orderHealth",
                        })
                      }
                    >
                      <HiOutlinePencil />
                    </button>
                  )}
                </div>
                <Chip
                  label={order?.orderHealth?.title}
                  variant={order?.orderHealth?.className}
                />
              </div>
              <div>
                <div className={`mb-3 ${infoRow.subtitleWrapper}`}>
                  <h5 className={infoRow.title}>Order Stage</h5>
                  <Progressbar
                    height="h-1"
                    width="w-12"
                    rounded
                    progress={order?.orderStage?.percentage.toFixed()}
                  />
                  <h6 className="text-xs font-semibold text-slate-900">
                    {order?.orderStage?.percentage.toFixed()}%
                  </h6>
                  {isEditable && (
                    <button
                      onClick={() =>
                        handleEdit({
                          requestPath: "/order-stages",
                          modalTitle: "Update Order Stage",
                          fieldName: "orderStage",
                        })
                      }
                    >
                      <HiOutlinePencil />
                    </button>
                  )}
                </div>
                <Chip
                  label={order?.orderStage?.title}
                  variant={order?.orderStage?.className}
                />
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
                Comments
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <Box>
                  {comments.length > 0 ? (
                    <div className="custom-scrollbar relative max-h-[300px] overflow-y-auto">
                      {comments.map((comment) => {
                        return (
                          <ActivityChip
                            key={comment._id}
                            title={comment.comment}
                            date={relativeDate(comment.createdAt)}
                            subtitle={auth.name}
                          />
                        );
                      })}
                      <div ref={commentRef}></div>
                    </div>
                  ) : (
                    <EmptyPlaceholder
                      icon={<HiChatBubbleLeftRight className="h-full w-full" />}
                      title={"No comments to show right now"}
                    />
                  )}

                  <form
                    onSubmit={handleCommentSubmit}
                    className={commentForm.wrapper}
                  >
                    {/* <label htmlFor="file" className={commentForm.uploadBtn}>
                      <HiPaperClip className="h-5 w-5" />
                      <input
                        type="file"
                        className={commentForm.uploadInput}
                        multiple
                        name="files"
                        id="file"
                        onChange={handleChange}
                      />
                    </label> */}
                    <Input
                      value={commentInputs.comment}
                      name="comment"
                      error={
                        commentInputs.commentError && commentInputs.commentError
                      }
                      widthVariant="full"
                      handleChange={handleChange}
                    />
                    <Button
                      type="submit"
                      classes={"ml-auto absolute top-[3px] right-1"}
                    >
                      <HiPaperAirplane className="h-5 w-5" />
                    </Button>
                  </form>
                  <div className="flex flex-wrap items-center gap-2">
                    {commentInputs.files &&
                      Object.values(commentInputs.files).map((file) => {
                        return (
                          <div className={commentForm.fileChip} key={file.name}>
                            {file.name}
                            {/* <button
                            onClick={() => deleteFiles(file.name)}
                            className={commentForm.fileChipBtn}
                          >
                            <HiXMark className="h-full w-full" />
                          </button> */}
                          </div>
                        );
                      })}
                  </div>
                </Box>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </>
      )}
    </>
  );
};

export default OrderDetails;
