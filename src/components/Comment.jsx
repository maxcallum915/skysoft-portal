import { FileIcon } from "react-file-icon";
import Avatar from "./Avatar";

const styles = {
  wrapper: `mb-5 flex items-end justify-end gap-3`,
  comment: `rounded-md bg-slate-100 p-2 px-3 text-sm text-slate-500 flex flex-col gap-2`,
  file: `flex w-max items-center gap-2 text-sm font-semibold underline`,
  time: `mt-1.5 block text-xs font-medium text-slate-400`,
};

// @param {string} comment - Set comment
// @param {string} date - Set date
// @param {string} [file] - Set file
// @param {boolean} [flip] - Toggle comment flip
const Comment = ({ comment, date, file, flip = false }) => {
  return (
    <>
      <div className={`${styles.wrapper} ${flip && "flex-row-reverse"}`}>
        <div>
          <div className={styles.comment}>
            {comment && <p>{comment}</p>}
            {file && (
              <div className={styles.file}>
                <div className="w-5">
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
          <time
            className={`${styles.time} ${flip ? "ml-1" : "mr-1 text-right"}`}
          >
            {date}
          </time>
        </div>
        <Avatar title={"John doe"} rounded />
      </div>
      {/* <div className="mb-4 flex items-end justify-end gap-3 last:mb-0">
        <div className="flex flex-col items-end gap-1">
          <p className="rounded-md bg-slate-100 p-2 px-3 text-sm leading-6 text-slate-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis culpa ex labore nobis, doloremque magnam aut obcaecati
            earum, facilis odio, dolor laborum. Et deleniti adipisci animi vel
            vitae. Facilis ducimus nam libero hic eaque ipsa reprehenderit
            incidunt maxime labore qui. Itaque ex deserunt veritatis consectetur
            ad, vero necessitatibus omnis doloremque!
          </p>
          <p className="flex w-max items-center gap-2 rounded-md bg-slate-100 p-2 text-xs font-semibold leading-6 text-secondary">
            <div className="w-6">
              <FileIcon
                // extension="html"
                labelUppercase
                labelColor="#3862e1"
                foldColor="#3862e1"
                // type="code"
                color="#3862e1"
              />
            </div>
            <span>http://docs.python.org/library/tempfile.html</span>
          </p>
          <time className="mt-1 ml-1 block text-xs font-medium text-slate-400">
            01-01-2023
          </time>
        </div>
        <Avatar title={"John doe"} rounded />
      </div> */}
    </>
  );
};

export default Comment;
