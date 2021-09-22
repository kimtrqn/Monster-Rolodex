import React from 'react';

import CardList from './components/card-list/cardList.jsx'
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
    }
  }

  componentDidMount() { //fetch a data which will return a promise
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className='app'>
        <CardList monsters={this.state.monsters}/>
      </div>
    )
  }

}

export default App;
