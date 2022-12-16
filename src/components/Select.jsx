import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { HiCheck, HiChevronDown } from "react-icons/hi2";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const styles = {
  selectWrapper: `relative mb-5`,
  label: `mb-2 block select-none font-medium capitalize leading-5 text-slate-700`,
  select: `rounded-lg border w-full border-slate-200 py-2.5 px-3 focus:bg-blue-50 focus:outline-blue-600 block`,
  required: `text-blue-600`,
  iconButton: `absolute inset-y-0 right-0 pr-2 text-slate-500`,
  icon: `h-5 w-5`,
  options: `absolute mt-1.5 w-full max-h-32 overflow-y-auto cursor-default rounded-lg border border-slate-200 bg-white p-1 shadow-md z-1`,
  option: `relative cursor-pointer select-none px-3 py-2 rounded-md`,
  selectedOptionIcon: `absolute inset-y-0 left-0 flex items-center pl-3`,
};

// @param {string} - [label] - Show label tag
// @param {boolean} - [required=false] - Set required attribute
// @param {string} - [widthVariant] - Set width variant
const Select = ({ label, required = false, widthVariant }) => {
  const [selected, setSelected] = useState(people[0]);
  const [input, setInput] = useState("");

  const filtered =
    input === ""
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(input.toLowerCase())
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div
        className={`${styles.selectWrapper} w-${
          widthVariant ? widthVariant : "max"
        }`}
      >
        {label && (
          <Combobox.Label className={styles.label} htmlFor={label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </Combobox.Label>
        )}
        <div className="relative">
          <Combobox.Input
            value={input}
            displayValue={(person) => person.name}
            onChange={(e) => setInput(e.target.value)}
            className={styles.select}
            id={label}
          />
          <Combobox.Button className={styles.iconButton}>
            <HiChevronDown className={styles.icon} aria-hidden="true" />
          </Combobox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setInput("")}
          >
            <Combobox.Options className={styles.options}>
              {filtered.length === 0 && input !== "" ? (
                <div className="p-2 px-3">No results found.</div>
              ) : (
                filtered.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    value={person}
                    className={({ active, selected }) =>
                      `${styles.option} ${selected && "flex justify-between"} ${
                        active ? "bg-secondary text-white" : "text-slate-900"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        {person.name}
                        {selected && (
                          <HiCheck className={styles.icon} aria-hidden="true" />
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </div>
    </Combobox>
  );
};

export default Select;
