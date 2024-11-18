import { ServiceType } from '@/types/types'
import React from 'react'

const ServiceCard = ({service}:{ service: ServiceType}) => {
  return (
    <div className='bg-[#0423A0] h-[200px] w-[300px] group border-b-[#0423A0]  rounded-2xl pt-5 mt-10'>
      <div className='bg-white border border-t-[#0423A0]  rounded-2xl group-hover:bg-[#0423A0] h-[200px] w-full rounded-t-2xl px-3 py-4 shadow-md'>
        <service.icon className="stroke-[#0423A0] group-hover:stroke-white h-7 w-7 mb-3"/>
        <h3 className='text-sm md:text-base group-hover:text-white text-monochrome font-semibold mb-2'>{service.title}</h3>
        <p className='text-sm md:text-base group-hover:text-white font-normal'>{service.description}</p>
      </div>
    </div>
  )
}

export default ServiceCard