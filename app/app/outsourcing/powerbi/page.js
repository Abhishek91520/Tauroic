import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const PowerBI = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <title>Power BI</title>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:max-w-xl md:mr-10 text-center md:text-left">
            <h1 className="animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-6xl">
              Power BI Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8 py-5">
              Unlock the Full Potential of Your Data with Tauroic Technology's
              Power BI Outsourcing Services{" "}
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
              src="https://img.freepik.com/free-vector/dashboard-concept-illustration_114360-4351.jpg?w=996&t=st=1696604116~exp=1696604716~hmac=69fc31bad38c80a3e7109d7001d3c332c73f3a2a044607d646b52ead38a22750"
              alt="Illustration"
              className="w-full h-auto rounded-md animate-fade-in-left"
            />
          </div>
        </div>
      </section>
      <section className=" py-5 md:py-10 xl:py-1 sm:px-4  px-8 pb-5 bg-gray-200  ">
        <div class="container mx-auto text-center  py-2 ">
          <h1 class="text-2xl md:text-2xl md:px-48 font-medium  text-center mb-4">
            At Tauroic Technology, we understand the importance of data-driven
            decision-making in today's business landscape. That's why we offer
            comprehensive Power BI outsourcing services to empower organizations
            like yours with actionable insights, stunning visualizations, and
            streamlined reporting.
          </h1>
        </div>
      </section>
      <section className=" py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
            Why Outsource Power BI to Tauroic Technology?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {/* Feature 1 */}

            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
              Unmatched Expertise{" "}
              </h3>
              <p className="text-black ">
                Our dedicated team of Power BI experts brings years of
                experience in data analysis, visualization, and report
                development. We stay up-to-date with the latest Power BI
                features to ensure you get the most out of your data.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Customized Solutions
              </h3>
              <p className="text-black  ">
                We believe that every business is unique. Our Power BI solutions
                are tailor-made to fit your specific needs and objectives.
                Whether you need interactive dashboards, performance analytics,
                or data-driven forecasting, we've got you covered.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Cost-Effective
              </h3>
              <p className="text-black ">
                Outsourcing Power BI services to Tauroic Technology can
                significantly reduce your operational costs. You don't need to
                invest in building an in-house team or maintaining
                infrastructure. Pay only for the services you use.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Seamless Integration
              </h3>
              <p className="text-black ">
                We seamlessly integrate Power BI reports and dashboards into
                your existing systems and processes. Our goal is to make data
                access and analysis as effortless as possible for your team.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Data Security{" "}
              </h3>
              <p className="text-black ">
                Your data is of paramount importance to us. We adhere to strict
                data security and compliance standards to ensure the
                confidentiality and integrity of your information.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
          Our Power BI Services          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {/* Feature 1 */}

            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
              Report Development{" "}
              </h3>
              <p className="text-black ">
              We create visually compelling and interactive reports that provide actionable insights at a glance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
              Dashboard Design
              </h3>
              <p className="text-black  ">
              Our experts design user-friendly dashboards that allow you to monitor KPIs and key metrics in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
              Data Modeling
              </h3>
              <p className="text-black ">
              We optimize data models for faster query performance and improved data accuracy.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
              Data Integration
              </h3>
              <p className="text-black ">
              We integrate data from multiple sources, ensuring that your reports are based on a comprehensive dataset.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
              Training and Support{" "}
              </h3>
              <p className="text-black ">
              We offer training sessions and ongoing support to ensure your team can maximize the benefits of Power BI.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PowerBI;
