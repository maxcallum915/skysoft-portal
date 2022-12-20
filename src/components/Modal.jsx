import { useState, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const styles = {
  wrapper: `fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm`,
};

const Modal = ({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleModal() {
      setIsOpen((previousState) => !previousState);
    },
  }));

  return createPortal(
    isOpen && (
      <div className={`${styles.wrapper} min-w`}>
        <div className="rounded-lg bg-white p-3 shadow-md">{children}</div>
      </div>
    ),
    document.body
  );
};

export default forwardRef(Modal);
