import React from 'react';

import CardList from './components/card-list/cardList.jsx';
import SeachBar from './components/search-bar/searchBar';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() { //fetch a data which will return a promise
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='app'>
        <SeachBar 
          placeHolder='Search monsters...'
          handleChange={e => this.setState({ searchField: e.target.value })}
        

        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }

}

export default App;
