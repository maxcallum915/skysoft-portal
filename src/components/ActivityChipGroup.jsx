const styles = {
  activityContainer: `before:content relative before:absolute before:left-6 before:h-full before:w-[1px] before:bg-slate-200`,
};

const ActivityChipGroup = ({ classes, children }) => {
  return (
    <ol className={`${styles.activityContainer} ${classes}`}>{children}</ol>
  );
};

export default ActivityChipGroup;
