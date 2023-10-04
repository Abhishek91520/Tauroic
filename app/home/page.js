import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBg from "@/components/ParticleBg";

export default function Index() {
  return (
    <div className="font-body">
      <div className=" bg-current"></div>
      <title>Touroic Technologies</title>

      <Navbar />
      <div className=" border-2 border-black bg-cover bg-center">
        <section className="bg-white py-8 md:pt-20">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-xl md:mr-10 text-center md:text-left">
              <h1 className="animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-6xl">
                Build Your Software Exactly How You Want
              </h1>
              <p className="text-xl md:text-2xl text-black mb-8 py-5">
                Custom Software Tailored to Your Needs – Your Vision, Your
                Software. Unlock Infinite Possibilities
              </p>
            </div>
            <div className="md:flex-1">
              <img
                src="https://img.freepik.com/free-vector/business-man-described-showing-graph-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39768.jpg?w=2000&t=st=1694756032~exp=1694756632~hmac=7eb06bc5c66e0feb331db06ca42a40677f247b5dfd39721e22ccdc2e4ce56505"
                alt="Illustration"
                className="w-full h-auto object-cover rounded-md animate-fade-in-left"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-16 px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-4xl font-semibold">
            An <b>app</b> for every need
          </h2>
          <div className="container mx-auto mt-8">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
              {[
                { title: "CRM", group: "sales", icon: "crm" },
                { title: "POS", group: "sales", icon: "point_of_sale" },
                { title: "Sales", group: "sales", icon: "sale" },
                { title: "Project", group: "services", icon: "project" },
                { title: "Timesheet", group: "services", icon: "hr_timesheet" },
                { title: "Helpdesk", group: "services", icon: "helpdesk" },
                { title: "Inventory", group: "inventory", icon: "stock" },
                { title: "MRP", group: "inventory", icon: "mrp" },
                { title: "Purchase", group: "inventory", icon: "purchase" },
              ].map((app) => (
                <a
                  key={app.title}
                  href={`app/${app.group}/${app.title.toLowerCase()}`}
                  className="bg-white p-4 rounded-lg text-center  transition duration-300 transform hover:scale-110 hover:font-extrabold"
                >
                  <div className="flex flex-col items-center ">
                    <img
                      className="p-2"
                      src={`//download.odoocdn.com/icons/${app.icon}/static/description/icon.svg`}
                      alt={app.title}
                    />
                    <b className="font-medium mt-2 block">{app.title}</b>
                  </div>
                </a>
              ))}
            </div>
          </div>
          {/* <div className="text-center mt-8">
            <Link
              href="/allapps"
              className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition duration-300"
            >
              and many more ...
            </Link>
          </div> */}
        </section>
        <section className=" md:px-5 ">
          <div className="container mx-auto">
            <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex items-center">
              <div className="flex-none space-y-5 max-w-xl">
                <h2 className="text-4xl font-semibold sm:text-5xl text-black transition duration-300 pb-3 text-center">
                  Seamless<b> Integrations.</b>{" "}
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
                  <p className="text-black text-lg pl-3 ">
                    Optimize efficiency by eliminating duplicate data entry.
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
                    Achieve real-time insights into your business activities.
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
                    Save time and resources with a cost-effective solution.
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
                    Seamless integration for efficient workflows.
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
                    Automate processes for increased efficiency and savings.
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
                    Explore Community apps for your unique needs.
                  </p>
                </div>
              </div>
              <div className="lg:w-7/12  lg:pb-0 pt-5">
                <div className="relative overflow-hidden    hover:scale-105 transform transition-transform duration-500">
                  <img
                    src="https://img.freepik.com/free-vector/big-data-center-server-room-rack-engineering-process-teamwork-computer-technology-cloud-storage_39422-1032.jpg?w=5000&t=st=1695551609~exp=1695552209~hmac=092c33b89076efee2fd950a304ee3cb292cd04f36e07bd76eb18104ef97478ff"
                    className="h-auto bg-white md:block hidden"
                    alt="Animation of pipeline analysis"
                    loading="lazy"
                  />
                  <div className="absolute  inset-0 bg-black opacity-0 hover:opacity-0 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" md:px-5 ">
          <div className="container mx-auto">
            <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex items-center">
              <div className="lg:w-7/12 pb-12 lg:pb-0 pt-5">
                <div className="relative overflow-hidden    hover:scale-105 transform transition-transform duration-500">
                  <img
                    src="https://img.freepik.com/free-vector/analytics-data-science-database-analysis-statistical-report-information-processing-automation-datacenter-expert-making-report_335657-815.jpg?w=5000&t=st=1695553742~exp=1695554342~hmac=c18a2cf7444a988c47d2367d57c7e11a6ac97178e7562989ef702d82961b3af7"
                    className="h-auto bg-white md:block hidden"
                    alt="Animation of pipeline analysis"
                    loading="lazy"
                  />
                  <div className="absolute  inset-0 bg-black opacity-0 hover:opacity-0 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="flex-none space-y-5 max-w-xl">
                <h2 className="text-4xl font-semibold sm:text-5xl text-center text-black transition duration-300 pb-3">
                  <b>Unique</b> and compelling benefits
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
                  <p className="text-black text-lg pl-3 ">
                    Streamlined collaboration across applications.
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
                    Utilization of open-source development for an extensive app
                    ecosystem.
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
                    Modern and user-friendly technical framework.
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
                    Consistent usability enhancements across all apps.
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
                    Rapid evolution with regular annual updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
