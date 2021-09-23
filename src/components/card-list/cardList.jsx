import React from 'react';

import Card from '../card/card';

import './card-list-style.scss';



const CardList = (props) => {

    return (
        <div className='card-list'> 
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}/>
                // <h1 key={monster.id}>{monster.name}</h1>
            ))}
        </div>
    )
};


export default CardList