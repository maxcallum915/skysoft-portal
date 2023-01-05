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

const initialInputs = {
  title: "",
  percentage: "",
  className: "",
};

const Stages = () => {
  const [stages, setStages] = useState([]);
  const [inputs, setInputs] = useState(initialInputs);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const { auth } = useAuth();
  const modal = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: fetchedStages } = await axios.get("/order-stages", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setStages(fetchedStages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [editId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: inputs.title,
      percentage: inputs.percentage,
      className: inputs.className.title,
    };
    try {
      if (editId) {
        const { data: updatedStage } = await axios.put(
          `/order-stages/${editId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setStages((prevState) => [
          ...prevState.map((i) => (i.id === editId ? { ...updatedStage } : i)),
        ]);
        setEditId(null);
        toast.success("Stage updated successfully");
      } else {
        const { data: newStage } = await axios.post("/order-stages", data, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setStages((prevState) => [...prevState, newStage]);
        toast.success("Stage created successfully");
      }
      modal.current.toggleModal();
      setInputs(initialInputs);
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

  const handleChange = (e, name) => {
    if (name) {
      setInputs((prevState) => ({ ...prevState, [name]: e }));
    } else {
      const { name, value } = e.target;
      setInputs((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  return (
    <>
      <Modal modalTitle={"Status"} ref={modal}>
        <form onSubmit={handleSubmit}>
          <Input
            label={"title"}
            required
            value={inputs.title}
            name={"title"}
            error={error}
            handleChange={handleChange}
          />
          <Input
            label={"percentage"}
            required
            type="number"
            value={inputs.percentage}
            name={"percentage"}
            error={error}
            handleChange={handleChange}
            min="0"
            max="100"
            step="any"
          />
          <Select
            label={"chip style"}
            required
            widthVariant={"full"}
            options={options}
            selected={inputs.className}
            handleSelect={(e) => handleChange(e, "className")}
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
          Add a new stage
        </Button>
        {stages.length > 0 ? (
          <div className={chips.wrapper}>
            {stages.map((stage) => {
              return (
                <div
                  className={`${chips.chip} w-[calc(50%-0.5rem)]`}
                  key={stage._id}
                >
                  <div>
                    <h5 className={chips.title}>{stage.title}</h5>
                    <div className="flex items-center gap-2">
                      <Chip
                        label={stage.title}
                        variant={stage.className}
                        outlined={stage.outlineVariant}
                      />
                      <span className={chips.subtitle}>
                        {stage.percentage.toFixed()}%
                      </span>
                    </div>
                  </div>
                  <div className={chips.actionWrapper}>
                    <button
                      className={chips.action}
                      onClick={() => handleEdit(stage._id)}
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
            title={"Create stages to display here"}
          />
        )}
      </Box>
    </>
  );
};

export default Stages;
