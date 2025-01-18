import { useForm } from "react-hook-form";
import Input from "../formInput";
import { contactSchema, TcontactSchema } from "../../types/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TcontactSchema>({ resolver: zodResolver(contactSchema) });
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = (data: TcontactSchema) => {
    const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID;
    const myPublicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY;
    const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID;

    emailjs.send(serviceId!, templateId!, data, myPublicKey).then(
      () => {
        toast.success("Successfully sent!");

        reset();
      },
      (error) => {
        toast.error("FAILED...", error.text);
      }
    );
  };
  return (
    <div className="space-y-6 ">
      <h1 className="text-center mb-4 lg:text-4xl text-2xl pt-5 font-semibold">
        We'd Love to Hear From Your!
      </h1>
      <form ref={form} className="grid gap-y-6 mx-auto xl:w-[70%] text-start">
        <div className="flex flex-col gap-y-1">
          <Input
            id="subject"
            {...register("subject")}
            type="text"
            labelStyle="text-white"
            label="Subject"
            autoComplete="off"
            placeholder="Enter subject"
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">{`${errors.subject.message}`}</span>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
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
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <Input
            id="user_email"
            labelStyle="text-white"
            type="email"
            {...register("user_email")}
            label="Email Address"
            autoComplete="off"
            placeholder="Enter your email address"
          />
          {errors.user_email && (
            <span className="text-red-500 text-sm">
              {errors.user_email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="message"
            className="text-left font-light capitalize text-[14px]"
          >
            Message
          </label>
          <textarea
            id="message"
            autoComplete="off"
            placeholder="Enter your message"
            {...register("message")}
            className="w-full outline-none focus:ring-1  focus:ring-purple-300 outline rounded-md border border-gray-100 bg-transparent px-4 py-4 text-[14px] font-light"
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          type="submit"
          className="disabled:cursor-not-allowed disabled:opacity-80 border rounded-lg bg-white hover:bg-opacity-80 transition-all duration-300 text-black py-3"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
