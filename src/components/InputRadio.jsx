const styles = {
  inputWrapper: `relative mb-5 w-max`,
  input: `peer absolute top-0 left-0 z-1 h-full min-w-full cursor-pointer opacity-0`,
  label: `relative flex w-max select-none items-center gap-2 break-words font-medium capitalize leading-5 text-slate-700 before:block before:h-5 before:w-5 before:rounded-md before:border before:border-slate-200 before:bg-white after:absolute after:left-0.5 after:block after:h-4 after:w-4 after:scale-0 after:rounded-md after:bg-secondary after:transition-transform peer-checked:text-secondary peer-checked:before:ring-2 peer-checked:before:ring-secondary peer-checked:after:scale-100 peer-focus:before:ring-2`,
};

// @param {string} type - Set input type
// @param {string} [name] - Set name attribute
// @param {string} [text] - Set label text
// @param {string} [value] - Set value
// @param {boolean} [required=false] - Set required attribute
// @param {function} [handleToggle] - Handle check state
const InputRadio = ({
  type,
  name,
  text,
  value = "",
  required = false,
  handleToggle,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        value={value}
        // checked={isChecked}
        className={styles.input}
        required={required}
        onChange={handleToggle}
        id={name}
        name={name}
      />
      <label htmlFor={name} className={styles.label}>
        {text && text}
      </label>
    </div>
  );
};

export default InputRadio;
