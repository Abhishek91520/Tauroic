import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import ParticleBg from "@/components/ParticleBg";
import React from "react";
const CRM = () => {
  return (
    <div className="font-body ">
      <title>CRM Software</title>
      <Navbar />
{/* 
        <section className="sm:pb-28 bg-white overflow-hidden ">
          <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex ">
            <div className="flex-none space-y-5 max-w-xl">
              <br></br>
              <br></br>
              <h1 className="mx-auto animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-6xl   ">
                The real customer centric CRM
              </h1>
              <p className="text-2xl">
                Track leads, close opportunities and get accurate forecasts.
              </p>
              <div className="text-left pt-5  animate-bounce ">
                <a
                  href={"/contact"}
                  className="bg-transparent  transition ease-in-out duration-500 hover:bg-black text-black font-semibold hover:text-white py-4 px-9  border border-black hover:border-transparent rounded-full"
                >
                  Start now-Contact us
                </a>
              </div>
            </div>
            <div className="flex-1 items-center hidden md:block md:ml-20 pt-5 ">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-crm-illustration_23-2149379498.jpg?w=996&t=st=1694788682~exp=1694789282~hmac=1e2f1d504e92368f88e4985ee53a0fd8d8ee56c8eb431df7bc284e261e71f8f9"
                className="max-w-xl opacity-100 bg-white static"
              />
            </div>
          </div>
        </section> */}
<section className="bg-white py-16 md:py-20">
<div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="md:max-w-xl md:mr-10 text-center md:text-left">
        <h1 className="animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-6xl">
        The real customer centric CRM
        </h1>
        <p className="text-xl md:text-2xl text-black mb-8 py-5">
        Track leads, close opportunities and get accurate forecasts.        </p>
        <div className="text-center pb-5 pt-5  animate-bounce ">
                <a
                  href={"/contact"}
                  className="bg-transparent text-center transition ease-in-out duration-500 hover:bg-black text-black font-semibold hover:text-white py-4 px-9  border border-black hover:border-transparent rounded-full"
                >
                  Start now-Contact us
                </a>
              </div>
      </div>
      <div className="flex-1 items-center hidden md:block md:ml-20">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-crm-illustration_23-2149379498.jpg?w=996&t=st=1694788682~exp=1694789282~hmac=1e2f1d504e92368f88e4985ee53a0fd8d8ee56c8eb431df7bc284e261e71f8f9"
          alt="Illustration"
          className="w-full h-auto object-cover rounded-md animate-fade-in-left"
        />
      </div>
    </div>
  </section>
      <section className=" py-5 md:py-10 xl:py-1 sm:px-4  px-8 pb-5 ">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="md:px-4 py-4 w-full md:w-3/4 pb-12 ">
              <div className="shadow-md rounded-md overflow-hidden hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
                <div className="relative group">
                  <img
                    className=" w-full h-auto transition-opacity duration-300 transform hover:opacity-90 cursor-pointer "
                    src="https://odoocdn.com/openerp_website/static/src/img/2018/crm/crm_screenshot_01.gif"
                    alt="Odoo CRM's Pipeline interface"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fa fa-play-circle-o text-6xl text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-9 px-5 bg-gray-200">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex items-center">
            <div className="flex-none space-y-5 max-w-xl">
              <h2 className="text-4xl font-semibold sm:text-5xl text-black transition duration-300">
                Get Accurate Forecasts
              </h2>
              <h4 className="mb-4 text-2xl text-black">
                Utilize Actionable Data for Informed Decisions
              </h4>
              <div className="flex items-center mb-3">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27 27"
                    fill="currentColor"
                    className="w-9 h-9 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </i>
                <p className="text-black text-lg pl-3">
                  Gain valuable insights to drive your business forward.
                </p>
              </div>
              <div className="flex items-center mb-3">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-9 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </i>
                <p className="text-black text-lg pl-3">
                  Design custom dashboards for a quick overview of your
                  business.
                </p>
              </div>
              <div className="flex items-center">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </i>
                <p className="text-black text-lg pl-3">
                  Create and share real-time reports and flow charts
                  effortlessly.
                </p>
              </div>
            </div>
            <div className="lg:w-7/12 pb-12 lg:pb-0 pt-5">
              <div className="relative overflow-hidden shadow-lg   hover:scale-105 transform transition-transform duration-500">
                <img
                  src="https://odoocdn.com/openerp_website/static/src/img/2018/crm/crm_screenshot_01.gif"
                  className="h-auto rounded-lg shadow-lg"
                  alt="Animation of pipeline analysis"
                  loading="lazy"
                />
                <div className="absolute shadow-lg inset-0 bg-black opacity-0 hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-9 px-5 ">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12  overflow-hidden md:px-8 md:flex items-center">
            <div className="lg:w-6/12 pb-6 lg:pb-0 relative">
              <img
                className="shadow-lg rounded-lg  transition-transform duration-300 transform hover:scale-105"
                src="https://odoocdn.com/openerp_website/static/src/img/2018/crm/crm_screenshot_03.gif"
                alt="Odoo CRM's interface to edit an opportunity"
                loading="lazy"
              />
            </div>
            <div className="lg:w-6/12 lg:offset-1 pb-6 lg:pb-0 md:pl-6 lg:pl-12">
              <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
                Get more done in less time
              </h2>
              <h4 className="mb-4 text-2xl text-black">
                Great Tools = Happy People
              </h4>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                Schedule activities based on your sales scripts: calls,
                meetings, mailing, and quotations. Get all the information you
                need, directly on the opportunity: website pages viewed, mail
                received, etc.
              </p>
              <img
                src="https://odoocdn.com/openerp_website/static/src/img/2016/crm/crm_infographic_01.gif"
                className=" rounded-lg"
                alt="Flow: First Call - Schedule a Demo - Make a Quotation - Follow-up Quote"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-9 px-5 bg-gray-200">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 overflow-hidden md:px-8 md:flex items-center ">
            <div className="lg:w-6/12 pb-12 lg:pb-0 ">
              <h2 className="text-4xl pb-4 sm:text-5xl font-semibold">
                Real-time overview
              </h2>
              <h4 className="mb-4 text-2xl text-black">
                Easily review your performances & next activities.
              </h4>
              <p className="mb-5 text-lg">
                Know exactly how you perform compared to your monthly targets.
                <br />
                Organize your work based on your scheduled next actions.
              </p>
              <div className="s_testimonial flex py-6">
                <div>
                  <img
                    className=" w-24 rounded-full	"
                    src="https://odoocdn.com/openerp_website/static/src/img/2016/testimonials/claudia_sebastiani.jpg"
                    alt="Claudia Sebastiani"
                    loading="lazy"
                    style={{}}
                  />
                </div>
                <blockquote className="px-5  italic">
                  <p>
                    “With Odoo CRM, I keep all the information about leads and
                    customers in a single place. It's great and effective.”
                  </p>
                  <p>
                    <small>Claudia Sebastiani, Account Manager</small>
                  </p>
                  <img
                    src="https://odoocdn.com/openerp_website/static/src/img/2016/testimonials/logo_creativi_quadrati.png"
                    className="w-24 "
                    alt="Logo"
                    loading="lazy"
                    style={{}}
                  />
                </blockquote>
              </div>
            </div>
            <div className="lg:w-6/12 lg:offset-1 relative">
              <img
                className="relative overflow-hidden shadow-lg rounded-lg hover:scale-105 transform transition-transform duration-500"
                src="//odoocdn.com/web/image/11143262/Sales-Analysis.png"
                alt="Odoo Sales analysis interface"
                loading="lazy"
                style={{}}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-9 px-5 ">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12  overflow-hidden md:px-8 md:flex items-center">
            <div className="lg:w-6/12 relative">
              <img
                className="rounded-lg shadow-lg  transition-transform duration-300 transform hover:scale-105"
                src="//odoocdn.com/web/image/11186731/CRM-Discuss.png"
                alt="Odoo Discuss App - screenshot of a conversation"
                loading="lazy"
              />
            </div>
            <div className="lg:w-6/12 lg:offset-1 pb-6 lg:pb-0 md:pl-6 lg:pl-12 pt-5">
              <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
                Stay Connected to Your Customers
              </h2>
              <h4 className="mb-4 text-2xl text-black">
                Real-time Messaging to Enhance Collaboration
              </h4>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                Get a quick overview of what's going on in your team. See when a
                colleague logs a call or sends a quote. Share ideas and files in
                real-time and catch-up on things you missed when you were away.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRM;
