
import React, { useState } from 'react';
import './App.css';
import ListComponent from './components/ListComponent';

function App() {
  const initialData = [
    {
      "id": 1,
      "name": "Bugeranus caruncalatus",
      "age": 7,
      "image": "http://dummyimage.com/178x100.png/dddddd/000000",
      "points": 7
    },
    {
      "id": 2,
      "name": "Columba livia",
      "age": 6,
      "image": "http://dummyimage.com/201x100.png/dddddd/000000",
      "points": 5
    },
    {
      "id": 3,
      "name": "Odocoilenaus virginianus",
      "age": 7,
      "image": "http://dummyimage.com/174x100.png/ff4444/ffffff",
      "points": 10
    }, {
      "id": 4,
      "name": "Vombatus ursinus",
      "age": 7,
      "image": "http://dummyimage.com/220x100.png/cc0000/ffffff",
      "points": 14
    }, {
      "id": 5,
      "name": "Neophron percnopterus",
      "age": 9,
      "image": "http://dummyimage.com/100x100.png/ff4444/ffffff",
      "points": 17
    }, {
      "id": 6,
      "name": "Cacatua galerita",
      "age": 4,
      "image": "http://dummyimage.com/169x100.png/dddddd/000000",
      "points": 15
    }, {
      "id": 7,
      "name": "Butorides striatus",
      "age": 6,
      "image": "http://dummyimage.com/211x100.png/cc0000/ffffff",
      "points": 15
    }, {
      "id": 8,
      "name": "Macropus rufus",
      "age": 7,
      "image": "http://dummyimage.com/147x100.png/ff4444/ffffff",
      "points": 10
    }, {
      "id": 9,
      "name": "Bucorvus leadbeateri",
      "age": 10,
      "image": "http://dummyimage.com/227x100.png/5fa2dd/ffffff",
      "points": 15
    }, {
      "id": 10,
      "name": "Uraeginthus granatina",
      "age": 9,
      "image": "http://dummyimage.com/197x100.png/ff4444/ffffff",
      "points": 5
    }, {
      "id": 11,
      "name": "Anastomus oscitans",
      "age": 6,
      "image": "http://dummyimage.com/191x100.png/ff4444/ffffff",
      "points": 20
    }, {
      "id": 12,
      "name": "Papio cynocephalus",
      "age": 4,
      "image": "http://dummyimage.com/114x100.png/cc0000/ffffff",
      "points": 9
    }, {
      "id": 13,
      "name": "Paraxerus cepapi",
      "age": 7,
      "image": "http://dummyimage.com/225x100.png/cc0000/ffffff",
      "points": 18
    }, {
      "id": 14,
      "name": "Estrilda erythronotos",
      "age": 7,
      "image": "http://dummyimage.com/159x100.png/cc0000/ffffff",
      "points": 19
    }, {
      "id": 15,
      "name": "Catharacta skua",
      "age": 8,
      "image": "http://dummyimage.com/192x100.png/dddddd/000000",
      "points": 11
    }
    
  ];

  const [data, setData] = useState(initialData);

  const increasePoints = (id) => {
    setData(prevData => prevData.map(item => {
      if (item.id === id) {
        return { ...item, points: item.points + 1 };
      }
      return item;
    }));
  };

  return (
    <div className="App">
      <h1>Animal Points Tracker</h1>
      <ListComponent data={data} increasePoints={increasePoints} />
    </div>
  );
}

export default App;
