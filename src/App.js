import React  from 'react';
import './App.scss';

import { Header } from './Components'
import { Principal } from './Containers'

const App = () => { 

  return (
    <div className="app">
      <Header />
      <Principal />
    </div>
    
  );
}

export default App
