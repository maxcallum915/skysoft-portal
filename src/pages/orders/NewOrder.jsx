import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import InputRadio from "../../components/InputRadio";
import TagInput from "../../components/TagInput";
import Button from "../../components/Button";
import axios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

const styles = {
  title: `mb-6 border-b border-b-slate-200 pb-2 text-2xl font-semibold capitalize text-slate-900`,
  subtitle: `mb-2 select-none text-base leading-tight font-medium capitalize text-slate-700`,
  buttonGroup: `mt-2 flex justify-end gap-3 border-t border-t-slate-200 pt-5`,
};

const initialState = {
  title: "",
  brand: "",
  client: "",
  salesEmail: "",
  paymentType: "",
  orderType: "",
  orderAmount: "",
  paymentGateway: "",
  description: "",
  services: [],
  serviceTags: [],
};

const NewOrder = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState(initialState);
  const [clients, setClients] = useState([]);
  const [orderTypes, setOrderTypes] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: clients }, { data: types }] = await Promise.all([
          axios.get("/api/clients", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
          axios.get("/api/order-types", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }),
        ]);
        setClients(clients);
        setOrderTypes(types);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e, name) => {
    if (name) {
      setFields((prevState) => ({ ...prevState, [name]: e }));
    } else {
      const { name, value } = e.target;
      setFields((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleToggle = (e) => {
    const { value, checked } = e.target;
    checked && !fields.services.includes(value)
      ? setFields((fields) => ({
          ...fields,
          services: [...fields.services, value],
        }))
      : setFields((fields) => ({
          ...fields,
          services: fields.services.filter((v) => v !== value),
        }));
  };

  const handleTags = (e) => {
    setFields((fields) => ({ ...fields, serviceTags: [...e] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/orders/new", fields, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setFields(initialState);
      navigate(`/orders/${data._id}`, { replace: true });
      toast.success("Order created successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={styles.title}>Add a new order</h1>
      <div className="grid grid-cols-3 gap-x-5">
        <Input
          label="order title"
          required
          widthVariant="full"
          type="text"
          name={"title"}
          value={fields.title}
          handleChange={handleChange}
        />
        <Select
          widthVariant="full"
          label="Select brand"
          required
          selected={fields.brand}
          handleSelect={(e) => handleChange(e, "brand")}
          options={auth.brands}
        />
        <Select
          widthVariant="full"
          label="Select client"
          required
          selected={fields.client}
          handleSelect={(e) => handleChange(e, "client")}
          options={clients}
        />
        <Input
          label="Sales email"
          required
          widthVariant="full"
          type="email"
          name={"salesEmail"}
          value={fields.salesEmail}
          handleChange={handleChange}
        />
        <Input
          label="Order Amount"
          required
          widthVariant="full"
          type="number"
          name={"orderAmount"}
          value={fields.orderAmount}
          handleChange={handleChange}
          min={0}
        />
        <Select
          widthVariant="full"
          label="order type"
          required
          selected={fields.orderType}
          handleSelect={(e) => handleChange(e, "orderType")}
          options={orderTypes}
        />
        <Select
          widthVariant="full"
          label="payment type"
          required
          selected={fields.paymentType}
          handleSelect={(e) => handleChange(e, "paymentType")}
          options={[
            { title: "new order" },
            { title: "upsale" },
            { title: "chargeback" },
            { title: "refund" },
          ]}
        />
        <Select
          widthVariant="full"
          label="payment gateway"
          required
          selected={fields.paymentGateway}
          handleSelect={(e) => handleChange(e, "paymentGateway")}
          options={[{ title: "manual" }, { title: "stripe" }]}
        />
      </div>
      <Textarea
        label="Description (optional)"
        widthVariant="full"
        rows={3}
        name={"description"}
        handleChange={handleChange}
        value={fields.description}
      />
      <TagInput
        label={"Services"}
        selected={fields.serviceTags}
        setSelected={handleTags}
        placeholder="Press enter to create other services"
      />
      <div className="grid grid-cols-3 gap-x-5">
        <InputRadio
          type="checkbox"
          text="logo design"
          value="logo design"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="3d logo design"
          value="3d logo design"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="logo/illustration"
          value="logo/illustration"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="website design"
          value="website design"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="stationary design"
          value="stationary design"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="brochure design"
          value="brochure design"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="website development"
          value="website development"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="project status"
          value="project status"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="social media design"
          value="social media design"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="video production"
          value="video production"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="content writing"
          value="content writing"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="copyright design"
          value="copyright design"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="other services"
          value="other services"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="no package"
          value="no package"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="client questionnaire"
          value="client questionnaire"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="SEO questionnaire"
          value="SEO questionnaire"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="trademark services"
          value="trademark services"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="email marketing questionnaire"
          value="email marketing questionnaire"
          handleToggle={handleToggle}
          name="services"
        />
        <InputRadio
          type="checkbox"
          text="academic writing questionnaire"
          value="academic writing questionnaire"
          handleToggle={handleToggle}
          name="services"
        />
      </div>
      <div className={styles.buttonGroup}>
        <Button
          handleClick={() => {
            navigate(-1);
          }}
          type="button"
        >
          Cancel
        </Button>
        <Button type="submit">Add order</Button>
      </div>
    </form>
  );
};

export default NewOrder;
