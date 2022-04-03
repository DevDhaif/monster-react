import React,{useState} from 'react'

function TestS() {

    // this variable will be used inside (map) later to decide which style will be rendered
    let [count,setCount]=useState(0)
  const users = [
    {
      name: 'John',
      age: 23,
      pic: 'https://picsum.photos/200',
      eligible: true
    },
    {
      name: 'Marie',
      age: 6,
      pic: 'https://picsum.photos/200',
      eligible: false
    },
    {
      name: 'David',
      age: 30,
      pic: 'https://picsum.photos/200',
      eligible: true
    },
    {
      name: 'Sarah',
      age: 20,
      pic: 'https://picsum.photos/200',
      eligible: true
    }
  ]  
    
    
  return (
<div className='  '>
<ul className="grid grid-rows-3 grid-flow-col gap-4 mt-4 px-10">
{users.map((user,id) =>{
    if(user.eligible){
        // Once there is an object passed the (if) statment the count will increase by 1 first
        count=count+1
        return (
            // Now it's clear that the returned element with the desired values 
            // will be rendered with the classes that you specify 
            count ===1 ? (
                <li key={id} className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-3 col-span-1">
                {user.name}
                <img src={user.pic} className="w-24 h-24 object-fill" />
                </li>
                )
            :count===2?(
                <li key={id} className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
                {user.name}
                    <img src={user.pic} className="w-24 h-24 object-fill" />
                </li>
                )
            :count===3?(
                <li key={id} className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-2">
                    {user.name}
                    <img src={user.pic} className="w-24 h-24 object-fill" />
                </li>
                ):<h1>somthing wentt wrong</h1>
            )
    }}
)}
</ul>
</div>
  )
}

export default TestS