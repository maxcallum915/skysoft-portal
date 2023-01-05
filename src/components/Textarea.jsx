const styles = {
  textareaWrapper: `mb-5`,
  label: `mb-2 block select-none font-medium capitalize leading-5 text-slate-700`,
  textarea: `block w-full resize-none rounded-lg border border-slate-200 py-2.5 px-3 focus:bg-blue-50 focus:outline-blue-600`,
  required: `text-blue-600`,
};

// @param {string} [label] - Show label tag
// @param {string} [value] - Set value
// @param {string} [name] - Set name attribute
// @param {boolean} [required=false] - Set required attribute
// @param {string} [widthVariant=auto] - Set textarea width variants
// @param {number} [rows=5] - Set textarea rows
// @param {function} [handleChange] - Handle change
const Textarea = ({
  label,
  value = "",
  name,
  required = false,
  widthVariant = "auto",
  rows = 5,
  handleChange,
}) => {
  return (
    <div className={`${styles.textareaWrapper} w-${widthVariant}`}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        value={value}
        name={name}
        onChange={handleChange}
        className={styles.textarea}
        required={required}
        id={name}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
