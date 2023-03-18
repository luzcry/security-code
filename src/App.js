import React from 'react';
import { UseState } from './UseState';
import { ClassState } from './ClassState'; 
import { UseReducer } from './useReducer'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="use state"/>
      <ClassState name="class state"/>
      <UseReducer name="use reducer"/>
    </div>
  );
}

export default App;
