import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const SSRS = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <title>SAP</title>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:max-w-xl md:mr-10 text-center md:text-left">
            <h1 className="animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-6xl">
              Tauroic: Your SAP Consulting Partner{" "}
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8 py-5">
              Unlock the full potential of your SAP ecosystem with Tauroic's
              expert SAP consultants.
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
              src="https://img.freepik.com/premium-vector/sap-business-process-automation-software-cloud-software-vector-stock-illustration_100456-10563.jpg?w=740"
              alt="Illustration"
              className="w-full h-auto rounded-md animate-fade-in-left"
            />
          </div>
        </div>
      </section>
      <section className=" py-5 md:py-10 xl:py-1 sm:px-4  px-8 pb-5 bg-gray-200  ">
        <div class="container mx-auto text-center  py-2 ">
          <h1 class="text-2xl md:text-2xl md:px-48 font-medium  text-center mb-4">
            At Tauroic, we understand the importance of SAP in your business
            operations. We're not just consultants; we're partners dedicated to
            helping you leverage SAP to its fullest potential. Whether you're
            embarking on a new SAP project or seeking to optimize your existing
            SAP landscape, Tauroic is here to guide you every step of the way.
          </h1>
        </div>
      </section>
      <section className=" py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
            Why Choose Tauroic for SAP Consulting ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {/* Feature 1 */}

            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Comprehensive Expertise{" "}
              </h3>
              <p className="text-black ">
                Tauroic boasts a team of highly skilled SAP consultants,
                encompassing both technical and functional domains. Our experts
                are proficient in a wide range of SAP modules, ensuring that you
                have access to the right talent for your specific needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Proven Experience
              </h3>
              <p className="text-black  ">
                With years of hands-on experience, our consultants have
                successfully delivered projects for diverse industries, from
                small businesses to large enterprises. We bring a wealth of
                knowledge to the table.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Customized Solutions
              </h3>
              <p className="text-black ">
                We understand that every organization is unique. Our consultants
                work closely with you to design and implement SAP solutions that
                align perfectly with your business goals, enhancing efficiency
                and productivity.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Technical Excellence
              </h3>
              <p className="text-black ">
                Our technical consultants excel in SAP programming (ABAP) and
                can develop custom solutions, integrations, and enhancements to
                optimize your SAP landscape.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Functional Insight
              </h3>
              <p className="text-black ">
                Our functional consultants are experts at configuring SAP
                systems to improve business processes. They ensure that your SAP
                solution is a true asset to your operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
            Our SAP Consulting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {/* Feature 1 */}

            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                SAP Implementation
              </h3>
              <p className="text-black ">
                From initial planning to successful go-live, we guide you
                through the entire SAP implementation process.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Custom Development{" "}
              </h3>
              <p className="text-black  ">
                We offer tailor-made SAP solutions, designed to fit seamlessly
                into your existing SAP environment.
              </p>
            </div>

            {/* Feature 3 */}

            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Integration Services{" "}
              </h3>
              <p className="text-black ">
                Our experts can integrate SAP with other systems, both within
                and outside your organization, streamlining data flow and
                automating processes.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Support and Maintenance{" "}
              </h3>
              <p className="text-black ">
                Our commitment to your success doesn't end with implementation.
                We provide ongoing support and maintenance services to keep your
                SAP landscape running smoothly.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Training
              </h3>
              <p className="text-black ">
                Knowledge transfer is vital. Tauroic consultants provide
                comprehensive training programs to empower your team with SAP
                expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SSRS;
