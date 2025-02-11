import React, { useState } from 'react';
import './App.css';

function App() {
  const [elements, setElements] = useState([]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addElement = () => {
    const newElement = {
      id: Date.now(),
      color: getRandomColor(),
    };
    setElements([...elements, newElement]);
  };

  const removeElement = (id) => {
    setElements(elements.filter(element => element.id !== id));
  };

  const clearElements = () => {
    setElements([]);
  };

  return (
    <div className="App">
      <h1>Manipulación del DOM con React</h1>
      <div className="controls">
        <button onClick={addElement}>Agregar Elemento</button>
        <button onClick={clearElements}>Vaciar Elementos</button>
      </div>
      <div className="elements-container">
        {elements.map(element => (
          <div
            key={element.id}
            className="element"
            style={{ backgroundColor: element.color }}
          >
            <div className="element-header">
              <h3>{element.id}</h3>
              <button className="close-btn" onClick={() => removeElement(element.id)}>
                &times;
              </button>
            </div>
            <div className="element-content">
              <p>Color: {element.color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;