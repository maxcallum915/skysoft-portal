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

const styles = {
  chips: {
    wrapper: `flex flex-wrap gap-4`,
    chip: `min-w- flex items-center justify-between gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-3`,
    logo: `h-14 w-14 shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-slate-200`,
    title: `text-lg font-semibold capitalize text-slate-900`,
    subtitle: `text-xs font-medium capitalize text-slate-400`,
    actionWrapper: `relative ml-6 flex items-center gap-2`,
    action: `h-6 w-6 rounded-md text-secondary hover:text-secondary focus:text-secondary focus:outline-none`,
  },
};
const { chips } = styles;

const roles = [
  { id: 1, title: "admin" },
  { id: 2, title: "user" },
];

const initialInputs = {
  name: "",
  email: "",
  password: "",
  company: "",
  brand: "",
  role: "",
};

const Users = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [brands, setBrands] = useState([]);
  const [inputs, setInputs] = useState(initialInputs);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const modal = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: fetchedUsers }, { data: fetchedBrands }] =
          await Promise.all([
            axios.get("/users"),
            axios.get("/admin-settings/brands"),
          ]);
        setUsers(fetchedUsers);
        setData(fetchedBrands);
        setCompanies(fetchedBrands.map((b) => b.company));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [editId]);

  const handleCompanies = async (company) => {
    setInputs((prevState) => ({ ...prevState, company: company }));
    setBrands(data.filter((b) => b.company._id === company._id));
  };

  const handleBrands = (brand) => {
    setInputs((prevState) => ({ ...prevState, brand: brand }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const { data: updatedUser } = await axios.patch(
          `/users/create/${editId}`,
          inputs
        );
        setUsers((prevState) => [
          ...prevState.map((i) => (i.id === editId ? { ...updatedUser } : i)),
        ]);
        setEditId(null);
        toast.success("Status updated successfully");
      } else {
        const { data: newUser } = await axios.post("/users/create", inputs);
        setUsers((prevState) => [...prevState, newUser]);
        toast.success("Status created successfully");
      }
      modal.current.toggleModal();
      setInputs(initialInputs);
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

  const handleChange = (e) => {
    if (e.id) {
      setInputs((prevState) => ({ ...prevState, role: e }));
    } else {
      const { name, value } = e.target;
      setInputs((prevState) => ({ ...prevState, [name]: value }));
      if (name === "email") setError("");
    }
  };

  return (
    <>
      <Modal modalTitle={"User"} ref={modal}>
        <form onSubmit={handleSubmit}>
          <Input
            label={"name"}
            required
            name={"name"}
            value={inputs.name}
            handleChange={handleChange}
          />
          <Input
            label={"email"}
            type="email"
            required
            name={"email"}
            value={inputs.email}
            error={error}
            handleChange={handleChange}
          />
          <Input
            label={"password"}
            type="password"
            required
            name={"password"}
            value={inputs.password}
            handleChange={handleChange}
          />
          <Select
            label={"company"}
            required
            widthVariant={"full"}
            options={companies}
            selected={inputs.company}
            handleSelect={handleCompanies}
          />
          {inputs.company && (
            <Select
              label={"brand"}
              required
              widthVariant={"full"}
              options={brands}
              selected={inputs.brand}
              handleSelect={handleBrands}
            />
          )}

          <Select
            label={"role"}
            required
            widthVariant={"full"}
            options={roles}
            selected={inputs.role}
            handleSelect={handleChange}
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
          Add a new user
        </Button>
        {users.length > 0 ? (
          <div className={chips.wrapper}>
            {users.map((user) => {
              return (
                <div className={chips.chip} key={user._id}>
                  <div>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <h5 className={chips.title}>{user.name}</h5>
                      <Chip label={user.role} variant={"success"} />
                    </div>
                    <h6 className={chips.subtitle}>
                      Email: <span className="lowercase">{user?.email}</span>
                    </h6>
                    <h6 className={chips.subtitle}>
                      Brand: {user?.brand?.title}
                    </h6>
                    <h6 className={chips.subtitle}>
                      Company: {user?.company?.title}
                    </h6>
                  </div>
                  {/* <div className={chips.actionWrapper}>
                    <button
                      className={chips.action}
                      onClick={() => handleEdit(user._id)}
                    >
                      <HiOutlinePencil className="h-full w-full" />
                    </button>
                  </div> */}
                </div>
              );
            })}
          </div>
        ) : (
          <EmptyPlaceholder
            icon={<HiDocumentDuplicate className="h-full w-full" />}
            title={"Create users to display here"}
          />
        )}
      </Box>
    </>
  );
};

export default Users;
