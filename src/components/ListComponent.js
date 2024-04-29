
import React from 'react';
import ItemComponent from '../components/ItemComponent';


function ListComponent({ data, increasePoints }) {
  return (
    <div className="list-container">
      {data.map(item => (
        <ItemComponent key={item.id} item={item} increasePoints={increasePoints} />
      ))}
    </div>
  );
}

export default ListComponent;
