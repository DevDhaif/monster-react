import React from 'react'

const changebackground=()=>{
    return 'lorem';
}

export const Card= ({monster}) =>(
    <div className=' flex flex-col space-y-4  bg-cyan-400 text-center  text-gray-800 border-solid border border-gray-100
                    rounded-md p-8 cursor-pointer hover:scale-105  transition-transform duration-200               
    '>
        <img  src={`https://robohash.org/${monster.id}?set=set2`} alt="monster name" />
        <h1 className='text-xl font-semibold'>{monster.name}</h1>
        <h1 className='text-lg'>{monster.email}</h1>
         
    </div>
)