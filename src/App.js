import React,{useState} from 'react';
import FillMailing from './components/FillMailing';
import Mailing from './components/Mailing';

function App() {

  const [ infoMailing, setInfoMailing ]= useState('')
  return (
    <div>
      <FillMailing setInfoMailing={setInfoMailing} infoMailing={infoMailing}/>
      <Mailing infoMailing={infoMailing}/>
    </div>
  );
}

export default App;
