import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import {
  HiDocumentDuplicate,
  HiOutlinePencil,
  HiOutlinePhoto,
} from "react-icons/hi2";
import Box from "../../components/Box";
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
  imgUploader: {
    wrapper: `relative mx-auto mb-3 block h-24 w-24 cursor-pointer rounded-lg bg-slate-100 p-2`,
    img: `absolute inset-0 h-full w-full object-contain`,
    input: `pointer-events-none absolute inset-0 opacity-0`,
  },
};
const { chips, imgUploader } = styles;

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const { auth } = useAuth();
  const modal = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: fetchedBrands }, { data: fetchedCompanies }] =
          await Promise.all([
            axios.get("/admin-settings/brands", {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }),
            axios.get("/admin-settings/companies", {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }),
          ]);
        setBrands(fetchedBrands);
        setCompanies(fetchedCompanies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [editId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedIcon);
    formData.append("title", input);
    formData.append("company", selected._id);
    try {
      if (editId) {
        const { data: updatedBrand } = await axios.put(
          `/admin-settings/brands/${editId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setBrands((prevState) => [
          ...prevState.map((i) => (i.id === editId ? { ...updatedBrand } : i)),
        ]);
        setEditId(null);
        toast.success("Brand updated successfully");
      } else {
        const { data: newBrand } = await axios.post(
          "/admin-settings/brands",
          formData,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setBrands((prevState) => [...prevState, newBrand]);
        toast.success("Brand created successfully");
      }
      modal.current.toggleModal();
      setSelectedIcon("");
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
      <Modal modalTitle={"Brand"} ref={modal}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="file" className={imgUploader.wrapper}>
            {selectedIcon ? (
              <img
                src={
                  typeof selectedIcon === "object"
                    ? URL.createObjectURL(selectedIcon)
                    : `http://localhost:8000/${selectedIcon}`
                }
                alt="image"
                className={imgUploader.img}
              />
            ) : (
              <HiOutlinePhoto className="h-full w-full text-slate-300" />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedIcon(e.target.files[0])}
              required
              id="file"
              name="file"
              className={imgUploader.input}
            />
          </label>
          <Input
            label={"title"}
            required
            value={input}
            name="title"
            error={error}
            handleChange={handleInput}
          />
          <Select
            label={"company"}
            widthVariant={"full"}
            required
            options={companies}
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
          Add a new brand
        </Button>
        {brands.length > 0 ? (
          <div className={chips.wrapper}>
            {brands.map((brand) => {
              return (
                <div className={chips.chip} key={brand._id}>
                  <img
                    src={`http://localhost:8000/${brand.imgUrl}`}
                    alt={brand.title}
                    className={chips.logo}
                  />
                  <div>
                    <h5 className={chips.title}>{brand.title}</h5>
                    <h6 className={chips.subtitle}>{brand.company.title}</h6>
                  </div>
                  <div className={chips.actionWrapper}>
                    <button
                      className={chips.action}
                      onClick={() => handleEdit(brand._id)}
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
            title={"Create brands to display here"}
          />
        )}
      </Box>
    </>
  );
};

export default Brands;
