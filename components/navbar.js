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
            <div className="text-2xl text font-bold font-body bg-gradient-to-b  from-black  via-red-500 to-orange-500 bg-clip-text text-transparent">
              <h1>Tauroic</h1>
            </div>
          </a>
        </div>
        <div className="hidden lg:inline ">
          <ul className="flex justify-center hover:cursor-pointer ">
          <li className=" group py-1 px-5 hover:rounded flex transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-red-100">
            <a className="inline-flex " >
                Finance
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2 hidden border-gray-300 py-2 px-3  bg-white rounded shadow-lg group-hover:block">
                    <li><a href="/app/finance/accounting" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Accounting</a></li>
                    <li><a href="/app/finance/invoicing" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Invoicing</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Expenses</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Spreadsheet</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Document</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Sign</a></li>
                </ul>
            </li>
            <li className="group py-1 px-5 hover:rounded flex hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 ">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Sales
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2 hidden border-gray-300 py-2 px-3 bg-white rounded shadow-lg group-hover:block">
                    <li><a href="/app/sales/crm" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">CRM</a></li>
                    <li><a href="/app/sales/sales" className="block py-2 px-3 rounded hover:bg-red-100  transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Sales</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Point of Sale</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Subscriptions</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Rental</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Amazon Connector</a></li>
                </ul>
            </li>
            <li className=" group py-1 px-3 hover:rounded flex hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Websites
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2 hidden border-gray-300 py-2 px-3 bg-white rounded shadow-lg group-hover:block">
                    <li><a href="/app/websites/websitebuilder" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Website Builder</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">eCommerce</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Blogs</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Forum</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Live Chat</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">eLearning</a></li>
                </ul>
            </li>
            <li className="  group py-1 px-3 hover:rounded flex hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Inventory & MRP
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6  border-2 border-gray-300 py-2 px-3 bg-white rounded shadow-lg hidden group-hover:block">
                    <li><a href="/app/inventory/inventory" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Invetory</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Manufacturing</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">PLM</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Purchase</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Maintenance</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Quality</a></li>
                </ul>
            </li>
            <li className="  group py-1 px-3 hover:rounded flex hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Human Resources
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2 border-gray-300 py-2 px-3 bg-white rounded shadow-lg hidden group-hover:block ">
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Employees</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Recruitment</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Time Off</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Appraisals</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Referrals</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Fleet</a></li>
                </ul>
            </li>
            <li className="group py-1 px-3 hover:rounded flex hover:bg-red-100 hover:scale-105 ">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Marketing
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2  border-gray-300 py-2 px-3 bg-white rounded shadow-lg hidden group-hover:block">
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Email Marketing</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Social Marketing</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">SMS Marketing</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Events</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Marketing_Automation</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Surveys</a></li>
                </ul>
            </li>
            <li className="  group py-1 px-3 hover:rounded flex hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Services
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>
                <ul className="absolute mt-6 border-2 border-gray-300 py-2 px-3 bg-white rounded shadow-lg hidden group-hover:block">
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Project</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Timesheet</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Field Service</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Helpdesk</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Planning</a></li>
                    <li><a href="#" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-gray-400">Appointments</a></li>
                </ul>
            </li>
            <li className="  group py-1 px-3 hover:rounded flex hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105">
            <a className="inline-flex" aria-expanded="false" aria-haspopup="true">
                Outsourcing
                <svg className="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </a>  
                <ul className="absolute mt-6  border-2 border-gray-300 py-2 px-3 bg-white rounded shadow-lg hidden group-hover:block">
                    <li><a href="/app/outsourcing/powerbi" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">Power BI</a></li>
                    <li><a href="/app/outsourcing/ssrs" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">SSRS</a></li>
       
                    <li><a href="/app/outsourcing/sap" className="block py-2 px-3 rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium ">SAP</a></li>
          
                </ul>
            </li>
          </ul>
        </div>
        <div className="inline-flex">
          <ul className=" justify-center hover:cursor-pointer hidden lg:inline ">
            <li className="py-1 px-3 hover:rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 ">
              <a href="/about" >About Us</a>
            </li>
          </ul>
          <ul className="  justify-center hover:cursor-pointer hidden lg:inline ">
            <li className="py-1 px-3 hover:rounded hover:bg-red-100 transition-all duration-200 ease-in-out transform text-red-700 hover:scale-105 ">
              <a href="/contact" >Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <a
            onClick={handleNav}
            className="py-1 px-3 hover:rounded hover:bg-red-100"
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
                    <li><a href="/app/finance/accounting" className="block text-xl p-1 font-normal hover:bg-red-100 ">Accounting</a></li>
                    <li><a href="/app/finance/invoicing" className="block text-xl p-1 font-normal hover:bg-red-100">Invoicing</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Expenses</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Spreadsheet</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Document</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Sign</a></li>
                </ul>
          </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-red-100 grid">
              <a className="inline-flex text-2xl">
                Sales
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="/app/sales/crm" className="block text-xl p-1 font-normal ">CRM</a></li>
                    <li><a href="/app/sales/sales" className="block text-xl p-1 font-normal hover:bg-red-100">Sales</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Point of Sale</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Subscriptions</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Rental</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Amazon Connector</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-red-100 grid">
              <a className="inline-flex text-2xl">
                Websites
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="/app/websites/websitebuilder" className="block text-xl p-1 font-normal hover:bg-red-100">Website Builder</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">eCommerce</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Blogs</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Forum</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Live Chat</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">eLearning</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-red-100 grid">
              <a className="inline-flex text-2xl">
                Inventoty & MRP
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="/app/inventory/inventory" className="block text-xl p-1 font-normal hover:bg-red-100">Invetory</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Manufacturing</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">PLM</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Purchase</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Maintenance</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Quality</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-red-100 grid">
              <a className="inline-flex text-2xl">
                Human Resources
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">Employees</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">Recruitment</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">Time Off</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">Appraisals</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">Referrals</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">Fleet</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-red-100 grid">
              <a className="inline-flex text-2xl">
                Marketing
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">Social Marketing</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">Email Marketing</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">SMS Marketing</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">Events</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">Marketing Automation</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100 ">Surveys</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-red-100 grid">
              <a className="inline-flex text-2xl">
                Services
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Project</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Timesheet</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Field Service</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Helpdesk</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Planning</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Appointments</a></li>
                </ul>
            </li>
            <li className="py-2.5 px-4 hover:rounded hover:bg-red-100 grid">
              <a className="inline-flex text-2xl">
                Productivity
              </a>
              <ul className="dropdown-content pl-5 py-2 ">
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Discuss</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Approvals</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">IoT</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">VoIP</a></li>
                    <li><a href="#" className="block text-xl p-1 font-normal hover:bg-red-100">Knowledge</a></li>

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
