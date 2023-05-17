import {Route , Routes} from 'react-router-dom' ;
import React from 'react';
import './App.css';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Login from './pages/login';




function App() {
  return (
      <Routes>
            <Route path='/' exact element = {<Home/>} />
            <Route path='/dashboard' exact element = {<Dashboard/>} />
            <Route path='/login' exact element = {<Login/>} />

      </Routes>
  );
}

export default App;