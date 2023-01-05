const styles = {
  wrapper: `block w-full rounded-lg bg-slate-100 p-4 text-center text-lg text-slate-300`,
  icon: `mx-auto mb-2 block h-12 w-12`,
  title: `first-letter:capitalize`,
};

// @param {<React Component />} [icon] - Set placeholder icon
// @param {string} [title] - Set placeholder title
const EmptyPlaceholder = ({ icon, title = "placeholder text" }) => {
  return (
    <div className={styles.wrapper}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default EmptyPlaceholder;
