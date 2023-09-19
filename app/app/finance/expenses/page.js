import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Expenses = () => {
  return (
    <div>
        <Navbar/>
        <div className="container h-screen">
          <title>Expenses</title>
        <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
          <div className="flex-none space-y-5 max-w-xl">
            <br></br>
            <br></br>
            <h1 className="text-5xl text-gray-800 font-semibold sm:text-7xl">
            Online expense management
            </h1>
            <p className="text-2xl">
            Easily manage employee expenses
            </p>
            <div className="text-left pt-5">
              <a
                href={"/contact"}
                className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
              >
                Start now-Contact us
              </a>
            </div>
          </div>
          <div className="hidden md:block" >
            <img
              className="img-fluid"
              src="https://img.freepik.com/free-vector/finance-department-employees-are-calculating-expenses-company-s-business_1150-41782.jpg?size=900&ext=jpg&ga=GA1.2.965098731.1692009598&semt=sph"
            />
          </div>  
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Expenses