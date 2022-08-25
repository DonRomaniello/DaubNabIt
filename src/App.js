import React from 'react';

import { Panels } from './components/Panels'

import {FindPaints} from './components/FindPaints'

import { Settings } from './components/Settings';

import './App.css';

function App() {
  return (
    <div>
      <Panels />
      <FindPaints />
      <Settings />
    </div>
  );
}

export default App;
