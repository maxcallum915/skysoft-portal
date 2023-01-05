import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { HiCheck, HiChevronDown } from "react-icons/hi2";

const styles = {
  selectWrapper: `relative mb-5`,
  label: `mb-2 block select-none font-medium capitalize leading-5 text-slate-700`,
  select: `rounded-lg border w-full border-slate-200 py-2.5 px-3 focus:bg-blue-50 focus:outline-blue-600 block`,
  required: `text-blue-600`,
  iconButton: `absolute inset-y-0 right-0 pr-2 text-slate-500`,
  icon: `h-5 w-5`,
  options: `absolute mt-1.5 w-full max-h-32 overflow-y-auto cursor-default rounded-lg border border-slate-200 bg-white p-1 shadow-md z-1`,
  option: `relative lowercase cursor-pointer select-none px-3 py-2 rounded-md`,
  selectedOptionIcon: `absolute inset-y-0 left-0 flex items-center pl-3`,
};

// @param {string} - [label] - Show label tag
// @param {string} - [widthVariant=max] - Set width variant
// @param {boolean} - [required=false] - Set required attribute
// @param {array} - [options] - Set options
// @param {string} - [selected] - Selected option
// @param {function} - [handleSelect] - Select an option
const Select = ({
  label,
  widthVariant = "max",
  required = false,
  options = [],
  selected,
  handleSelect,
}) => {
  const [input, setInput] = useState("");
  const filtered =
    options.length > 0 && input !== ""
      ? options.filter((i) =>
          i?.title.toLowerCase().includes(input.toLowerCase())
        )
      : options;
  return (
    <Combobox value={selected} onChange={handleSelect}>
      <div className={`${styles.selectWrapper} w-${widthVariant}`}>
        {label && (
          <Combobox.Label className={styles.label} htmlFor={label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </Combobox.Label>
        )}
        <div className="relative">
          <Combobox.Input
            value={input}
            displayValue={(option) => option?.title}
            onChange={(e) => setInput(e.target.value)}
            className={styles.select}
            id={label}
            required={required}
          />
          <Combobox.Button className={styles.iconButton}>
            <HiChevronDown className={styles.icon} aria-hidden="true" />
          </Combobox.Button>
          <Combobox.Options className={styles.options}>
            {filtered.length > 0 ? (
              filtered.map((option, i) => (
                <Combobox.Option
                  key={option._id ? option._id : i}
                  value={option}
                  className={({ active, selected }) =>
                    `${styles.option} ${selected && "flex justify-between"} ${
                      active ? "bg-secondary text-white" : "text-slate-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span>{option?.title}</span>
                      {selected && (
                        <HiCheck className={styles.icon} aria-hidden="true" />
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))
            ) : (
              <div className="p-2 px-3">No results found.</div>
            )}
          </Combobox.Options>
        </div>
      </div>
    </Combobox>
  );
};

export default Select;
