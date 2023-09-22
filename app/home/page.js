import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ParticleBg from "@/components/ParticleBg";

export default function Index() {
  return (
    <div className="font-body">
      <div className=" bg-current">
      </div>
      <title>Touroic Technologies</title>
      
      <Navbar />
      <div className=" border-2 border-black bg-cover bg-center">
      <section className="bg-white py-8
      
      +3
      md:pt-20">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="md:max-w-xl md:mr-10 text-center md:text-left">
        <h1 className="animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-6xl">
          Build Your Software Exactly How You Want
        </h1>
        <p className="text-xl md:text-2xl text-black mb-8 py-5">
          Custom Software Tailored to Your Needs – Your Vision, Your Software. Unlock Infinite Possibilities
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
        { title: 'CRM',group:'sales', icon: 'crm' },
        { title: 'POS',group:'sales', icon: 'point_of_sale' },
        { title: 'Sales',group:'sales', icon: 'sale' },
        { title: 'Project',group:'services', icon: 'project' },
        { title: 'Timesheet',group:'services', icon: 'hr_timesheet' },
        { title: 'Helpdesk',group:'services', icon: 'helpdesk' },
        { title: 'Inventory',group:'inventory', icon: 'stock' },
        { title: 'MRP',group:'inventory', icon: 'mrp' },
        { title: 'Purchase',group:'inventory', icon: 'purchase' },
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
  <div className="text-center mt-8">
    <Link
      href="/allapps"
      className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition duration-300"
    >
      and many more ...
    </Link>
  </div>
</section>

<section className="bg-white py-8 md:py-12 md:pr-5 ">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center md:pr-9 px-9">
      <div className="relative">
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/2020/home/screens-mockup.png"
          className="img-fluid rounded-lg shadow-lg"
          alt="Odoo Apps Mockup"
        />
      </div>
      <div className="pt-6 md:pt-0 md:pr-10 lg:pr-20">
        <h3 className="text-2xl md:text-4xl font-semibold mb-3">
          No more <b>painful integrations</b>.
        </h3>
        <p className="text-sm md:text-base text-gray-600">
          If you have individual software solutions that work but don't talk to
          each other, you are probably entering things more than once and
          missing a comprehensive overview of what's going on.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-600">
          Between the Odoo apps and the tens of thousands of Community apps,
          there is something to help address all of your business needs in a
          single, cost-effective, and modular solution: no more work to get
          different technology cooperating.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-600">
          Odoo apps are perfectly integrated with each other, allowing you to
          fully automate your business processes and reap the savings and
          benefits.
        </p>
        <div className="flex flex-col md:flex-row items-center mt-6">
          <div className="mb-2 md:mb-0">
            <img
              className="w-20 rounded-full"
              src="https://odoocdn.com/openerp_website/static/src/img/2016/testimonials/marc_peeters_sodexo.png"
              alt="Marc Peeters"
            />
          </div>
          <blockquote className="text-sm sm:text-base italic font-semibold text-gray-900 ml-2">
            <p className="mb-1">
              “We replaced 14 different applications and increased revenues by
              10% overnight.”
            </p>
            <p>
              <small>Marc Peeters, General Manager of the Vending Division</small>
            </p>
            <img
              className="w-20 mt-2"
              src="https://odoocdn.com/openerp_website/static/src/img/2016/sponsors/sodexo.png"
              alt="Sodexo"
            />
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-white py-8 px-5">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-9">
      <div>
        <h3 className="text-2xl md:text-4xl font-bold mb-1">
          A <span className="font-normal">unique</span> value proposition
        </h3>
        <h5 className="text-lg md:text-xl mb-4 font-normal">
          Everything you need with a top-notch user experience.
        </h5>
        <p className="text-base mb-4">
          Our family of apps works seamlessly together - giving you the ability
          to automate and track everything you do - centralized, online, and
          accessible from anywhere with any device.
        </p>
        <p className="text-base mb-4">
          The <strong className="font-bold">open-source development model of Odoo</strong> has allowed us to leverage thousands of developers and business experts to build the world's largest ecosystem of fully integrated business apps.
        </p>
        <p className="text-base mb-4">
          With a modern and elegant technical design, Odoo's framework is unique. It allows us and our community developers to provide <strong className="font-bold">top-notch usability that scales across all apps</strong>.
        </p>
        <p className="text-base mb-4">
          Usability improvements made to Odoo will be automatically applied to all of our integrated apps.
        </p>
        <p className="text-base mb-4">
          Finally, with regular annual releases, Odoo evolves much faster than any other solution.
        </p>
      </div>
      <div className="mx-auto">
        <img
          className="mx-auto md:mx-0 rounded-lg shadow-lg w-50 h-auto relative"
          src="https://odoocdn.com/openerp_website/static/src/img/2020/home/market_position_update.svg"
          alt="Odoo Comparison - User-friendliness and business scope vs. Oracle, SAP, Microsoft Dynamics, NetSuite, etc."
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>
      </div>
      <Footer />
    </div>
  );
}
