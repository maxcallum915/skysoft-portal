const styles = {
  label: `max-w-max text-xs font-medium capitalize leading-none p-1 px-2 rounded-full border border-transparent`,
  solidVariants: {
    default: `text-slate-500 bg-slate-100`,
    success: `text-green-500 bg-green-100`,
    warning: `text-amber-500 bg-amber-100`,
    danger: `text-red-500 bg-red-100`,
    info: `text-teal-500 bg-teal-100`,
    black: `text-white bg-black`,
    white: `text-black bg-white`,
    primary: `text-primary bg-primary bg-opacity-10`,
    secondary: `text-secondary bg-secondary bg-opacity-10`,
  },
  outlineVariants: {
    default: `border-slate-400 text-slate-500`,
    success: `border-green-400 text-green-500`,
    warning: `border-amber-400 text-amber-500`,
    danger: `border-red-400 text-red-500`,
    info: `border-teal-400 text-teal-500`,
    black: `border-white text-black`,
    white: `border-black text-white`,
    primary: `border-primary text-primary`,
    secondary: `border-secondary text-secondary`,
  },
};

// @param {string} label - Set chip label
// @param {boolean} [outlined] - Set outline variant
// @param {string} [variant] - Set color variant
const Chip = ({ label, outlined = false, variant }) => {
  return (
    <>
      {label && (
        <div
          className={`${styles.label} ${
            !outlined && variant
              ? styles.solidVariants[variant]
              : styles.solidVariants.default
          } ${
            outlined &&
            (variant
              ? styles.outlineVariants[variant]
              : styles.outlineVariants.default)
          } ${outlined && "bg-transparent"}`}
        >
          {label}
        </div>
      )}
    </>
  );
};

export default Chip;
