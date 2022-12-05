const styles = {
  inputWrapper: `relative mb-5 w-max`,
  input: `peer absolute top-0 left-0 z-10 h-full min-w-full cursor-pointer opacity-0`,
  label: `relative flex w-max select-none items-center gap-2 font-medium leading-5 text-slate-700 before:block before:h-5 before:w-5 before:rounded-md before:border before:border-slate-200  after:absolute after:left-0.5 after:block after:h-4 after:w-4 after:scale-0 after:rounded-md after:bg-blue-600 after:transition-transform peer-checked:before:ring-2 peer-checked:before:ring-blue-600 peer-checked:after:scale-100`,
};

// @param {string} type - Set input type
// @param {string} [text] - Set label text
// @param {boolean} [required] - Set required attribute
const InputRadio = ({ type, text, required }) => {
  return (
    <div className={styles.inputWrapper}>
      <input type={type} className={styles.input} required={required && true} />
      <label htmlFor="radio" className={styles.label}>
        {text && text}
      </label>
    </div>
  );
};

export default InputRadio;
