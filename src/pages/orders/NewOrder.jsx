import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import InputRadio from "../../components/InputRadio";
import TagInput from "../../components/TagInput";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const styles = {
  title: `mb-6 border-b border-b-slate-200 pb-2 text-2xl font-semibold capitalize text-slate-900`,
  buttonGroup: `mt-2 flex justify-end gap-3 border-t border-t-slate-200 pt-5`,
};

const NewOrder = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className={styles.title}>Add a new order</h1>
      <div className="grid grid-cols-3 gap-x-5">
        <Input label="order title" required widthVariant="full" type="text" />
        <Select widthVariant="full" label="Select brand" required />
        <Select widthVariant="full" label="Select client" required />
        <Input label="Sales email" required widthVariant="full" type="email" />
        <Select widthVariant="full" label="sales type" required />
        <Select widthVariant="full" label="order type" required />
        <Input
          label="Order Amount"
          required
          widthVariant="full"
          type="number"
        />
        <Select widthVariant="full" label="payment gateway" />
      </div>
      <div className="grid grid-cols-2 gap-x-5">
        <Textarea label="Description" required widthVariant="full" rows={3} />
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
        <InputRadio type="checkbox" text="email marketing questionnaire" />
        <InputRadio type="checkbox" text="academic writing questionnaire" />
      </div>
      <div className={styles.buttonGroup}>
        <Button
          handleClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </Button>
        <Button>Add order</Button>
      </div>
    </>
  );
};

export default NewOrder;
