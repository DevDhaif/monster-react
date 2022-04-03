import { useState, Component } from "react";
import "./index.css";
import { CardList } from "./components/card-list/Card-list";
import Test from "./components/Test";
import TestS from "./components/TestS";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      serachField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, serachField } = this.state;
    const filteredMonsters=monsters.filter(monster=> monster.name.toLowerCase().includes(serachField))
    return (
      <div className='w-screen  h-screen bg-gray-200'>
      <div className="justify-center align-middle items-center flex flex-col p-8">
      
        <input
          type='text'
          placeholder='search'
          onChange={(e) => this.setState({ serachField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
      </div>
    );
  }
}

export default App;

// <CardList monsters={this.state.monsters}/>
