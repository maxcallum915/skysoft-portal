import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const styles = {
  tagsInputWrapper: `mb-5`,
  label: `mb-2 block select-none font-medium capitalize leading-5 text-slate-700`,
  required: `text-blue-600`,
};

// @param {string} [label] - Show label tag
// @param {string} [widthVariant=auto] - Set textarea width variants
// @param {boolean} [required] - Set required attribute
const TagInput = ({ label, widthVariant = "auto", required = false }) => {
  const [selected, setSelected] = useState([]);
  return (
    <div className={`${styles.tagsInputWrapper} w-${widthVariant}`}>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <TagsInput
        value={selected}
        onChange={setSelected}
        separators={["Enter", ","]}
      />
    </div>
  );
};

export default TagInput;
