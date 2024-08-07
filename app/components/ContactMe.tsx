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
    // Modified to use min-h-screen for better mobile layout
    <div className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center">
      {/* Adjusted top spacing for mobile and desktop */}
      <h3 className="absolute top-24 md:top-20 uppercase tracking-[20px] text-gray-500 text-xl md:text-[22px]">
        Contact
      </h3>

      {/* Adjusted margin-top for better spacing on mobile */}
      <div className="flex flex-col items-center justify-center mt-24 md:mt-16 gap-3 w-full max-w-md">
        <h4 className="text-lg md:text-[22px] font-medium text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]">
            Let&apos;s Talk
          </span>
        </h4>

        <div className="space-y-5 w-full">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 text-[#F7AB0A] animate-pulse" />
            <p className="text-base md:text-lg">+237 674430334</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-5 w-5 md:h-6 md:w-6 text-[#F7AB0A] animate-pulse" />
            <p className="text-base md:text-lg">mesuechchristian12@gmail.com</p>
          </div>

          {/* Adjusted form layout for better responsiveness */}
          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Changed to flex-col on mobile, flex-row on larger screens */}
            <div className="flex flex-col md:flex-row gap-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput w-full"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput w-full"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput w-full"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#F7AB0A]/80 py-3 px-10 text-black font-medium rounded-md text-base md:text-lg"
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
