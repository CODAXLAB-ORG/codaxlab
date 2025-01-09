/* eslint-disable @typescript-eslint/no-explicit-any */
import { PaystackButton } from "react-paystack";

const PaystackPayment = ({ donationData }: any) => {
  return (
    <div className="space-y-4">
      <p className="text-center text-sm">
        Your contribution helps us empower more individuals in our community
        with essential tech skills and resources. Thank you for making a
        difference!
      </p>
      <PaystackButton
        {...donationData}
        className="w-full rounded-lg transition-all duration-300 hover:opacity-90 py-3 text-sm  bg-blue-950 text-[#FFFFFF]"
      />
    </div>
  );
};

export default PaystackPayment;
