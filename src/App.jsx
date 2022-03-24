import { useState ,Component} from 'react'
import './index.css'

class  App extends Component {
  constructor(){
    super()
    this.state={
      string:'helloooooooooooooo'
    }
  }
  
  render(){

  return (
    <div className="">
        <h1 className="text-3xl text-indigo-500 font-bold underline">
          {this.state.string}
        </h1>
        <button onClick={()=>this.setState({string:"kl;dsjf;lskd"})} className='px-4 py-2 m-4 bg-teal-100'>change</button>
    </div>
  )}
}

export default App
