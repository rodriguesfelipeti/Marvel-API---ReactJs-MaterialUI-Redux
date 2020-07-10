import React  from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import './App.scss';
import { Header } from './Components'

const App = () => { 

  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
      </div>
    </React.Fragment>
    
  );
}

export default App
