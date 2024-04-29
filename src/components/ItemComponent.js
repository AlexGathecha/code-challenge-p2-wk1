// ItemComponent.js
import React from 'react';

function ItemComponent({ item, increasePoints }) {
  const { id, name, age, image, points } = item;

  return (
    <div className="item">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Points: {points}</p>
        <button onClick={() => increasePoints(id)}>Increase Points</button>
      </div>
    </div>
  );
}

export default ItemComponent;
