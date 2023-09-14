import React from 'react';
import { Link,Route,Routes } from 'react-router-dom';
import Links from './Links';
import Two from './Two/Two';
import Fifth from './Fifth/fifth';
import Fourth from '../Fourth/Fourth';
import Seven from '../Seventh/Seven';
import Eigth from '../Eigth/Eigth';

function App() {
  return (
    <div className="appcontainer">
   
     <Routes>
      <Route path ="/" element ={<Links />}/>,
      <Route path="/two" element={<Two />} />,
      <Route path="/fifth" element={<Fifth />} />,
      <Route path = "/fourth" element = {<Fourth />}/>,
      <Route path = "/seventh" element = {<Seven />}/>,
      <Route path="/eighth" element={<Eigth />}/>
    </Routes>
    </div>
  );
}

export default App;
