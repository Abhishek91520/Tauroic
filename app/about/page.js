import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        {/* Section 1 */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto  ">
              <h1 className="text-4xl font-bold text-gray-800 text-center">
                About Tauroic Technologies
              </h1>
              <p className="mt-4 text-lg  text-center">
                Your Partner in ERP and Business Solutions
              </p>
              <p className="text-lg text-gray-800 pt-5 text-center">
                Welcome to Tauroic Technologies, your trusted partner in
                navigating the ever-evolving landscape of business technology.
                As a leading ERP and business solutions company, we are
                committed to driving innovation, efficiency, and growth for
                businesses of all sizes across industries.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-xl text-center font-semibold py-3">
                Our Vision
              </h1>
              <p className="text-lg text-gray-800 text-center">
                At Tauroic Technologies, our vision is clear: to empower
                organizations with transformative technology solutions that
                optimize operations, enhance decision-making, and pave the way
                for sustainable success. We believe in the potential of every
                business to thrive in the digital age.
              </p>
            </div>
          </div>
        </section>
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-xl text-center font-semibold py-3">
                Our Mission
              </h1>
              <p className="text-lg text-gray-800 text-center">
                Our mission is to deliver best-in-class ERP and business
                solutions tailored to the unique needs and challenges of our
                clients. We are dedicated to providing comprehensive, end-to-end
                services that drive excellence and foster long-term
                partnerships. Our success is measured by the success of our
                clients.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Tauroic Technologies?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Expertise */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      Expertise
                    </h3>
                    <p className=" text-center">
                      With a team of seasoned professionals, Tauroic
                      Technologies boasts decades of combined experience in ERP
                      systems, business process optimization, and technology
                      consulting. We bring a wealth of knowledge to every
                      project.
                    </p>
                  </div>
                </div>

                {/* Innovation */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      Innovation
                    </h3>
                    <p className=" text-center">
                      In a rapidly changing business environment, we stay at the
                      forefront of technology trends to offer cutting-edge
                      solutions that keep your business competitive and
                      future-ready.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* Client-Centric Approach */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      Client-Centric Approach
                    </h3>
                    <p className=" text-center">
                      We understand that each business is unique. Our solutions
                      are tailor-made to align with your specific objectives and
                      challenges, ensuring tangible results and a positive
                      impact on your bottom line.
                    </p>
                  </div>
                </div>

                {/* Proven Track Record */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      Data Security and Privacy{" "}
                    </h3>
                    <p className=" text-center">
                      We understand the importance of safeguarding your data and
                      respecting your privacy. Our robust security measures
                      ensure that your information remains confidential and
                      secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Expertise */}
                <div className="bg-gray- rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      ERP Implementation
                    </h3>
                    <p className=" text-center">
                      We specialize in implementing and customizing ERP systems,
                      streamlining your business processes, and providing
                      real-time insights to drive informed decision-making.
                    </p>
                  </div>
                </div>

                {/* Innovation */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      Business Process Optimization
                    </h3>
                    <p className=" text-center">
                      Our experts analyze and optimize your existing processes,
                      making them more efficient, cost-effective, and aligned
                      with your strategic goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* Client-Centric Approach */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      Technology Consulting{" "}
                    </h3>
                    <p className=" text-center">
                      From selecting the right software and hardware to IT
                      strategy development, we offer comprehensive technology
                      consulting services to support your business growth.
                    </p>
                  </div>
                </div>

                {/* Proven Track Record */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                      Training and Support{" "}
                    </h3>
                    <p className=" text-center">
                      We provide training for your teams and offer ongoing
                      support to ensure that your technology investments deliver
                      maximum value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add more sections as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
