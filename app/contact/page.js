"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpzvalre");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="font-body">
      <title>Contact Us</title>
      <Navbar />
      <section id="contact" className="overflow-hidden py-16 md:py-10 lg:py-14">
        <div className="container mx-auto">
          <div className="px-4 lg:w-7/12 xl:w-8/12 mx-auto">
            <div className="animate-fadeIn mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] ">
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-5xl text-center">
                Contact With Us
              </h2>
              <p className="mb-12 mt-5 text-base font-medium text-body-color text-center">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap ">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8 transition-all duration-300 ease-in-out transform hover:scale-105">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full rounded-md border py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none border-black dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark "
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full required:  rounded-md border border-black py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8 transition-all duration-300 ease-in-out transform hover:scale-105">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter subject"
                        className="w-full rounded-md border py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none border-black dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        Phone number
                      </label>
                      <input
                        id="text"
                        type="tel"
                        name="number"
                        placeholder="999-9999-9999"
                        className="w-full rounded-md border py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none border-black dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8 transition-all duration-300 ease-in-out transform hover:scale-105">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-base font-medium text-dark text-black"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-black py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4 text-center border-black ">
                    <button
                      type="submit"
                      className="  animate-bounce g-primary border-black  py-4 px-9  text-base bg-transparent hover:bg-black text-black items-center font-medium    hover:text-white border  hover:border-transparent rounded-lg transition-colors duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
