import { Dispatch, SetStateAction } from "react";

export interface ModalProps {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  handlePayment?: any;
}
