import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import {
  HiDocumentDuplicate,
  HiOutlinePencil,
  HiOutlinePhoto,
} from "react-icons/hi2";
import Box from "../../components/Box";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import EmptyPlaceholder from "../../components/EmptyPlaceholder";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

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
  imgUploader: {
    wrapper: `relative mx-auto mb-3 block h-24 w-24 cursor-pointer rounded-lg bg-slate-100 p-2`,
    img: `absolute inset-0 h-full w-full object-contain`,
    input: `pointer-events-none absolute inset-0 opacity-0`,
  },
};
const { chips, imgUploader } = styles;

const OrderTypes = () => {
  const [orderTypes, setOrderTypes] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const { auth } = useAuth();
  const modal = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: fetchedTypes } = await axios.get("/api/order-types", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setOrderTypes(fetchedTypes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [editId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("title", input);
    try {
      if (editId) {
        const { data: updatedType } = await axios.put(
          `/api/order-types/${editId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setOrderTypes((prevState) => [
          ...prevState.map((i) => (i.id === editId ? { ...updatedType } : i)),
        ]);
        setEditId(null);
        toast.success("Order type updated successfully");
      } else {
        const { data: newType } = await axios.post(
          "/api/order-types",
          formData,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        toast.success("Order type created successfully");
        setOrderTypes((prevState) => [...prevState, newType]);
      }
      modal.current.toggleModal();
      setInput("");
      setSelectedFile("");
    } catch (error) {
      if (error?.response) {
        setError(error?.response?.data.message);
      } else {
        console.log(error);
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
                    : `https://backend-production-56ca.up.railway.app/${selectedFile}`
                }
                alt="image"
                className={imgUploader.img}
              />
            ) : (
              <HiOutlinePhoto className="h-full w-full text-slate-300" />
            )}
            <input
              type="file"
              accept="image/*"
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
                    src={`https://backend-production-56ca.up.railway.app/${type.imgUrl}`}
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
          <EmptyPlaceholder
            icon={<HiDocumentDuplicate className="h-full w-full" />}
            title={"Create order types to display here"}
          />
        )}
      </Box>
    </>
  );
};

export default OrderTypes;
