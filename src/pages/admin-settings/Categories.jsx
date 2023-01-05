import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import {
  HiDocumentDuplicate,
  HiOutlinePencil,
  HiOutlinePhoto,
} from "react-icons/hi2";
import Box from "../../components/Box";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import axios from "../../config/axios";
import EmptyPlaceholder from "../../components/EmptyPlaceholder";
import formattedCurrency from "../../utils/formattedCurrency";
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

const initialInputs = {
  title: "",
  minValue: 0,
  maxValue: 0,
};

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const [inputs, setInputs] = useState(initialInputs);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const { auth } = useAuth();
  const modal = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: fetchedCategories } = await axios.get(
          "/admin-settings/categories",
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setCategories(fetchedCategories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [editId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("title", inputs.title);
    formData.append("minValue", inputs.minValue);
    formData.append("maxValue", inputs.maxValue);
    try {
      if (editId) {
        const { data: updatedCategory } = await axios.put(
          `/admin-settings/categories/${editId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setCategories((prevState) => [
          ...prevState.map((i) =>
            i.id === editId ? { ...updatedCategory } : i
          ),
        ]);
        setEditId(null);
        toast.success("Category updated successfully");
      } else {
        const { data: newCategory } = await axios.post(
          "/admin-settings/categories",
          formData,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setCategories((prevState) => [...prevState, newCategory]);
        toast.success("Category created successfully");
      }
      modal.current.toggleModal();
      setInputs(initialInputs);
      setSelectedFile("");
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
    const { name, value } = e.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
    setError("");
  };

  return (
    <>
      <Modal modalTitle={"Category"} ref={modal}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="file" className={imgUploader.wrapper}>
            {selectedFile ? (
              <img
                src={
                  typeof selectedFile === "object"
                    ? URL.createObjectURL(selectedFile)
                    : `http://localhost:8000/${selectedFile}`
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
              onChange={(e) => setSelectedFile(e.target.files[0])}
              required
              id="file"
              name="file"
              className={imgUploader.input}
            />
          </label>
          <Input
            label={"title"}
            required
            value={inputs.title}
            name="title"
            error={error}
            handleChange={handleInput}
          />
          <Input
            label={"minimum value"}
            required
            type="number"
            value={inputs.minValue}
            name="minValue"
            handleChange={handleInput}
          />
          <Input
            label={"maximum value"}
            required
            type="number"
            value={inputs.maxValue}
            name="maxValue"
            handleChange={handleInput}
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
          Add a new category
        </Button>
        {categories.length > 0 ? (
          <div className={chips.wrapper}>
            {categories.map((category) => {
              return (
                <div className={chips.chip} key={category._id}>
                  <img
                    src={`http://localhost:8000/${category.imgUrl}`}
                    alt={category.title}
                    className={chips.logo}
                  />
                  <div>
                    <h5 className={chips.title}>{category.title}</h5>
                    <h6 className={chips.subtitle}>
                      {formattedCurrency(category.minValue)} -{" "}
                      {category.title === "diamond"
                        ? "above"
                        : formattedCurrency(category.maxValue)}
                    </h6>
                  </div>
                  <div className={chips.actionWrapper}>
                    <button
                      className={chips.action}
                      onClick={() => handleEdit(category._id)}
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
            title={"Create categories to display here"}
          />
        )}
      </Box>
    </>
  );
};

export default Categories;
