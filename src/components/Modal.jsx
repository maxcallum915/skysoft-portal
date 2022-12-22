import { useState, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

const styles = {
  wrapper: `fixed inset-0 z-10 flex w-full items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm`,
  dialog: `w-full max-w-md rounded-lg bg-white shadow-lg`,
  header: `flex items-center justify-between border-b border-slate-200 p-3 pl-4`,
  headerTitle: `text-xl font-semibold leading-tight text-slate-900`,
  headerBtn: `rounded-lg p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-900`,
};

const Modal = ({ modalTitle, children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleModal: () => setIsOpen((previousState) => !previousState),
  }));

  return createPortal(
    isOpen && (
      <div className={styles.wrapper} tabIndex="-1">
        <div className={styles.dialog}>
          <div className={styles.header}>
            <h3 className={styles.headerTitle}>{modalTitle}</h3>
            <button
              className={styles.headerBtn}
              onClick={() => {
                setIsOpen((previousState) => !previousState);
              }}
            >
              <HiXMark className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    ),
    document.body
  );
};

export default forwardRef(Modal);
