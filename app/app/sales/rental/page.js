import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Rental = () => {
  return (
    <div>
      <Navbar/>
      <div className="container h-screen">
          <title>Rental</title>
        <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
          <div className="flex-none space-y-5 max-w-xl">
            <br></br>
            <br></br>
            <h1 className="text-5xl text-gray-800 font-semibold sm:text-7xl">
            Odoo Documents
            </h1>
            <p className="text-2xl">
            Save time recording bills, scanning contracts, approving documents, and become a paperless company.
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
              src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?size=1000&ext=jpg&ga=GA1.2.965098731.1692009598&semt=sph"
              alt="Odoo Sales analysis interface"
              loading="lazy"
              style={{}}
            />
          </div>  
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Rental