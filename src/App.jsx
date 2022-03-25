import { useState ,Component} from 'react'
import './index.css'

class  App extends Component {
  constructor(){
    super()
    this.state={
      monsters:[
        {
          name:'one',
          id:'1'
        },
        {
          name:'towo',
          id:'2'
        },
        {
          name:'three',
          id:'3'
        },
        {
          name:'four',
          id:'4'
        },
        {
          name:'five',
          id:'5'
        },
      ]
    }
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users =< )
  }
  render(){

  return (
    <div className="">
       {
         this.state.monsters.map((monster)=>(
           <div key={monster.id} className='flex w-full space-x-4 mx-4'>
           <p>{monster.id}</p>
           <p>{monster.name}</p>
           </div>
         ))
       }
    </div>
  )}
}

export default App
