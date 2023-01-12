import { useEffect, useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { HiDocumentDuplicate } from "react-icons/hi2";
import Box from "../../components/Box";
import Chip from "../../components/Chip";
import Input from "../../components/Input";
import InputRadio from "../../components/InputRadio";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import EmptyPlaceholder from "../../components/EmptyPlaceholder";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

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
  { id: 2, title: "ceo" },
  { id: 3, title: "head" },
  { id: 4, title: "user" },
];

const initialInputs = {
  name: "",
  email: "",
  password: "",
  company: "",
  brands: [],
  role: "",
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [brands, setBrands] = useState([]);
  const [inputs, setInputs] = useState(initialInputs);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const { auth } = useAuth();
  const modal = useRef(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: fetchedUsers },
          { data: fetchedBrands },
          { data: fetchedCompanies },
        ] = await Promise.all([
          axios.get("/api/users", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/api/brands", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/api/companies", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
        ]);
        setUsers(fetchedUsers);
        setBrands(fetchedBrands);
        setCompanies(fetchedCompanies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [refresh]);

  const handleCompanies = async (company) => {
    setInputs((prevState) => ({ ...prevState, company: company }));
    setBrands(brands.filter((b) => b.company._id === company._id));
  };

  const handleBrands = (e) => {
    const { value, checked } = e.target;
    checked && !inputs.brands.includes(value)
      ? setInputs((inputs) => ({
          ...inputs,
          brands: [...inputs.brands, value],
        }))
      : setInputs((inputs) => ({
          ...inputs,
          brands: inputs.brands.filter((v) => v !== value),
        }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const { data: updatedUser } = await axios.patch(
          `/api/users/create/${editId}`,
          inputs,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setUsers((prevState) => [
          ...prevState.map((i) => (i.id === editId ? { ...updatedUser } : i)),
        ]);
        setEditId(null);
        setRefresh((prev) => !prev);
        toast.success("User updated successfully");
      } else {
        const { data: newUser } = await axios.post(
          "/api/users/create",
          inputs,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setRefresh((prev) => !prev);
        setUsers((prev) => [...prev, newUser]);
        toast.success("User created successfully");
      }
      modal.current.toggleModal();
      setInputs(initialInputs);
      setCompanies([]);
      setBrands([]);
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
          <div className="flex flex-wrap gap-x-5">
            {inputs.company &&
              brands.map((brand) => {
                return (
                  <InputRadio
                    key={brand._id}
                    type="checkbox"
                    text={brand.title}
                    value={brand._id}
                    handleToggle={handleBrands}
                  />
                );
              })}
          </div>
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
                      Brand:{" "}
                      {user?.brands.length &&
                        user.brands.map((brand) => `${brand.title}, `)}
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
