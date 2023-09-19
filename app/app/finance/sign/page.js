import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Sign = () => {
  return (
    <div>
        <Navbar/>
        <div className="container h-screen">
          <title>Sign</title>
        <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-10 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
          <div className="flex-none space-y-5 max-w-xl">
            <br></br>
            <br></br>
            <h1 className="text-5xl text-gray-800 font-semibold sm:text-7xl">
            Easy Signature  
            </h1>
            <p className="text-2xl">
            Send, sign and approve documents online. 
            <br></br>
            Upload your PDF and drag & drop fields easily.
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
              src="https://img.freepik.com/free-vector/businessman-putting-electronic-signature-document-security-shields-electronic-signature-e-signature-template-e-sign-consent-agreement-concept-illustration_335657-2374.jpg?size=1200&ext=jpg&ga=GA1.2.965098731.1692009598&semt=ais"
            />
          </div> 

        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Sign