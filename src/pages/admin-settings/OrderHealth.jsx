import { useEffect, useState, useRef } from "react";
import { HiDocumentDuplicate, HiOutlinePencil } from "react-icons/hi2";
import Box from "../../components/Box";
import Chip from "../../components/Chip";
import Input from "../../components/Input";
import Select from "../../components/Select";
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
};
const { chips, emptyPlaceholder } = styles;

const options = [
  "black",
  "danger",
  "default",
  "info",
  "primary",
  "secondary",
  "success",
  "warning",
  "white",
];

const OrderHealth = () => {
  const [health, setHealth] = useState([]);
  const [selected, setSelected] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const modal = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/admin-settings/order-health", {
          signal: controller.signal,
        });
        setHealth(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [editId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: input,
      className: selected,
    };
    try {
      if (editId) {
        const response = await axios.put(
          `/admin-settings/order-health/${editId}`,
          data
        );
        setHealth((prevState) => [
          ...prevState.map((i) => (i.id === editId ? (i = response.data) : i)),
        ]);
      } else {
        const response = await axios.post("/admin-settings/order-health", data);
        setHealth((prevState) => [...prevState, response.data]);
      }
      modal.current.toggleModal();
      setInput("");
      setSelected([]);
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
      <Modal modalTitle={"Order Health"} ref={modal}>
        <form onSubmit={handleSubmit}>
          <Input
            label={"title"}
            required
            value={input}
            error={error}
            handleChange={handleInput}
          />
          <Select
            label={"chip style"}
            required
            widthVariant={"full"}
            options={options}
            selected={selected}
            handleSelect={setSelected}
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
          Add a new status
        </Button>
        {health.length > 0 ? (
          <div className={chips.wrapper}>
            {health.map((status) => {
              return (
                <div className={chips.chip} key={status._id}>
                  <div>
                    <h5 className={chips.title}>{status.title}</h5>
                    <Chip label={status.title} variant={status.className} />
                  </div>
                  <div className={chips.actionWrapper}>
                    <button
                      className={chips.action}
                      onClick={() => handleEdit(status._id)}
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
            <p>Create an order health to display here</p>
          </div>
        )}
      </Box>
    </>
  );
};

export default OrderHealth;
