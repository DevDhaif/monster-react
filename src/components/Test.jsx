import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faFeed,faFireAlt,faHome } from '@fortawesome/free-solid-svg-icons'
import React,{useState,useEffect} from 'react'


function Test() {
  const [navOpen,setNavOpen]=useState(false)
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
  
    useEffect(()=>{
      setTimeout(() => {
        setNavOpen(!navOpen)
      }, 1500);      
    },[navOpen])
    
  return (
    <div className={` flex-col fixed  bg-red-800 h-full w-full z-20 
              ${navOpen ? " flex " : " hidden "} `}> 
    </div>
  )
}

export default Test