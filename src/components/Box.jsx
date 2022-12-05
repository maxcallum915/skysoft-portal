const styles = {
  box: `rounded-lg bg-white p-5 pb-6 shadow-md shadow-gray-300 w-full`,
};

const Box = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default Box;
