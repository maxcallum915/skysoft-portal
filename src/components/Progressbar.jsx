// @param {string} [width] - Set progress width
// @param {string} [height] - Set progress height
// @param {string} [background] - Set progress background
// @param {string} [progressColor] - Set progress color
// @param {number} [progress] - Set complete percentage
// @param {boolean} [rounded] - Set progress radius
const Progressbar = ({
  width = "w-24",
  height = "h-1",
  background = "bg-blue-100",
  progressColor = "bg-blue-700",
  progress = 25,
  rounded = false,
}) => {
  return (
    <div
      className={`${width} ${height} ${background} ${
        rounded && "rounded-full"
      }`}
    >
      <div
        className={`h-full ${progressColor} ${rounded && "rounded-full"}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Progressbar;
