import React from 'react';
import './App.css';
import EventHandleState from './Event_Handle_State';
import IfElsePart from './If_Else_Part';
import ElementReturn from './Element_return';
import PreventComponent from './PreventComponentFromRendering';
import AndComponent from './AndOperator';

function App() {
  return (
    <div className="App">
      <EventHandleState/>
      <IfElsePart />
      <ElementReturn />
      <PreventComponent />
      <AndComponent />

    </div>
  );
}

export default App;
