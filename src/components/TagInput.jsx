import { TagsInput } from "react-tag-input-component";

const styles = {
  tagsInputWrapper: `mb-5`,
  label: `mb-2 block select-none font-medium capitalize leading-5 text-slate-700`,
};

// @param {string} [label] - Show label tag
// @param {string} [widthVariant=auto] - Set textarea width variants
// @param {string} [placeholder] - Set placeholder text
const TagInput = ({
  label,
  widthVariant = "auto",
  placeholder,
  selected = [],
  setSelected,
}) => {
  return (
    <div className={`${styles.tagsInputWrapper} w-${widthVariant}`}>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      )}
      <TagsInput
        value={selected}
        onChange={setSelected}
        separators={["Enter", ","]}
        placeHolder={placeholder}
      />
    </div>
  );
};

export default TagInput;
