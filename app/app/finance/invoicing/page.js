import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Invoicing = () => {
  return (
    <div>
      <Navbar />
      <title>Invoicing | Billing</title>
      <section className=" bg-white overflow-hidden ">
        <div className="max-w-screen-xl mx-auto px-9 py-5 md:pt-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
          <div className="flex-none space-y-5 max-w-xl">
            <br></br>
            <br></br>
            <h1 className=" animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-5xl   ">
              Streamline Your Invoicing Process
            </h1>
            <p className="text-2xl">
              Manage contracts, create recurring invoices, bill timesheets, get
              paid faster.
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
          <div className="flex-1 items-center hidden md:block md:ml-20 pt-5 ">
            <img
              src="https://img.freepik.com/free-vector/invoice-concept-illustration_114360-2411.jpg?w=740&t=st=1694781944~exp=1694782544~hmac=1c0c045da51f4b803337d53f0590c509da7d2d0bbf395aa4789642b8a31977b3"
              className=" opacity-100 bg-white static"
            />
          </div>
        </div>
      </section>
      <section className=" md:px-5 ">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex items-center">
            <div className="lg:w-7/12 pb-12 lg:pb-0 pt-5">
              <div className="relative overflow-hidden    hover:scale-105 transform transition-transform duration-500">
                <img
                  src="https://img.freepik.com/free-vector/professional-davis-construction-invoice_23-2149381297.jpg?w=2000&t=st=1694789583~exp=1694790183~hmac=282b67b41913ebdbb9d27e4561d37355aecdda07fcf5a06c93830d2f50420987"
                  className="h-auto bg-white"
                  alt="Animation of pipeline analysis"
                  loading="lazy"
                />
                <div className="absolute  inset-0 bg-black opacity-0 hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="flex-none space-y-5 max-w-xl">
              <h2 className="text-4xl font-semibold sm:text-5xl text-black transition duration-300 pb-3">
                <b>Create</b> Professional Invoices
              </h2>

              <h4 className="mb-4 text-2xl text-black">
                Crafting professional invoices is essential for creating the
                right brand image, building trust with customers, and
                encouraging payment.
              </h4>
              <div className="flex items-center mb-2 ">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </i>
                <p className="text-black text-lg pl-3">
                  Choose from a gallery of beautiful templates
                </p>
              </div>
              <div className="flex items-center mb-2 ">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </i>
                <p className="text-black text-lg pl-3">
                  Add your company logo and personalize the invoices
                </p>
              </div>
              <div className="flex items-center mb-2 ">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </i>
                <p className="text-black text-lg pl-3">
                  Bill in multiple currencies and languages
                </p>
              </div>
              <div className="flex items-center mb-2 ">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </i>
                <p className="text-black text-lg pl-3">
                  Automate recurring invoices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" md:px-5 ">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex items-center">
            <div className="flex-none space-y-5 max-w-xl">
              <h2 className="text-4xl font-semibold sm:text-5xl text-black transition duration-300 pb-3">
                Get paid faster
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
            <div className="lg:w-7/12 pb-12 lg:pb-0 pt-5">
              <div className="relative overflow-hidden    hover:scale-105 transform transition-transform duration-500">
                <img
                  src="https://img.freepik.com/free-vector/transfer-money-concept-illustration_114360-3762.jpg?w=740&t=st=1694789144~exp=1694789744~hmac=d69854b088905a19e68746e6515c8a38db18bc44a3dd2bd2dd7bf97a7bfa99da"
                  className="h-auto bg-white"
                  alt="Animation of pipeline analysis"
                  loading="lazy"
                />
                <div className="absolute  inset-0 bg-black opacity-0 hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className=" md:px-5 ">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex items-center">
            <div className="lg:w-7/12 pb-12 lg:pb-0 pt-5">
              <div className="relative overflow-hidden  rounded-lg shadow-lg   hover:scale-105 transform transition-transform duration-500">
                <img
                  src="https://odoocdn.com/web/image/11186862/Invoicing-Dashboard.png"
                  className="h-auto bg-white"
                  alt="Animation of pipeline analysis"
                  loading="lazy"
                />
                <div className="absolute  inset-0 bg-black opacity-0 hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="flex-none space-y-5 max-w-xl">
              <h2 className="text-4xl font-semibold sm:text-5xl text-black transition duration-300 pb-3">
                Analyze your sales
              </h2>

              <h4 className="mb-4 text-2xl text-black">
                Access insightful data to get the big picture.
              </h4>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                Get direct access to key information with dynamic and
                customizable dashboards. Make your own definition and analyze
                your invoicing by product, customer, salesperson, etc.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Invoicing;
