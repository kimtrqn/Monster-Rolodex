import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asr1'
        },
        {
          name: 'Dracula',
          id: 'asr2'
        },
        {
          name: 'Zombie',
          id: 'asr3'
        },
      ]
    }
  }

  render() {
    return (
      <div className='app'>
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>
            { monster.name}
          </h1>)
        }
      </div>
    )
  }

}

export default App;