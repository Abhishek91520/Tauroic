import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Inventory
 = () => {
  return (
    <div>
        <Navbar/>
        <title>eCommerce</title>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:max-w-xl md:mr-10 text-center md:text-left">
            <h1 className="animate-text font-bold font-body bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:text-7xl text-6xl">
            Discover the Perfect  eCommerce Platform
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8 py-5">
            Open Source, Scalable, and User-Friendly
            </p>
            <div className="md:text-left pt-5  animate-bounce ">
              <a
                href={"/contact"}
                className="bg-transparent  transition ease-in-out duration-500 hover:bg-black text-black font-semibold hover:text-white py-4 px-9  border border-black hover:border-transparent rounded-full"
              >
                Start now-Contact us
              </a>
            </div>
          </div>
          <div className="flex-1 items-center hidden md:block md:ml-20  ">
            <img
              src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=996&t=st=1695297866~exp=1695298466~hmac=401b56a99d0c3a46bee1491fcdccca7a3ece52defc7d666f7a702f58d3ff072c"
              alt="Illustration"
              className="w-full h-auto rounded-md animate-fade-in-left"
            />
          </div>
        </div>
      </section>

        <Footer/>


    </div>
  )
}

export default Inventory
