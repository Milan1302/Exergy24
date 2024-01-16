import React, { useEffect } from 'react';
import Landing from './components/Landing';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Competitions from './pages/Competitions';
import Workshops from './pages/Workshops';
import Home from './pages/Home';
import Talks from './pages/Talks';

function App() {
  return (
    <>
      {/* <Landing text="EXERGY$ECHOES OF EXOTHERMIA" /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/competitions' element={<Competitions />} />
        <Route path='/workshops' element={<Talks />} />
        <Route path='/talks' element={<Talks />} />
      </Routes>
    </>
  )
}

export default App;
