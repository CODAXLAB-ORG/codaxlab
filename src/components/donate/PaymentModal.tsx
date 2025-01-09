import { useRef, useState } from "react";
import { Overlay } from "../overlay";
import { ModalProps } from "../../types/components/modal";
import Input from "../formInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  paymentSchema,
  paystackPaymentProps,
  TpaymentSchema,
} from "../../types/payment";
import PaystackPayment from "./PaystackPayment";
import toast, { Toaster } from "react-hot-toast";

const PaymentModal = ({ show, setShow }: ModalProps) => {
  const publicKey = import.meta.env.VITE_PAYSTACK_KEY;
  const modalRef = useRef<HTMLDivElement>(null);
  const [donationData, setDonationData] = useState<
    paystackPaymentProps | undefined
  >(undefined);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TpaymentSchema>({ resolver: zodResolver(paymentSchema) });

  const onSuccessPayment = () => {
    toast.success("Successfully created!");
    setShow(false);
  };

  const onSubmit = (data: TpaymentSchema) => {
    const donationData = {
      name: data.name,
      amount: data.amount * 100,
      email: data.email,
      message: data.message,
      metadata: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      publicKey,
      text: "Donate",
      onSuccess: () => onSuccessPayment(),
      onClose: () => toast.error("payment cancelled!"),
    };
    setDonationData(donationData);
    reset();
  };

  return (
    <Overlay show={show} setShow={setShow} modalRef={modalRef}>
      {show && (
        <div
          ref={modalRef}
          id="editModal"
          className="m-10 max-w-[500px] p-6 flex h-fit w-full flex-col items-center rounded-[10px] text-black bg-[white] gap-3"
        >
          <h1 className="text-2xl text-center font-semibold">
            Donate to our community
          </h1>
          {!donationData && (
            <form
              className="w-full space-y-3 pt-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-y-1">
                <Input
                  id="name"
                  type="text"
                  {...register("name")}
                  label="Full Name"
                  autoComplete="off"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <span className="text-red-400 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-y-1">
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  label="Email Address"
                  autoComplete="off"
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-y-1">
                <Input
                  id="amount"
                  type="text"
                  {...register("amount")}
                  label="Amount"
                  autoComplete="off"
                  placeholder="Enter amount"
                />
                {errors.amount && (
                  <span className="text-red-400 text-sm">
                    {errors.amount.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-y-1">
                <Input
                  id="message"
                  type="text"
                  {...register("message")}
                  label="Message"
                  autoComplete="off"
                  placeholder="Enter message"
                />
                {errors.message && (
                  <span className="text-red-400 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className="flex py-4 gap-5 w-full">
                <button
                  className="w-full py-2 rounded-lg transition-all duration-300  hover:bg-red-600 border hover:border-red-600 border-[#C2C2C2] text-black hover:text-white hover:opacity-90"
                  onClick={() => setShow(!show)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full rounded-lg transition-all duration-300 hover:opacity-90 py-2 text-sm  bg-blue-950 text-[#FFFFFF]"
                >
                  submit
                </button>
              </div>
            </form>
          )}
          {show && donationData && (
            <PaystackPayment
              donationData={{
                ...donationData,
                onSuccess: () => {
                  onSuccessPayment();
                  setShow(false);
                },
                onClose: () => {
                  toast.error("Payment cancelled!");
                  setShow(false);
                },
              }}
            />
          )}
        </div>
      )}
      <Toaster />
    </Overlay>
  );
};

export default PaymentModal;
