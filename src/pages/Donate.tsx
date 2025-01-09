import { useState } from "react";
import KindModal from "../components/donate/KindModal";
import PaymentModal from "../components/donate/PaymentModal";

export default function Donate() {
  const [kindModal, setKindModal] = useState<boolean>(false);
  const [paymentModal, setPaymentModal] = useState<boolean>(false);

  return (
    <>
      <section className="flex flex-col mt-[3rem]">
        <div className="bg-[#eeee] h-full w-full p-10 text-center space-y-5 rounded-lg">
          <h1 className="text-black text-3xl font-bold">
            Donate to Support Our Community
          </h1>
          <p className="text-black text-[16px] max-w-[90%] mx-auto">
            Your contribution helps us build a stronger, more inclusive tech
            community. Every donation goes towards organizing impactful events,
            creating educational resources, and providing opportunities for
            aspiring tech enthusiasts. Together, we can make tech accessible to
            everyone. Join us in making a difference!
          </p>

          <div className="flex items-center justify-center gap-x-5">
            <button
              onClick={() => setKindModal(true)}
              className="border border-black rounded-lg text-black hover:bg-[#222] hover:text-white  px-4 py-3 transition-all duration-300 "
            >
              Donate in Kind
            </button>
            <button
              onClick={() => setPaymentModal(true)}
              className="border border-black hover:text-black rounded-lg bg-[#222] hover:bg-transparent transition-all duration-300 text-white px-4 py-3"
            >
              Donate via bank transfer
            </button>
          </div>
        </div>
      </section>

      {kindModal && <KindModal setShow={setKindModal} show={kindModal} />}
      {paymentModal && (
        <PaymentModal show={paymentModal} setShow={setPaymentModal} />
      )}
    </>
  );
}
