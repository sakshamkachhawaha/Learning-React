import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between p-5'>
      <div>
        <h3 className='mb-7 leading-[1.2] text-7xl font-bold'>Prospective <br /><span className='bg-gray-200 rounded-full px-3'>Custumer</span> <br />Segmentation</h3>
        <p className='text-xl mt-4 font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptatum modi fugit earum ea, corporis esse reprehenderit voluptates odit alias!</p>
      </div>
      <div>
        <i><ArrowUpRight size={90}/></i>
      </div>
    </div>
  )
}

export default LeftContent

