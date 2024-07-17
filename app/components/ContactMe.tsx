"use client";
import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    window.location.href = `mailto:mesuehchristian12@gmail?subject=${data.subject}&body=Hi my name is ${data.name}, ${data.message} (${data.email})`;
  };

  return (
    <div className="h-screen flex relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 md:top-20 uppercase tracking-[20px] text-gray-500 text-xl md:text-[22px]">
        Contact
      </h3>

      <div className="flex flex-col items-center justify-center mt-16 gap-3">
        <h4 className="text-[22px] font-semibold space-y10">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]">
            Let&apos;s Talk
          </span>
        </h4>

        <div className="space-y-5">
          <div>
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="h-6 w-6 text-[#F7AB0A] animate-pulse" />
              <p className="text-lg">+237 674430334</p>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="h-6 w-6 text-[#F7AB0A] animate-pulse" />
              <p className="text-lg">mesuechchristian12@gmail.com</p>
            </div>
          </div>

          <form
            className="flex flex-col gap-2 w-fit mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <div className="w-full">
              <input
                {...register("subject")}
                placeholder="Subject"
                className="contactInput w-full"
                type="text"
              />
            </div>
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#F7AB0A]/80 py-3.5 px-10 text-black font-medium rounded-md text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
