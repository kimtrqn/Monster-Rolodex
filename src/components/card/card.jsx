import React from 'react';

import './card.css';

const Card = (props) => {

    return(
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
            <h1 key={props.monster.id}>{props.monster.name}</h1>
        </div>
    )
};

export default Card;