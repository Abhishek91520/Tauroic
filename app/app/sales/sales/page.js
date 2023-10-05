import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Sales = () => {
  return (
    <div>
      <Navbar />
      <title>Sales</title>
      <section className="sm:pb-28 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-5 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
          <div className="flex-none space-y-5 max-w-xl">
            <br></br>
            <br></br>
            <h1 className=" animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-6xl   ">
              Streamline quotes with our user-friendly software.
            </h1>
            <p className="text-2xl">
              Simplify your sales process with our platform. Generate, sign, and
              accept payments for polished quotations online.
            </p>
            <div className="text-left pt-5  animate-bounce ">
              <a
                href={"/contact"}
                className="bg-transparent  transition ease-in-out duration-500 hover:bg-black text-black font-semibold hover:text-white py-3 px-7  border border-black hover:border-transparent rounded-full"
              >
                Start now-Contact us
              </a>
            </div>
          </div>
          <div className="flex-1 items-center hidden md:block md:ml-20 ">
            <img
              src="https://img.freepik.com/premium-vector/home-office-concept-man-working-from-home-student-freelancer-freelance-studying-concept-vector-illustration-flat-style_186332-478.jpg?size=626&ext=jpg&ga=GA1.1.965098731.1692009598&semt=ais"
              className="max-w-xl opacity-100 bg-white static"
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
                    alt=" CRM's Pipeline interface"
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
      {/* Section 1 - Image Right, Text Left */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:flex-1">
            <img
              src="https://odoocdn.com/web/image/11183703/Sales-Quotation.png"
              alt="Illustration"
              className="rounded-lg shadow-lg  transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="md:max-w-xl md:ml-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 pt-5">
              Sell more with clean quotations
            </h2>

            <h3 className="mb-4 text-2xl text-black">
              Professionally showcase your products and services.
            </h3>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Send clear and complete quotations to your prospects. Add product
              descriptions, beautiful images, and additional information simply
              by dragging and dropping building blocks.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Text Right, Image Left */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:max-w-xl md:mr-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Order & contract sorting
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Automate operations and focus on customer relationships and
              revenue
            </p>
          </div>
          <div className="md:flex-1">
            <img
              src="https://odoocdn.com/web/image/11125778/eCommerce-Sales-Quote.png"
              alt="Illustration"
              className="w-full h-auto py-5 object-cover animate-fade-in-left rounded-lg shadow-lg  transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {/* Feature 1 */}
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              
              <h3 className="text-2xl font-semibold text-black mb-4">
                Sell faster with electronic signatures
              </h3>
              <p className="text-gray-600">
                Allow customers to easily review and sign your online quotations
                from anywhere.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Communicate quickly and efficiently
              </h3>
              <p className="text-gray-600">
                Get custom alerts for relevant activities, communicate directly
                from quotations via email, automatically keep complete records
                of your negotiations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Maximize profits by upselling
              </h3>
              <p className="text-gray-600">
              Increase sales volume by automatically proposing extra options and accessories, apply closing triggers, discounts, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sales;
