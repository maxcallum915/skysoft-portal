const styles = {
  box: `w-full rounded-lg bg-white p-5 pb-6 shadow-md`,
};

const Box = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default Box;
