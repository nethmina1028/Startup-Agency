import React from 'react'

function News() {
  return (
    <div>
        <div className='text-center space-y-4 '>
            <p className='text-customGray tracking-[0.39375rem] uppercase text-[0.875rem] font-[700] text-center'>our Newsletter</p>
            <p className='text-darkBlue text-2xl md:text-[3.25rem] font-[700] text-center'>Subscribe Our Newsleter</p>
        </div>

        <div className='flex items-center justify-between md:flex-row flex-col pt-10'>
             <img src="/images/newsletter_large_icon.png" alt="mail" />

             <div className='flex flex-col'>
                <p className="mb-[1.44rem] text-normal font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <input type="email" placeholder="    Enter your email"
                 className="h-[3.8125rem] rounded-[3.0625rem] newsletter-box-shadow border-primary border-2 w-full mb-[1.44rem] "
                />
                <button className='bg-orange-500 h-[3.1215rem] w-full text-white hover:opacity-90 rounded-[0.625rem] font-medium mt-6'>Subscribe Our Newsletter</button>
             </div>

        </div>
    </div>
  )
}

export default News