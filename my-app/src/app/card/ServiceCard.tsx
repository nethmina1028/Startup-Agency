import React from 'react'

interface IProps {
    iconUrl: string;
    title: string;
    description: string;
    action:string ;
  }
  

function ServiceCard({ iconUrl, title, description, action }: IProps) {
  return (
    <div className='flex flex-grow flex-col gap-[2.56rem]  pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center  rounded-[1.75rem] service-card-shadow '>
        <img src={iconUrl} alt='' />
        <p className='text-[2.25rem] font-[700]'>{title}</p>
        <p className='text-normal '>{description}</p>

        <button className='w-[10.125rem] h-[3.1215rem] bg-primary text-white hover:opacity-90 rounded-[0.625rem] font-medium' >{action}</button>

    </div>
  )
}

export default ServiceCard