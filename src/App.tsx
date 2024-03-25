import React from 'react';
import './App.css';
import "./styles/reset.scss"
import "./styles/base.scss"
import { BrowserRouter } from 'react-router-dom';
import { MyRouter } from './MyRouter/routes';

function App() {
  return (
    <BrowserRouter>
      <MyRouter/>
    </BrowserRouter>
  );
}

export default App;
