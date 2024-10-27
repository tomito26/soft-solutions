import { ServiceType } from '@/types/types'
import React from 'react'

const ServiceCard = ({service}:{ service: ServiceType}) => {
  return (
    <div className='bg-[#0423A0]  rounded-2xl pt-5 mt-10'>
      <div className='bg-white border rounded-xl rounded-t-2xl px-3 py-4 shadow-md'>
        <service.icon className="stroke-[#0423A0] h-7 w-7 mb-3"/>
        <h3 className='text-base text-monochrome font-semibold mb-2'>{service.title}</h3>
        <p className='text-base font-normal'>{service.description}</p>
      </div>
    </div>
  )
}

export default ServiceCard