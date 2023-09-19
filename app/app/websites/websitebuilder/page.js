import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const websitebuilder = () => {
  return (
    <div>
        <Navbar/>
        <title>Website Builder</title>
        <section className="bg-white py-16 md:py-20">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="md:max-w-xl md:mr-10 text-center md:text-left">
        <h1 className="animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-6xl">
        Website builder for businesses        </h1>
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
        <Footer/>   
    </div>
  )
}

export default websitebuilder