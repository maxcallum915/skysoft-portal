const styles = {
  inputWrapper: `mb-5`,
  label: `mb-2 block select-none font-medium capitalize leading-5 text-slate-700`,
  input: `rounded-lg border border-slate-200 py-2.5 px-3 focus:bg-blue-50 focus:outline-blue-600`,
  required: `text-blue-600`,
};

// @param {string} type - Set input type
// @param {string} [label] - Show label tag
// @param {boolean} [required] - Set required attribute
// @param {string} [widthVariant=auto] - Set button width variants
const Input = ({ type, label, required, widthVariant = "auto" }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type={type ? type : "text"}
        className={`${styles.input} w-${widthVariant}`}
        required={required && true}
        id={label}
      />
    </div>
  );
};

export default Input;
