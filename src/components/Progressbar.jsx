const styles = {
  floatingTitle: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-white bg-blend-difference`,
  default: `text-slate-500 bg-slate-100`,
  success: `text-green-500 bg-green-100`,
  warning: `text-amber-500 bg-amber-100`,
  danger: `text-red-500 bg-red-100`,
  info: `text-teal-500 bg-teal-100`,
  primary: `text-primary bg-primary bg-opacity-10`,
  secondary: `text-secondary bg-secondary bg-opacity-10`,
};

// @param {string} [width="w-24"] - Set progress width
// @param {string} [height="h-1"] - Set progress height
// @param {string} [background="bg-secondary bg-opacity-20"] - Set progress background
// @param {string} [progressColor="bg-secondary"] - Set progress color
// @param {number} [progress=25] - Set progress percentage
// @param {boolean} [rounded=false] - Toggle progress radius
// @param {boolean} [floatingTitle=false] - Toggle floatingTitle
const Progressbar = ({
  width = "w-24",
  height = "h-1",
  background = "bg-secondary bg-opacity-20",
  progressColor = "bg-secondary",
  progress = 25,
  rounded = false,
  floatingTitle = false,
}) => {
  return (
    <div
      className={`relative ${width} ${height} ${background} ${
        rounded && "rounded-md"
      }`}
    >
      <div
        className={`h-full ${progressColor} ${rounded && "rounded-md"}`}
        style={{ width: `${progress}%` }}
      ></div>
      {floatingTitle && (
        <span className={styles.floatingTitle}>{progress}%</span>
      )}
    </div>
  );
};

export default Progressbar;
