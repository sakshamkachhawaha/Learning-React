import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const page1content = () => {
  return (
    <div className='py-10 flex px-18 h-[90vh] items-center gap-10'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default page1content
