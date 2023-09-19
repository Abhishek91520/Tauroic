import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Spreadsheet = () => {
  return (
    <div>
        <Navbar/>
        <div className="container h-screen">
          <title>Spreadsheet</title>
          
        <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
          <div className="flex-none space-y-5 max-w-xl">
            <br></br>
            <br></br>
            <h1 className="text-5xl text-gray-800 font-semibold sm:text-7xl">
            Go the Extra Mile with Spreadsheets
            </h1>
            <p className="text-2xl">
            Upskill your Business Intelligence practices.
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
          <div className="lg:w-6/12 lg:offset-1 hidden md:block">
            <img
              className="img-fluid right-0"
              src="https://img.freepik.com/premium-vector/spreadsheets-concept-illustration_86047-449.jpg?size=1200&ext=jpg&ga=GA1.1.965098731.1692009598&semt=sph"
            />
          </div>  
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Spreadsheet