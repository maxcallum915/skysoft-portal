import { useEffect, useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { HiDocumentDuplicate, HiOutlinePencil } from "react-icons/hi2";
import Box from "../../components/Box";
import Chip from "../../components/Chip";
import Input from "../../components/Input";
import Select from "../../components/Select";
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
};
const { chips } = styles;

const options = [
  { id: 1, title: "black" },
  { id: 2, title: "danger" },
  { id: 3, title: "default" },
  { id: 4, title: "info" },
  { id: 5, title: "primary" },
  { id: 6, title: "secondary" },
  { id: 7, title: "success" },
  { id: 8, title: "warning" },
  { id: 9, title: "white" },
];

const Statuses = () => {
  const [statuses, setStatuses] = useState([]);
  const [selected, setSelected] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const { auth } = useAuth();
  const modal = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/order-statuses", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setStatuses(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [editId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: input,
      className: selected.title,
    };
    try {
      if (editId) {
        const response = await axios.put(`/order-statuses/${editId}`, data, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setStatuses((prevState) => [
          ...prevState.map((i) => (i.id === editId ? { ...response.data } : i)),
        ]);
        setEditId(null);
        toast.success("Status updated successfully");
      } else {
        const response = await axios.post("/order-statuses", data, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setStatuses((prevState) => [...prevState, response.data]);
        toast.success("Status created successfully");
      }
      modal.current.toggleModal();
      setInput("");
      setSelected([]);
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
      <Modal modalTitle={"Status"} ref={modal}>
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
        {statuses.length > 0 ? (
          <div className={chips.wrapper}>
            {statuses.map((status) => {
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
          <EmptyPlaceholder
            icon={<HiDocumentDuplicate className="h-full w-full" />}
            title={"Create statuses to display here"}
          />
        )}
      </Box>
    </>
  );
};

export default Statuses;
