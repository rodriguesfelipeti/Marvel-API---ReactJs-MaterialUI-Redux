import React  from 'react';
import './App.scss';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


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
