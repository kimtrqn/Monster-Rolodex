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
    // this.searchMonster = this.searchMonster.bind(this);
  };

  componentDidMount() { //fetch a data which will return a promise
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  };

  searchMonster =(e) => { //dont need bind in constructor as using arrow function, theres lexoscoping as uts also binding
    e.preventDefault();
    this.setState({searchField: e.target.value})
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='app'>
      <h1>Monster Rolodex</h1>
        <SeachBar 
          placeHolder='Search monsters...'
          handleChange={this.searchMonster}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }

}

export default App;
