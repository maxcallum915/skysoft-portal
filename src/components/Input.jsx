import { useState } from "react";

const styles = {
  inputWrapper: `mb-5`,
  label: `mb-2 block select-none font-medium capitalize leading-5 text-slate-700`,
  input: `block w-full rounded-lg border border-slate-200 py-2.5 px-3 focus:bg-blue-50 focus:outline-blue-600`,
  required: `text-blue-600`,
};

// @param {string} type - Set input type
// @param {string} [label] - Show label tag
// @param {boolean} [required] - Set required attribute
// @param {string} [widthVariant=auto] - Set input width variants
const Input = ({
  type = "text",
  label,
  required = false,
  widthVariant = "auto",
}) => {
  const [input, setInput] = useState("");
  return (
    <div className={`${styles.inputWrapper} w-${widthVariant}`}>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type={type}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.input}
        required={required}
        id={label}
      />
    </div>
  );
};

export default Input;
