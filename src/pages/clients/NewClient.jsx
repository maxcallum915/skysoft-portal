import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Button from "../../components/Button";
import Select from "../../components/Select";
import Input from "../../components/Input";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

const styles = {
  title: `mb-6 border-b border-b-slate-200 pb-2 text-2xl font-semibold capitalize text-slate-900`,
  buttonGroup: `mt-2 flex justify-end gap-3 border-t border-t-slate-200 pt-5`,
};

const initialState = {
  brand: "",
  title: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const NewClient = () => {
  const navigate = useNavigate();
  const [matchPassword, setMatchPassword] = useState("");
  const [fields, setFields] = useState(initialState);
  const { auth } = useAuth();

  // Older version to fetch brands; now user has associated brand with him
  // useEffect(() => {
  //   const fetchBrands = async () => {
  //     try {
  //       const { data } = await axios.get("/admin-settings/brands", {
  //         headers: {
  //           Authorization: `Bearer ${auth.token}`,
  //         },
  //       });
  //       setBrands(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchBrands();
  // }, []);

  const handleChange = (e) => {
    if (e._id) {
      setFields((prevState) => ({ ...prevState, brand: e }));
    } else {
      const { name, value } = e.target;
      setFields((prevState) => ({ ...prevState, [name]: value }));
      if (name === "confirmPassword") setMatchPassword("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fields.password !== fields.confirmPassword) {
      return setMatchPassword("Password does not match");
    }
    try {
      const { data } = await axios.post("/api/clients/new", fields, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      toast.success(`Client created successfully`);
      setFields(initialState);
      navigate(`/clients/${data._id}`, { replace: true });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={styles.title}>Add a new client</h1>
      <div className="grid grid-cols-2 gap-x-5">
        <Select
          widthVariant="full"
          label="Select brand"
          selected={fields.brand}
          handleSelect={handleChange}
          options={auth.brands}
          required
        />
        <Input
          required
          label="Client Name"
          widthVariant="full"
          name="title"
          value={fields.title}
          handleChange={handleChange}
        />
        <Input
          required
          type="email"
          label="Client email"
          widthVariant="full"
          name="email"
          value={fields.email}
          handleChange={handleChange}
        />
        <Input
          required
          type="tel"
          label="Client phone"
          widthVariant="full"
          name="phone"
          value={fields.phone}
          handleChange={handleChange}
        />
        <Input
          required
          type="password"
          label="Password"
          widthVariant="full"
          name="password"
          value={fields.password}
          handleChange={handleChange}
        />
        <Input
          required
          type="password"
          label="Confirm password"
          widthVariant="full"
          error={matchPassword}
          name="confirmPassword"
          value={fields.confirmPassword}
          handleChange={handleChange}
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
        <Button type="submit">Add client</Button>
      </div>
    </form>
  );
};

export default NewClient;
