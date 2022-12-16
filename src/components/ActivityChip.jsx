import { HiCalendar } from "react-icons/hi2";

const styles = {
  wrapper: `mb-8 ml-8 flex items-start justify-between last:mb-0`,
  icon: `absolute -left-4 h-8 w-8 rounded-full bg-secondary p-1.5 text-white ring-8 ring-white`,
  title: `font-semibold leading-none text-slate-900`,
  subtitle: `mt-1.5 block text-xs text-slate-400`,
  date: `block text-xs font-medium leading-none text-slate-400`,
};

// @param {string} title - Set title
// @param {string} subtitle - Set subtitle
// @param {string} date - Set date
const ActivityChip = ({ title, subtitle, date }) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.icon}>
        <HiCalendar className="h-full w-full" />
      </div>
      <div>
        <h5 className={styles.title}>{title}</h5>
        <h6 className={styles.subtitle}>{subtitle}</h6>
      </div>
      <time className={styles.date}>{date}</time>
    </li>
  );
};

export default ActivityChip;
