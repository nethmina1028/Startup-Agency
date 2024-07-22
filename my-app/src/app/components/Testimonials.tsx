import React from 'react'
import TestimonialsCard from '../card/TestimonialsCard';

function Testimonials() {

    const appReviewData = [
        {
          id: 0,
          imageUrl: "/images/rayhan.jpg",
          reviewerName: "Rayhan Curran",
          review:
            "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
        },
    
        {
          id: 1,
          imageUrl: "/images/kayley.jpg",
          reviewerName: "Kayley Frame",
          review:
            "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
        },
        {
          id: 2,
          imageUrl: "/images/gene.jpg",
          reviewerName: "Gene Whitfield",
          review: "The most important part of the Startup Framework is the samples",
        },
        {
          id: 3,
          imageUrl: "/images/alan.jpg",
          reviewerName: "Allan Kim",
          review:
            "I've built my website with Startup just in one day, and it was ready-to-go. ",
        },
      ];

  return (
    <div>
           <div className='text-center flex flex-col gap-4'>
                 <p className='text-customGray tracking-[0.39375rem] uppercase text-[0.875rem] font-[700] text-center'>TESTIMONIALS</p>
                 <p className='text-darkBlue text-2xl md:text-[3.25rem] font-[700] text-center'>What Clients say about us</p>
           </div>

           <div className='grid grid-cols-1 gap-16 md:grid-cols-2 mt-8 md:mt-[6.75rem]'>
                   
           {appReviewData.map((review) => (
          <TestimonialsCard
            key={review.id}
            imageUrl={review.imageUrl}
            review={review.review}
            reviewerName={review.reviewerName}
          />
        ))}

           </div>
    </div>
  )
}

export default Testimonials