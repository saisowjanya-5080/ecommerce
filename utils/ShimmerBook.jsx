import React from 'react'
var arr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const ShimmerBook = () => {
  return (
    arr.map((shim)=>(
        <div className='w-[200px] h-[380px] rounded-xl bg-gray-300'>
        </div>
    ))
    
  )
}

export default ShimmerBook