import React from 'react'
import ReadandInspiredSlider from './ReadandInspiredSlider'

function ReadandInspired({blogs}) {
  return (
    <div>
      <div className='lg:px-[100px] md:px-[50px] px-[40px] pt-[50px]'>
        <div className=''>
            <h1 className='text-[#3e4939] font-[500] text-[32px]'>Read & be inspired</h1>
        </div>
        <div className='mt-[50px]'>
            <div className=''>
               <ReadandInspiredSlider blogs={blogs}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ReadandInspired
