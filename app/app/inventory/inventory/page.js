import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Inventory = () => {
  return (
    <div >
      <Navbar />
      <title>Inventory Management</title>
      <section className="bg-white py-16 md:py-15">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:max-w-xl md:mr-10 text-center md:text-left">
            <h1 className="animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-6xl">
              Optimize Warehouse Efficiency to the Fullest
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8 py-5  ">
              Revolutionize Your Warehouse Management with Modern Software
              Solutions
            </p>
            <div className="md:text-left pt-5  animate-bounce ">
              <a
                href={"/contact"}
                className="bg-transparent  transition ease-in-out duration-500 hover:bg-black text-black font-semibold hover:text-white py-4 px-9  border border-black hover:border-transparent rounded-full"
              >
                Start now-Contact us
              </a>
            </div>
          </div>
          <div className="flex-1 items-center hidden md:block md:ml-20  ">
            <img
              src="https://img.freepik.com/free-vector/handling-order-processing-abstract-concept-vector-illustration-order-documentation-processing-system-handling-customer-request-logistics-automated-logistics-operations-abstract-metaphor_335657-1789.jpg?w=740&t=st=1695353270~exp=1695353870~hmac=7be3d550842b87bd6982cae21228f0e5c588eece8a8a311090da93979971e386"
              className="w-full h-auto rounded-md animate-fade-in-left"
            />
          </div>
        </div>
      </section>
      <section className=" py-5 md:py-10 xl:py-1 sm:px-4  px-8 pb-5 ">
        <div class="container mx-auto text-center  py-2 ">
          <h1 class="text-3xl md:text-4xl font-bold  text-center mb-4">
            Unlock Complete Traceability with Our Solutions
          </h1>
          <p className="text-2xl py-2">
            Track Every Stock Move with Our Unique Double-Entry Inventory System
          </p>
          <p className="text-lg font-light py-2">
            Effortlessly Track Every Stock Movement from Purchase to Warehouse
            to Sales Order.<br></br> Trace Lots or Serials Throughout Your
            Entire Supply Chain, Both Upstream and Downstream.
          </p>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="md:px-4 py-4 w-full md:w-3/4 ">
              <div className=" overflow-hidden transition-transform duration-300 transform hover:scale-105">
                <div className="relative group">
                  <img
                    className=" w-full h-auto transition-opacity duration-300 transform hover:opacity-90 cursor-pointer "
                    src="https://odoocdn.com/openerp_website/static/src/img/2018/inventory/inventory_screenshot_03.gif"
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
      <section className=" py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:flex-1">
            <img
              src="https://img.freepik.com/free-vector/flat-design-innovation-concept_23-2149163765.jpg?w=2000&t=st=1695365088~exp=1695365688~hmac=8961d8c444af4ff8fd364762986a7ea244ba51bc3d9e2559452066436fc5c818"
              alt="Illustration"
              className="rounded-lg shadow-lg  transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="md:max-w-xl md:ml-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 pt-5 py-2">
              Enhance Efficiency and Reduce Processing Duration
            </h2>

            <h3 className="mb-4 text-2xl text-black py-2">
              Enhance Warehouse Organization with Our Smart Double-Entry
              Inventory System.
            </h3>
            <p className="text-xl md:text-xl text-gray-600 mb-8 py-2">
              Optimize your stocking method for improved internal operations.
              Our double-entry inventory system streamlines stock management,
              enabling seamless stock moves between locations.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Text Right, Image Left */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:max-w-xl md:mr-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 py-2">
            Maintain leaner stock levels and eliminate stockouts.




</h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 py-2">
            Achieve seamless and fully automated replenishment processes.





            </p>
            <p className="text-xl md:text-xl text-gray-600 mb-8 py-2">
            Optimize your supply chain for maximum efficiency with order points and automated RFQs.





            </p>
          </div>
          <div className="md:flex-1">
            <img
              src="https://odoocdn.com/openerp_website/static/src/img/2018/inventory/inventory_screenshot_02.gif"
              alt="Illustration"
              className="w-full h-auto py-5 object-cover animate-fade-in-left rounded-lg shadow-lg  transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inventory;
