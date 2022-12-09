const styles = {
  button: `block rounded-xl bg-gradient-to-l from-primary to-secondary py-2.5 px-3 capitalize text-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg`,
};

// @param {string} type - Set button type
// @param {string} title - Set button text
// @param {string} [variant=auto] - Set button width variants
const Button = ({
  children,
  type = "button",
  widthVariant = "auto",
  handleClick,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} w-${widthVariant}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
