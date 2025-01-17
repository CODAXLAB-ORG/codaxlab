import { useForm } from "react-hook-form";
import Input from "../formInput";
import { contactSchema, TcontactSchema } from "../../types/contact";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TcontactSchema>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (data: TcontactSchema) => {
    console.log(data);
    reset();
  };
  return (
    <div className="space-y-6">
      <h1 className="text-center mb-4 lg:text-4xl text-2xl pt-5 font-semibold">
        We'd Love to Hear From Your!
      </h1>
      <form className="grid gap-y-6 mx-auto w-[90%] text-start">
        <div className="flex flex-col gap-y-1">
          <Input
            id="name"
            type="text"
            {...register("name")}
            label="Full Name"
            labelStyle="text-white"
            autoComplete="off"
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-red-400 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-y-1">
          <Input
            id="email"
            labelStyle="text-white"
            type="email"
            {...register("email")}
            label="Email Address"
            autoComplete="off"
            placeholder="Enter your email address"
          />
          {errors.name && (
            <span className="text-red-400 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-y-1">
          <Input
            id="message"
            type="text"
            labelStyle="text-white"
            textarea
            {...register("message")}
            label="Message"
            autoComplete="off"
            placeholder="Enter your message"
          />
          {errors.name && (
            <span className="text-red-400 text-sm">{errors.name.message}</span>
          )}
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="border rounded-lg bg-white hover:bg-opacity-80 transition-all duration-300 text-black py-3"
        >
          Donate via bank transfer
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
