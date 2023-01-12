import { FileIcon } from "react-file-icon";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

const styles = {
  wrapper: `relative mb-10 flex items-start justify-between pl-16 pt-1 last:mb-0`,
  icon: `absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-full bg-secondary p-1.5 text-white`,
  title: `font-medium leading-none text-slate-900 first-letter:capitalize`,
  subtitle: `mt-1.5 block text-xs text-slate-400 first-letter:capitalize`,
  file: `mt-2.5 flex w-max items-center gap-2 rounded-full bg-secondary bg-opacity-10 py-3 px-3 pl-3.5 text-xs font-semibold text-secondary`,
  date: `mb-2 block text-xs leading-none text-slate-400`,
};

// @param {string} title - Set title
// @param {string} subtitle - Set subtitle
// @param {string} file - Set file
// @param {string} date - Set date
const ActivityChip = ({ title, subtitle, file, date }) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.icon}>
        <HiChatBubbleBottomCenterText className="h-2/3 w-2/3" />
      </div>
      <div>
        <h5 className={styles.title}>{title}</h5>
        {subtitle && <h6 className={styles.subtitle}>{subtitle}</h6>}
        {file && (
          <div className={styles.file}>
            <div className="w-3.5">
              <FileIcon
                labelUppercase
                labelColor="#3862e1"
                foldColor="#3862e1"
                color="#3862e1"
              />
            </div>
            <span>{file}</span>
          </div>
        )}
      </div>
      <time className={styles.date}>{date}</time>
    </li>
  );
};

export default ActivityChip;
