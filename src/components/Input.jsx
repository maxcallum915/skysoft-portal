import { useId } from "react";

const styles = {
  inputWrapper: `mb-5`,
  label: `mb-2 block select-none font-medium capitalize leading-5 text-slate-700`,
  input: `block w-full rounded-lg border border-slate-200 py-2.5 px-3`,
  inputFocused: `focus:bg-secondary focus:bg-opacity-10 focus:outline-secondary`,
  inputError: `focus:bg-red-100 focus:bg-opacity-100 focus:outline-red-500`,
  required: `text-secondary`,
  errorText: `ml-1 mt-0.5 block text-sm font-medium text-red-500 first-letter:uppercase`,
};

// @param {string} type=text - Set input type
// @param {string} [value] - Set input value
// @param {string} [name] - Set name attribute
// @param {string} [label] - Show label tag
// @param {string} [widthVariant=auto] - Set input width variants
// @param {boolean} [required=false] - Set required attribute
// @param {string} [error] - Get input error
// @param {function} [handleChange] - Get input value
const Input = ({
  type = "text",
  value,
  name,
  label,
  widthVariant = "auto",
  required = false,
  error,
  handleChange,
}) => {
  const id = useId();
  return (
    <div className={`${styles.inputWrapper} w-${widthVariant}`}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
          {required && (
            <span className={`${error ? "text-red-500" : "text-secondary"}`}>
              *
            </span>
          )}
        </label>
      )}
      <input
        type={type}
        name={name && name}
        value={value}
        required={required}
        onChange={handleChange}
        className={`${styles.input} ${
          error ? styles.inputError : styles.inputFocused
        }`}
        id={id}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Input;
