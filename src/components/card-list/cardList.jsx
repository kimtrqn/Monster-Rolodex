import React from 'react';

import Card from '../card/card';

import './card-list-style.css';



const CardList = (props) => {

    return (
        <div className='card-list'> 
            {props.monsters.map(monster => (
                <Card monster={monster}/>
                // <h1 key={monster.id}>{monster.name}</h1>
            ))}
        </div>
    )
};


export default CardList