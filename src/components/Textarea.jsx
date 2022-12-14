import { useState } from "react";

const styles = {
  textareaWrapper: `mb-5`,
  label: `mb-2 block select-none font-medium capitalize leading-5 text-slate-700`,
  textarea: `block w-full resize-none rounded-lg border border-slate-200 py-2.5 px-3 focus:bg-blue-50 focus:outline-blue-600`,
  required: `text-blue-600`,
};

// @param {string} [label] - Show label tag
// @param {boolean} [required] - Set required attribute
// @param {string} [widthVariant=auto] - Set textarea width variants
// @param {number} [rows=5] - Set textarea rows
const Textarea = ({
  label,
  required = false,
  widthVariant = "auto",
  rows = 5,
}) => {
  const [text, setText] = useState("");
  return (
    <div className={`${styles.textareaWrapper} w-${widthVariant}`}>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.textarea}
        required={required}
        id={label}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
