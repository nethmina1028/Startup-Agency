import React from 'react'

function Footer() {
  return (
    <div className='grid grid-col md:grid-cols-3 justify-between items-center gap-6 mb-4 p-4 border-t-4'>
        <div>
        <img src="/images/footer_logo.png" alt="footer logo" />
        </div>

        <div className="text-lightBlue text-[1rem] font-serif">
          © 2020 Epixelab. All rights reserved.
        </div>

        <div className="flex gap-4">
          <p className="text-lightBlue text-[1rem]">Portfolio</p>
          <p className="text-lightBlue text-[1rem]">How it Works</p>
          <p className="text-lightBlue text-[1rem]">Pricing</p>
          <p className="text-lightBlue text-[1rem]">About</p>
          <p className="text-lightBlue text-[1rem]">Login</p>
        </div>
      

    </div>
  )
}

export default Footer