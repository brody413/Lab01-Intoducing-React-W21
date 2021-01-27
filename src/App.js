import React, { useState } from 'react';
import Greeting from './Greeting';
import './style.css';


const App = () => {
  const [name, setName] = useState();

  return (
    <>
    <div id="background">
      <input
      // placeholder message
        placeholder="Please Enter a Name Here"
        // putting name into my message
        onChange={({target: {value}}) => setName(value)}
      />
      {
      // Calls greeting message and gives it 'name'
      <Greeting name={name}/> 
      }
      </div>
      </>
  );
};

export default App;

