import { useState, useRef } from "react";
import { HiOutlinePencil } from "react-icons/hi2";
import Box from "../../components/Box";
import Chip from "../../components/Chip";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

// Temporary Data
import { stagesData } from "../../data.js";

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

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("first");
};

const Stages = () => {
  const [stages, setStages] = useState(stagesData);
  const modal = useRef(null);
  return (
    <>
      <Modal modalTitle={"Stage"} ref={modal}>
        <form onSubmit={handleSubmit}>
          <Input label={"title"} required />
          <Select label={"Classname"} required widthVariant={"full"} />
          <Button type="submit" widthVariant="full" classes={"mt-6"}>
            Submit
          </Button>
        </form>
      </Modal>

      <Box>
        <Button
          handleClick={() => {
            modal.current.toggleModal();
          }}
          classes="ml-auto mb-5"
        >
          Add a new stage
        </Button>
        <div className={chips.wrapper}>
          {stages.map((stage) => {
            return (
              <div
                className={`${chips.chip} w-[calc(50%-0.5rem)]`}
                key={stage.id}
              >
                <div>
                  <h5 className={chips.title}>{stage.title}</h5>
                  <Chip
                    label={stage.title}
                    variant={stage.className}
                    outlined={stage.outlineVariant}
                  />
                </div>
                <div className={chips.actionWrapper}>
                  <button className={chips.action}>
                    <HiOutlinePencil className="h-full w-full" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Box>
    </>
  );
};

export default Stages;
