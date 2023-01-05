const styles = {
  avatar: `group relative flex h-10 w-10 shrink-0 cursor-default items-center justify-center bg-secondary bg-opacity-10 font-semibold uppercase text-secondary`,
  avatarImg: `h-full w-full border-2 border-white object-cover`,
  popover: `absolute top-full left-2/4 z-1 mt-1 min-w-max -translate-x-1/2 scale-50 rounded-md bg-slate-900 p-1 px-3 text-sm capitalize text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100`,
  size: {
    sm: `h-10 w-10`,
    md: `h-14 w-14 text-2xl`,
    lg: `h-16 w-16 text-3xl`,
    xl: `h-24 w-24 text-4xl`,
  },
};

// @param {string} icon - Set avatar icon
// @param {string} [size] - Set avatar size
// @param {string} [title] - Set title
// @param {boolean} [rounded] - Set avatar radius
// @param {boolean} [shadow] - Set avatar shadow
// @param {boolean} [tooltip] - Set title tooltip
const Avatar = ({
  icon,
  size = `sm`,
  title,
  rounded = false,
  shadow = false,
  tooltip = false,
}) => {
  return (
    <div
      className={`${styles.avatar} ${styles.size[size]} ${
        rounded && "rounded-full"
      } ${shadow && "shadow-md"}`}
    >
      {icon ? (
        <img
          src={icon}
          alt={title ? title : "avatar"}
          className={`${styles.avatarImg} ${rounded && "rounded-full"}`}
        />
      ) : (
        title
          ?.split(" ")
          ?.map((v, i, a) => (i === 0 || i === a.length - 1) && v.slice(0, 1))
      )}

      {tooltip && title ? (
        <span className={styles.popover}>{title}</span>
      ) : null}
    </div>
  );
};

export default Avatar;
