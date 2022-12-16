const styles = {
  button: `block rounded-lg bg-gradient-to-l from-primary to-secondary py-2.5 px-3 capitalize text-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg`,
};

// @param {string} type=button - Set button type
// @param {string} [variant=auto] - Set button width variants
// @param {string} [classes] - Add classes
// @param {function} [handleClick] - Handle click event
const Button = ({
  type = "button",
  widthVariant = "auto",
  classes,
  handleClick,
  children,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${classes} w-${widthVariant}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
