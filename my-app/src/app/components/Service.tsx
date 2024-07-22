import React from 'react'
import ServiceCard from '../card/ServiceCard';

function Service() {

    const serviceData = [
        {
          id: 0,
          iconUrl: "/images/activity_icon.png",
          title: "Graphic Design",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
        },
        {
            id: 1,
            iconUrl: "/images/video_icon.png",
            title: "Video Editing",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
          },
          {
            id: 2,
            iconUrl: "/images/chart_icon.png",
            title: "Digital Marketing",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
          },
       
      ];

  return (
    <div>
        <div className='text-center space-y-4 '>
            <p className='text-customGray tracking-[0.39375rem] uppercase text-[0.875rem] font-[700] text-center'>Service</p>
            <p className='text-darkBlue text-2xl md:text-[3.25rem] font-[700] text-center'>Our Vison & Our Goal</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]'>
        {serviceData.map((service) => (
          <ServiceCard
          
            key={service.id}
            iconUrl={service.iconUrl}
            title={service.title}
            description={service.description}
            action="Learn More"
          />
        ))}
            
        
        </div>

 

    </div>
  )
}

export default Service