import { useRef } from "react";
import { Overlay } from "../overlay";
import { ModalProps } from "../../types/components/modal";

const KindModal = ({ show, setShow }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <Overlay show={show} setShow={setShow} modalRef={modalRef}>
      {show && (
        <div
          ref={modalRef}
          id="editModal"
          className="m-10 max-w-[500px] p-6 flex h-fit w-full flex-col items-center rounded-[10px] text-black bg-white gap-3"
        >
          <h1 className="text-2xl text-center font-semibold">Donate in Kind</h1>
          <p className="text-sm text-center leading-6">
            We gladly accept donations in kind! If you'd like to donate laptops,
            books, or other tech gear to support our community members, please
            contact us at{" "}
            <a
              href="mailto:enquires@codaxlab.com"
              className="text-blue-500 hover:underline transition-all duration-300"
            >
              enquires@codaxlab.com
            </a>{" "}
            Your generosity is deeply appreciated—thank you in advance for
            making a difference!
          </p>
          <button className="bg-[#222] text-white px-3 py-1 rounded-md">
            <a href="mailto:enquires@codaxlab.com">Contact Us</a>
          </button>

          <button onClick={() => setShow(!show)} className="underline">
            Close
          </button>
        </div>
      )}
    </Overlay>
  );
};

export default KindModal;
