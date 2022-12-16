const styles = {
  activityContainer: `relative ml-3 border-l border-gray-200 dark:border-gray-700`,
};

const ActivityChipGroup = ({ children }) => {
  return <ol className={styles.activityContainer}>{children}</ol>;
};

export default ActivityChipGroup;
