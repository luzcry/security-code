import React from 'react';
import { UseState } from './UseState';
import { ClassState } from './ClassState'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="use state"/>
      <ClassState name="class state"/>
    </div>
  );
}

export default App;
