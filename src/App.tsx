import React from 'react';
import Forecast from './components/forecast';
import { Title } from './components/title';

function App() {
  return (
    <div className="App">
      <Title/>
      <Forecast />
    </div>
  );
}

export default App;
