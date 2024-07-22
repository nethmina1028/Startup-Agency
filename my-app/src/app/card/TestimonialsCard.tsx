import React from 'react'


interface IProps {
    imageUrl: string;
    review: string;
    reviewerName: string;
  }

function TestimonialsCard({ imageUrl, review, reviewerName }: IProps) {
  return (
    <div className='flex flex-col md:flex-row gap-[1.88rem]'>
          <img src={imageUrl} alt="testi image"
          className="w-[4.375rem] h-[4.375rem] rounded-[0.625rem]"
          />
           
          <div>     
              <p className="text-darkBlue font-bold">{review}</p>
              <p className="text-darkBlue font-bold opacity-[0.3] mt-1">{reviewerName}</p>
          </div>
         
    </div>
  )
}

export default TestimonialsCard