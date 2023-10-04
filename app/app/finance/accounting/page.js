import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Accounting = () => {
  return (
    <div>
      <Navbar />
      <title>Acoounting Software</title>
      <section className="sm:pb-28 bg-white overflow-hidden ">
        <div className="max-w-screen-xl mx-auto px-9 py-5 md:pt-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
          <div className="flex-none space-y-5 max-w-xl">
            <br></br>
            <br></br>
            <h1 className=" animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-5xl   ">
              Your Trusted Accounting Partner
            </h1>
            <p className="text-2xl">Navigating Finances, Ensuring Compliance</p>
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
              src="https://img.freepik.com/free-vector/accountant-concept-illustration_114360-5968.jpg?w=740&t=st=1694763253~exp=1694763853~hmac=118f5ffafa7ff062172d4fadd4371d107b56e2c1640eadc28916324ef9932940"
              className=" opacity-100 bg-white static"
            />
          </div>
        </div>
      </section>

      <section className=" py-5 md:py-10 xl:py-1 sm:px-4  px-8 pb-5 ">
        <div class="container mx-auto text-center  py-2 ">
          <h1 class="text-2xl md:text-4xl font-medium  text-center mb-4">
            Access everything you need from your dashboard
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="md:px-4 py-4 w-full md:w-3/4 ">
              <div className=" overflow-hidden transition-transform duration-300 transform hover:scale-105">
                <div className="relative group">
                  <img
                    className=" w-full h-auto transition-opacity duration-300 transform hover:opacity-90 cursor-pointer "
                    src="https://odoocdn.com/openerp_website/static/src/img/2022/accounting/accounting_img_02.png"
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
      <section className="py-9 md:px-5 ">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex items-center">
            <div className="flex-none space-y-5 max-w-xl">
              <h2 className="text-4xl font-semibold sm:text-5xl text-black transition duration-300 pb-3">
                Get paid faster
              </h2>

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
                  Convenient customer portal to enable quick payments
                </p>
              </div>
              <div className="flex items-center mb-2">
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
                  Automated follow-ups sent to collect late payments
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
                  A multi-currency environment with an automated exchange rate
                  to ease your international transactions
                </p>
              </div>

              <div className="flex items-center mb-2">
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
                  All main payment providers (Stripe, Authorize.net, Ogone,
                  PayPal, Adyen, Alipay) and many more.
                </p>
              </div>
              <div className="flex items-center mb-2">
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
                  Incoming and outgoing batch payments (SEPA Direct Debit, SEPA
                  Credit Transfer, check, etc..)
                </p>
              </div>
            </div>
            <div className="lg:w-7/12 pb-12 lg:pb-0 pt-5">
              <div className="relative overflow-hidden    hover:scale-105 transform transition-transform duration-500">
                <img
                  src="https://img.freepik.com/free-vector/paying-bills-concept-illustration_114360-19357.jpg?w=740&t=st=1696166510~exp=1696167110~hmac=8a070f3edfc2b34476a71cedc7a40ef8b635f72fea6b82d19bb2c3a523993db7"
                  className="h-auto bg-white"
                  alt="Animation of pipeline analysis"
                  loading="lazy"
                />
                <div className="absolute  inset-0 bg-black opacity-0 hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-5 md:py-10 xl:py-1 sm:px-4  px-8 pb-5 ">
        <div class="container mx-auto text-center  py-2 ">
          <h1 class="text-2xl md:text-4xl font-medium  text-center mb-4">
          Your reports, the way you like them
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="md:px-4 py-4 w-full md:w-3/4 pb-12 ">
              <div className=" overflow-hidden transition-transform duration-300 transform hover:scale-105">
                <div className="relative group">
                  <img
                    className=" w-full h-auto transition-opacity duration-300 transform hover:opacity-90 cursor-pointer "
                    src="https://odoocdn.com/openerp_website/static/src/img/2022/accounting/accounting_img_06.png"
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

      <section className="bg-gray-200 py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Instant, generic, and dynamic reports
              </h3>
              <p className="text-gray-600">
                Annotate, export to xsl and see the detail of reports easily.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Limitless reports, any time
              </h3>
              <p className="text-gray-600">
                To allow you to correctly manage your financial and legal
                statements.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Compliant tax reports
              </h3>
              <p className="text-gray-600">
                Get government-compliant tax reports in either accrual or cash
                basis methods.
              </p>
            </div>{" "}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Compare your figures between periods
              </h3>
              <p className="text-gray-600">
                Choose the periods you want and quickly see the comparison.
              </p>
            </div>{" "}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Spreadsheets{" "}
              </h3>
              <p className="text-gray-600">
                Prepare, analyze and store your reports in spreadsheets,
                benefitting from data communication and management.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Access detailed data
              </h3>
              <p className="text-gray-600">
                Easily click on your your report lines and access key
                information quickly.
              </p>
            </div>{" "}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accounting;
