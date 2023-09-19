"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="border-1 border-black bg-white relative font-body font-semibold transition-all duration-300">
      <div className="flex justify-between items-center px-12 p-4 text-sm border border-black">
        <div>
          <a href="/">
            <div className="text-xl transition-all duration-200 ease-in-out transform hover:scale-105 animate-text font-bold font-body bg-gradient-to-b  hover:animate-ping from-black  via-red-500 to-orange-500 bg-clip-text text-transparent">
              <h1>Tauroic</h1>
            </div>
          </a>
        </div>
        <div className="hidden lg:inline ">
          <ul className="flex justify-center hover:cursor-pointer ">
          <li className=" group py-1 px-5 hover:rounded flex transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-black/5">
            <a className="inline-flex " >
                Finance
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2 hidden border-gray-300 py-2 px-3  bg-white rounded shadow-lg group-hover:block">
                    <li><a href="/app/finance/accounting" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Accounting</a></li>
                    <li><a href="/app/finance/invoicing" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Invoicing</a></li>
                    <li><a href="/app/finance/expenses" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Expenses</a></li>
                    <li><a href="/app/finance/spreadsheet" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Spreadsheet</a></li>
                    <li><a href="/app/finance/document" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Document</a></li>
                    <li><a href="/app/finance/sign" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Sign</a></li>
                </ul>
            </li>
            <li className="group py-1 px-5 hover:rounded flex hover:bg-black/5 transition-all duration-200 ease-in-out transform hover:scale-105 ">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Sales
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2 hidden border-gray-300 py-2 px-3 bg-white rounded shadow-lg group-hover:block">
                    <li><a href="/app/sales/crm" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">CRM</a></li>
                    <li><a href="/app/sales/sales" className="block py-2 px-3 rounded hover:bg-gray-100  transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Sales</a></li>
                    <li><a href="/app/sales/pointofsale" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Point of Sale</a></li>
                    <li><a href="/app/sales/subscriptions" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Subscriptions</a></li>
                    <li><a href="/app/sales/rental" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Rental</a></li>
                    <li><a href="/app/sales/amazonconnector" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Amazon Connector</a></li>
                </ul>
            </li>
            <li className=" group py-1 px-3 hover:rounded flex hover:bg-black/5 transition-all duration-200 ease-in-out transform hover:scale-105">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Websites
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2 hidden border-gray-300 py-2 px-3 bg-white rounded shadow-lg group-hover:block">
                    <li><a href="/app/websites/websitebuilder" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Website Builder</a></li>
                    <li><a href="/app/websites/ecommerce" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">eCommerce</a></li>
                    <li><a href="/app/websites/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Blogs</a></li>
                    <li><a href="/app/websites/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Forum</a></li>
                    <li><a href="/app/websites/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Live Chat</a></li>
                    <li><a href="/app/websites/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">eLearning</a></li>
                </ul>
            </li>
            <li className="  group py-1 px-3 hover:rounded flex hover:bg-black/5 transition-all duration-200 ease-in-out transform hover:scale-105">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Inventory & MRP
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6  border-2 border-gray-300 py-2 px-3 bg-white rounded shadow-lg hidden group-hover:block">
                    <li><a href="/app/inventory/inventory" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Invetory</a></li>
                    <li><a href="/app/inventory/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Manufacturing</a></li>
                    <li><a href="/app/inventory/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">PLM</a></li>
                    <li><a href="/app/inventory/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Purchase</a></li>
                    <li><a href="/app/inventory/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Maintenance</a></li>
                    <li><a href="/app/inventory/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Quality</a></li>
                </ul>
            </li>
            <li className="  group py-1 px-3 hover:rounded flex hover:bg-black/5 transition-all duration-200 ease-in-out transform hover:scale-105">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Human Resources
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2 border-gray-300 py-2 px-3 bg-white rounded shadow-lg hidden group-hover:block ">
                    <li><a href="/app/hr/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Employees</a></li>
                    <li><a href="/app/hr/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Recruitment</a></li>
                    <li><a href="/app/hr/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Time Off</a></li>
                    <li><a href="/app/hr/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Appraisals</a></li>
                    <li><a href="/app/hr/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Referrals</a></li>
                    <li><a href="/app/hr/#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Fleet</a></li>
                </ul>
            </li>
            <li className="group py-1 px-3 hover:rounded flex hover:bg-black/5 hover:scale-105 ">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Marketing
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2  border-gray-300 py-2 px-3 bg-white rounded shadow-lg hidden group-hover:block">
                    <li><a href="/app/marketing/socialmarketing" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Email Marketing</a></li>
                    <li><a href="/app/marketing/emailmarketing" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Social Marketing</a></li>
                    <li><a href="/app/marketing/smsmarketing" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">SMS Marketing</a></li>
                    <li><a href="/app/marketing/events" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Events</a></li>
                    <li><a href="/app/marketing/marketingautomation" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Marketing_Automation</a></li>
                    <li><a href="/app/marketing/surveys" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Surveys</a></li>
                </ul>
            </li>
            <li className="  group py-1 px-3 hover:rounded flex hover:bg-black/5 transition-all duration-200 ease-in-out transform hover:scale-105">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Services
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2 border-gray-300 py-2 px-3 bg-white rounded shadow-lg hidden group-hover:block">
                    <li><a href="/app/services/project" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Project</a></li>
                    <li><a href="/app/services/timesheet" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Timesheet</a></li>
                    <li><a href="/app/services/fieldservice" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Field Service</a></li>
                    <li><a href="/app/services/helpdesk" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Helpdesk</a></li>
                    <li><a href="/app/services/planning" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Planning</a></li>
                    <li><a href="/app/services/appointments" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Appointments</a></li>
                </ul>
            </li>
            <li className="  group py-1 px-3 hover:rounded flex hover:bg-black/5 transition-all duration-200 ease-in-out transform hover:scale-105">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Digital Marketing
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6  border-2 border-gray-300 py-2 px-3 bg-white rounded shadow-lg hidden group-hover:block">
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Social Media</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">SEO</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Promotions</a></li>
                </ul>
            </li>
          </ul>
        </div>
        <div className="#">
          <ul className=" justify-center hover:cursor-pointer hidden lg:inline">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5 transition-all duration-200 ease-in-out transform hover:scale-105 ">
              <a href="/contact" className="transition-all duration-200 ease-in-out transform hover:scale-105 animate-bounce 	">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <a
            onClick={handleNav}
            className="py-1 px-3 hover:rounded hover:bg-black/5"
          >
            Menu
          </a>
        </div>

        <div
          className={
            nav
              ? "bg-white absolute right-0 left-0 top-0 w-65 h-full z-10"
              : "fixed right-[-100%]"
          }
        >
          <div className="flex justify-end pr-8 pt-8">
            <TfiClose
              onClick={handleNav}
              className="rounded p-1"
              size={28}
            />
          </div>
          <div className="flex flex-col bg-white overflow-y-auto items-center h-screen">
          <ul className=" px-9">
          <li className="py-2.5 px-4 hover:rounded grid">
            <a className="inline-flex text-2xl">
              Finance
            </a>
                <ul className="dropdown-content pl-5">
                    <li><a href="/app/finance/accounting" className="block text-xl p-1 font-normal hover:bg-black/5 ">Accounting</a></li>
                    <li><a href="/app/finance/invoicing" className="block text-xl p-1 font-normal hover:bg-black/5">Invoicing</a></li>
                    <li><a href="/app/finance/expenses" className="block text-xl p-1 font-normal hover:bg-black/5">Expenses</a></li>
                    <li><a href="/app/finance/spreadsheet" className="block text-xl p-1 font-normal hover:bg-black/5">Spreadsheet</a></li>
                    <li><a href="/app/finance/document" className="block text-xl p-1 font-normal hover:bg-black/5">Document</a></li>
                    <li><a href="/app/finance/sign" className="block text-xl p-1 font-normal hover:bg-black/5">Sign</a></li>
                </ul>
          </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-black/5 grid">
              <a className="inline-flex text-2xl">
                Sales
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="/app/sales/crm" className="block text-xl p-1 font-normal ">CRM</a></li>
                    <li><a href="/app/sales/sales" className="block text-xl p-1 font-normal hover:bg-black/5">Sales</a></li>
                    <li><a href="/app/sales/pointofsale" className="block text-xl p-1 font-normal hover:bg-black/5">Point of Sale</a></li>
                    <li><a href="/app/sales/subscriptions" className="block text-xl p-1 font-normal hover:bg-black/5">Subscriptions</a></li>
                    <li><a href="/app/sales/rental" className="block text-xl p-1 font-normal hover:bg-black/5">Rental</a></li>
                    <li><a href="/app/sales/amazonconnector" className="block text-xl p-1 font-normal hover:bg-black/5">Amazon Connector</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-black/5 grid">
              <a className="inline-flex text-2xl">
                Websites
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Website Builder</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">eCommerce</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Blogs</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Forum</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Live Chat</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">eLearning</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-black/5 grid">
              <a className="inline-flex text-2xl">
                Inventoty & MRP
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Invetory</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Manufacturing</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">PLM</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Purchase</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Maintenance</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Quality</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-black/5 grid">
              <a className="inline-flex text-2xl">
                Human Resources
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">Employees</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">Recruitment</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">Time Off</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">Appraisals</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">Referrals</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">Fleet</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-black/5 grid">
              <a className="inline-flex text-2xl">
                Marketing
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">Social Marketing</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">Email Marketing</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">SMS Marketing</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">Events</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">Marketing Automation</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5 ">Surveys</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-black/5 grid">
              <a className="inline-flex text-2xl">
                Services
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Project</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Timesheet</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Field Service</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Helpdesk</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Planning</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Appointments</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-black/5 grid">
              <a className="inline-flex text-2xl">
                Productivity
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Discuss</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Approvals</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">IoT</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">VoIP</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-black/5">Knowledge</a></li>

                </ul>
            </li>
            <li className="pl-16 pb-20">
            <Link
              href={"/contact"}
              className=" pl-5 bg-transparent text-xl hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
            >
              Contact us
            </Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
