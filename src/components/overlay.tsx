import React, { useEffect } from "react";
import { OverlayProps } from "../types/components/overlay";

export const Overlay = React.memo(function Overlay({
  children,
  show,
  setShow,
  modalRef,
  isPersistent,
  ...props
}: OverlayProps) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    if (!isPersistent) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          setShow(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "auto";
      };
    }
    return () => {
      setShow(false);
      document.body.style.overflow = "auto";
    };
  }, [show, modalRef, isPersistent, setShow]);

  return (
    <div {...props}>
      {show && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          {children}
        </div>
      )}
    </div>
  );
});
