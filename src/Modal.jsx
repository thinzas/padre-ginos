import { useEffect, useRef } from "react";
import { Children } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    let modalRoot = document.getElementById("modal");

    // Create modal root if it doesn't exist
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.id = "modal";
      document.body.appendChild(modalRoot);
    }

    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
