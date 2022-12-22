import { useState, useEffect, useRef } from "react";
import {
  HiDocumentDuplicate,
  HiOutlinePencil,
  HiOutlinePhoto,
} from "react-icons/hi2";
import Box from "../../components/Box";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import axios from "../../config/axios";

const styles = {
  chips: {
    wrapper: `flex flex-wrap gap-4`,
    chip: `flex items-center justify-between gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-3`,
    logo: `h-14 w-14 shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-slate-200`,
    title: `text-lg font-semibold capitalize text-slate-900`,
    subtitle: `text-xs font-medium capitalize text-slate-400`,
    actionWrapper: `relative ml-6 flex items-center gap-2`,
    action: `h-6 w-6 rounded-md text-secondary hover:text-secondary focus:text-secondary focus:outline-none`,
  },
  emptyPlaceholder: {
    wrapper: `block w-full rounded-lg bg-slate-100 p-4 text-center text-lg text-slate-300`,
    icon: `mx-auto mb-2 block h-12 w-12`,
  },
  imgUploader: {
    wrapper: `relative mx-auto mb-3 block h-24 w-24 cursor-pointer rounded-lg bg-slate-100 p-2`,
    img: `absolute inset-0 h-full w-full object-contain`,
    input: `pointer-events-none absolute inset-0 opacity-0`,
  },
};
const { chips, emptyPlaceholder, imgUploader } = styles;

const OrderTypes = () => {
  const [orderTypes, setOrderTypes] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const modal = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/admin-settings/order-types", {
          signal: controller.signal,
        });
        setOrderTypes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [editId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("title", input);
    try {
      if (editId) {
        const response = await axios.put(
          `/admin-settings/order-types/${editId}`,
          data,
          {
            signal: controller.signal,
          }
        );
        setOrderTypes((prevState) => [
          ...prevState.map((i) => (i.id === editId ? { ...response.data } : i)),
        ]);
      } else {
        const response = await axios.post("/admin-settings/order-types", data);
        setOrderTypes((previousState) => [...previousState, response.data]);
      }
      modal.current.toggleModal();
      setInput("");
      setSelectedFile("");
      setEditId(null);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        console.log("err", error);
      }
    }
  };

  const handleEdit = (id) => {
    setEditId(id);
    modal.current.toggleModal();
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    setError("");
  };

  return (
    <>
      <Modal modalTitle={"Order Type"} ref={modal}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="file" className={imgUploader.wrapper}>
            {selectedFile ? (
              <img
                src={
                  typeof selectedFile === "object"
                    ? URL.createObjectURL(selectedFile)
                    : `http://localhost:8000/${selectedFile}`
                }
                alt="image"
                className={imgUploader.img}
              />
            ) : (
              <HiOutlinePhoto className="h-full w-full text-slate-300" />
            )}
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              required
              id="file"
              name="file"
              className={imgUploader.input}
            />
          </label>
          <Input
            label={"title"}
            required
            value={input}
            name="title"
            error={error}
            handleChange={handleInput}
          />
          <Button type="submit" widthVariant="full" classes={"mt-6"}>
            Submit
          </Button>
        </form>
      </Modal>

      <Box>
        <Button
          handleClick={() => modal.current.toggleModal()}
          classes="ml-auto mb-5"
        >
          Add a new type
        </Button>
        {orderTypes.length > 0 ? (
          <div className={chips.wrapper}>
            {orderTypes.map((type) => {
              return (
                <div className={chips.chip} key={type._id}>
                  <img
                    src={`http://localhost:8000/${type.imgUrl}`}
                    alt={type.title}
                    className={chips.logo}
                  />
                  <div>
                    <h5 className={chips.title}>{type.title}</h5>
                  </div>
                  <div className={chips.actionWrapper}>
                    <button
                      className={chips.action}
                      onClick={() => handleEdit(type._id)}
                    >
                      <HiOutlinePencil className="h-full w-full" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={emptyPlaceholder.wrapper}>
            <span className={emptyPlaceholder.icon}>
              <HiDocumentDuplicate className="h-full w-full" />
            </span>
            <p>Create order types to display here</p>
          </div>
        )}
      </Box>
    </>
  );
};

export default OrderTypes;
