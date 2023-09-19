import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import React from "react";
const AppCard = ({ href, imgSrc, title }) => {
  return (
    <Link href={href} className="block w-full text-center p-4  transition duration-300 transform hover:scale-110 rounded-md">
      <div className="flex justify-center items-center ">
        <img width="66px" className="p-2" src={imgSrc} alt={title} />
      </div>
      <h5 className="mt-2 text-xl font-medium">{title}</h5>
    </Link>
  );
};


export default function allapps() {
  return (
    
    <div className="font-body">
      <title>All Apps</title>
      <Navbar />

      <div className=" border-2 border-black bg-cover bg-center ">
        <div className="min-h-screen flex-grow">
          <div className="max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex ">
            <div className="flex-none space-y-5 max-w-xl md:pt-20">
              <br></br>
              <br></br>
              <h1 className="text-4xl text-gray-800 font-semibold sm:text-5xl ">
                One Need, One App
              </h1>
              <h2 className="text-xl">Expand as you grow.</h2>
            </div>
            <div className="flex-1 hidden md:block ml-20 bg-inherit">
              <img
                src="https://odoocdn.com/openerp_website/static/src/img/2016/all-apps/apps_top_banner-girl.jpg"
                className="max-w-xl"
              />
            </div>
          </div>
          <section className="py-16">
  <div className="container mx-auto">
    <h3 className="text-center mb-8 text-3xl font-semibold text-gray-800">
      Explore Our Website Apps
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <AppCard
        href="#website"
        imgSrc="//download.odoocdn.com/icons/website/static/description/icon.svg"
        title="Website Builder"
      />
      <AppCard
        href="#ecommerce"
        imgSrc="//download.odoocdn.com/icons/website_sale/static/description/icon.svg"
        title="eCommerce"
      />
      <AppCard
        href="#blog"
        imgSrc="//download.odoocdn.com/icons/website_blog/static/description/icon.svg"
        title="Blogs"
      />
      <AppCard
        href="#forum"
        imgSrc="//download.odoocdn.com/icons/website_forum/static/description/icon.svg"
        title="Forum"
      />
      <AppCard
        href="#elearning"
        imgSrc="//download.odoocdn.com/icons/website_slides/static/description/icon.svg"
        title="eLearning"
      />
      <AppCard
        href="#live-chat"
        imgSrc="//download.odoocdn.com/icons/im_livechat/static/description/icon.svg"
        title="Live chat"
      />
    </div>
  </div>
</section>
          <section className="bg-gray-200 py-16">
            <div className="container mx-auto">
              <h3 className="text-center mb-5 text-3xl font-medium">
                Sales Apps
              </h3>
              <div className="place-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                <AppCard
                  href="#crm"
                  imgSrc="//download.odoocdn.com/icons/crm/static/description/icon.svg"
                  title="CRM"
                />
                <AppCard
                  href="#sales"
                  imgSrc="//download.odoocdn.com/icons/sale/static/description/icon.svg"
                  title="Sales"
                />
                <AppCard
                  href="#point-of-sale-shop"
                  imgSrc="//download.odoocdn.com/icons/point_of_sale/static/description/icon.svg"
                  title="Point of Sale"
                />
                <AppCard
                  href="#subscriptions"
                  imgSrc="//download.odoocdn.com/icons/sale_subscription/static/description/icon.svg"
                  title="Subscriptions"
                />
                <AppCard
                  href="#rental"
                  imgSrc="//download.odoocdn.com/icons/sale_renting/static/description/icon.svg"
                  title="Rental"
                />
              </div>
            </div>
          </section>
          <section className="pt-16 pb-16">
            <div className="container mx-auto">
              <h3 className="text-center mb-5 text-3xl font-medium">
                Finance Apps
              </h3>
              <div className="place-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                <AppCard
                  href="#accounting"
                  imgSrc="//download.odoocdn.com/icons/account_accountant/static/description/icon.svg"
                  title="Accounting"
                />
                <AppCard
                  href="#invoicing"
                  imgSrc="//download.odoocdn.com/icons/account/static/description/icon.svg"
                  title="Invoicing"
                />
                <AppCard
                  href="#expenses"
                  imgSrc="//download.odoocdn.com/icons/hr_expense/static/description/icon.svg"
                  title="Expenses"
                />
                <AppCard
                  href="#documents"
                  imgSrc="//download.odoocdn.com/icons/documents/static/description/icon.svg"
                  title="Documents"
                />
                <AppCard
                  href="#sign"
                  imgSrc="//download.odoocdn.com/icons/sign/static/description/icon.svg"
                  title="Sign"
                />
              </div>
            </div>
          </section>
          <section className="bg-gray-200 pt-16 pb-16">
            <div className="container mx-auto">
              <h3 className="text-center mb-5 text-3xl font-medium">
                Inventory & Manufacturing Apps
              </h3>
              <div className="place-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                <AppCard
                  href="#inventory"
                  imgSrc="//download.odoocdn.com/icons/stock/static/description/icon.svg"
                  title="Inventory"
                />
                <AppCard
                  href="#manufacturing"
                  imgSrc="//download.odoocdn.com/icons/mrp/static/description/icon.svg"
                  title="Manufacturing (MRP)"
                />
                <AppCard
                  href="#plm"
                  imgSrc="//download.odoocdn.com/icons/mrp_plm/static/description/icon.svg"
                  title="PLM"
                />
                <AppCard
                  href="#purchase"
                  imgSrc="//download.odoocdn.com/icons/purchase/static/description/icon.svg"
                  title="Purchase"
                />
                <AppCard
                  href="#maintenance"
                  imgSrc="//download.odoocdn.com/icons/mrp_maintenance/static/description/icon.svg"
                  title="Maintenance"
                />
                <AppCard
                  href="#quality"
                  imgSrc="//download.odoocdn.com/icons/quality_control/static/description/icon.svg"
                  title="Quality"
                />
              </div>
            </div>
          </section>
          <section className="pt-16 pb-16">
            <div className="container mx-auto">
              <h3 className="text-center mb-5 text-3xl font-medium">
                Human Resources Apps
              </h3>
              <div className="place-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                <AppCard
                  href="#employees"
                  imgSrc="//download.odoocdn.com/icons/hr/static/description/icon.svg"
                  title="Employees"
                />
                <AppCard
                  href="#recruitment"
                  imgSrc="//download.odoocdn.com/icons/hr_recruitment/static/description/icon.svg"
                  title="Recruitment"
                />
                <AppCard
                  href="#time-off"
                  imgSrc="//download.odoocdn.com/icons/hr_holidays/static/description/icon.svg"
                  title="Time Off"
                />
                <AppCard
                  href="#appraisals"
                  imgSrc="//download.odoocdn.com/icons/hr_appraisal/static/description/icon.svg"
                  title="Appraisals"
                />
                <AppCard
                  href="#referrals"
                  imgSrc="//download.odoocdn.com/icons/hr_referral/static/description/icon.svg"
                  title="Referrals"
                />
                <AppCard
                  href="#fleet"
                  imgSrc="//download.odoocdn.com/icons/fleet/static/description/icon.svg"
                  title="Fleet"
                />
              </div>
            </div>
          </section>
          <section className="bg-gray-200 pt-16 pb-16">
            <div className="container mx-auto">
              <h3 className="text-center mb-5 text-3xl font-medium">
                Marketing Apps
              </h3>
              <div className="place-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                <AppCard
                  href="#marketing-automation"
                  imgSrc="//download.odoocdn.com/icons/marketing_automation/static/description/icon.svg"
                  title="Marketing Automation"
                />
                <AppCard
                  href="#email-marketing"
                  imgSrc="//download.odoocdn.com/icons/mass_mailing/static/description/icon.svg"
                  title="Email Marketing"
                />
                <AppCard
                  href="#sms-marketing"
                  imgSrc="//download.odoocdn.com/icons/mass_mailing_sms/static/description/icon.svg"
                  title="SMS Marketing"
                />
                <AppCard
                  href="#social-marketing"
                  imgSrc="//download.odoocdn.com/icons/social/static/description/icon.svg"
                  title="Social Marketing"
                />
                <AppCard
                  href="#events"
                  imgSrc="//download.odoocdn.com/icons/event/static/description/icon.svg"
                  title="Events"
                />
                <AppCard
                  href="#surveys"
                  imgSrc="//download.odoocdn.com/icons/survey/static/description/icon.svg"
                  title="Surveys"
                />
              </div>
            </div>
          </section>
          <section className="pt-16 pb-16">
            <div className="container mx-auto">
              <h3 className="text-center mb-5 text-3xl font-medium">
                Services Apps
              </h3>
              <div className="place-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                <AppCard
                  href="#project"
                  imgSrc="//download.odoocdn.com/icons/project/static/description/icon.svg"
                  title="Project"
                />
                <AppCard
                  href="#timesheet"
                  imgSrc="//download.odoocdn.com/icons/hr_timesheet/static/description/icon.svg"
                  title="Timesheet"
                />
                <AppCard
                  href="#field-service"
                  imgSrc="//download.odoocdn.com/icons/industry_fsm/static/description/icon.svg"
                  title="Field Service"
                />
                <AppCard
                  href="#helpdesk"
                  imgSrc="//download.odoocdn.com/icons/helpdesk/static/description/icon.svg"
                  title="Helpdesk"
                />
                <AppCard
                  href="#planning"
                  imgSrc="//download.odoocdn.com/icons/planning/static/description/icon.svg"
                  title="Planning"
                />
                <AppCard
                  href="#appointments"
                  imgSrc="//download.odoocdn.com/icons/website_calendar/static/description/icon.svg"
                  title="Appointments"
                />
              </div>
            </div>
          </section>
          <section className="bg-gray-200 pt-16 pb-16 flex">
            <div className="container mx-auto">
              <h3 className="text-center mb-5 text-3xl font-medium">
                Productivity Apps
              </h3>
              <div className="place-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                <AppCard
                  href="#discuss"
                  imgSrc="//download.odoocdn.com/icons/mail/static/description/icon.svg"
                  title="Discuss"
                />
                <AppCard
                  href="#approvals"
                  imgSrc="//download.odoocdn.com/icons/approvals/static/description/icon.svg"
                  title="Approvals"
                />
                <AppCard
                  href="#voip"
                  imgSrc="//download.odoocdn.com/icons/voip/static/description/icon.svg"
                  title="VoIP"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
