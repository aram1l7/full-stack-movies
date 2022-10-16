import { useEffect, useRef } from "react";
import Portal from "./portal";
import { BtnWrapper, CloseBtn, ModalHeader, ModalWrapper } from "./styles";

function Modal({
  children,
  handleClose,
  title,
  style,
  buttonText,
  buttonAction,
  withoutHeader,
  withoutFooter,
  isForm,
  formId,
}) {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [handleClose]);

  return (
    <Portal wrapperId="react-portal-modal-container">
      <ModalWrapper className="modal" ref={nodeRef}>
        <div style={{ ...style, position: "relative" }}>
          {!withoutHeader && (
            <header>
              <ModalHeader>
                <h3>{title}</h3>
                <CloseBtn onClick={handleClose} />
              </ModalHeader>
            </header>
          )}
          <main>{children}</main>
          {!withoutFooter && (
            <footer>
              <BtnWrapper>
                <button
                  form={isForm ? formId : ""}
                  onClick={isForm ? () => {} : buttonAction}
                >
                  {buttonText}
                </button>
              </BtnWrapper>
            </footer>
          )}
        </div>
      </ModalWrapper>
    </Portal>
  );
}
export default Modal;
