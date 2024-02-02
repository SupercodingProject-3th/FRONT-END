import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from'react-router-dom'


function App() {
  return (
   
    <div className="App">
    <Routes>
      <Route path="/" element={ <div>홈</div> } />
      <Route path="/detail/:id" element={ <div>상세페이지</div> } />
      <Route path="*" element={ <div>404페이지</div> } />
    </Routes>
    </div>
   
  );
}

export default App;
