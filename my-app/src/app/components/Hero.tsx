import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col md:flex-row mt-10 items-center'>

        <div className='flex flex-col gap-4'>
        
            <p className="font-[650] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">We boost growth for your statup business</p>

            <p className="text-[1.375rem] font-[500]">Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment</p>

            <div className='flex gap-10'>

                <button className='bg-orange-500 h-[3.1015rem] w-[9.4375rem] text-white hover:opacity-90 rounded-[0.625rem] font-medium'>Get Started</button>

                <div className='flex items-center gap-6 md:pb-0 pb-4'>

                 <img src="/images/fancy_play_icon.png" alt="play icon" />
                 <p className="font-bold text-normal">Learn More</p>

                </div>

              </div>
        
        </div>

        <div className=''>

        <img
          src="/images/happy_guy.png"
          alt="guy with phone surrounded by action icons"
        />
        </div>

    </div>
  )
}

export default Hero