import React from 'react';

import './card-list-style.css';



const CardList = (props) => {

    return (
        <div className='card-list'> 
            {props.monsters.map(monster => (
                <h1 key={monster.id}>{monster.name}</h1>
            ))}
        </div>
    )
};


export default CardList