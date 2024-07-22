import React from 'react'

function Block() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between '>
          <div>
            <p className='text-lightBlue font-bold text-2xl'>Many Block and Components</p>
            <p className="text-customLightGray text-[1.2rem] mt-4 mb-8">Startup Framework contains components and complex blocks which can easily be integrated into almost any design.</p>
            <a  className='text-lightBlue font-bold border-4  border-customGray px-5 py-2 rounded-[1.325rem] ' href="">Explore</a>
          </div>


          <div>
          <img src="/images/video_player.png" alt="video player" />
          </div>
    </div>
  )
}

export default Block