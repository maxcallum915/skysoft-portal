import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Select from "../../components/Select";
import Input from "../../components/Input";

const styles = {
  title: `mb-6 border-b border-b-slate-200 pb-2 text-2xl font-semibold capitalize text-slate-900`,
  buttonGroup: `mt-2 flex justify-end gap-3 border-t border-t-slate-200 pt-5`,
};

const NewClient = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className={styles.title}>Add a new client</h1>
      <div className="grid grid-cols-2 gap-x-5">
        <Select widthVariant="full" label="Select brand" />
        <Input required label="Client Name" widthVariant="full" />
        <Input required type="email" label="Client email" widthVariant="full" />
        <Input required type="tel" label="Client phone" widthVariant="full" />
        <Input required type="password" label="Password" widthVariant="full" />
        <Input
          required
          type="password"
          label="Re-enter password"
          widthVariant="full"
        />
      </div>
      <div className={styles.buttonGroup}>
        <Button
          handleClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </Button>
        <Button>Add client</Button>
      </div>
    </>
  );
};

export default NewClient;
