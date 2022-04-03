import React,{ useState } from 'react'

function Second() {
    const [colapse,setColapse]=useState(true)
    const handleMenuCollapse = (e) => {
    e.preventDefault();
    setColapse(!colapse);
  };
  return (

    <div>
         <div
          className={`flex w-24 h-96  bg-indigo-500 absolute top-[calc((100vh-384px)/2)]  ${
            colapse ? "hidden" : "right-0"
          } " bg-primary rounded-b-lg items-center justify-center`}>
          Setting
         </div>
         
         <div
            className={`flex w-12 absolute right-0 top-[calc((100vh-384px)/2)] h-12 bg-indigo-500
                ${colapse ? 'animate-pulse': 'right-24'}
                cursor-pointer bg-primary rounded-l-lg items-center justify-center`}
                onClick={handleMenuCollapse}
          >
            <div className='w-5 h-5 bg-white rounded-full ' />
         </div>
   </div>
    
  )
}

export default Second