import React from 'react';
import { Link,Route,Routes } from 'react-router-dom';
import Links from './Links';
import Two from './Two/Two';
import Fifth from './Fifth/fifth';
import Fourth from '../Fourth/Fourth';
import Seven from '../Seventh/Seven';
import Eigth from '../Eigth/Eigth';
import Nineth from '../Nineth/Nineth';
import Eleventh from '../Eleventh/Eleventh';
import Twelveth from '../Twelveth/Twelveth';
import Thirteenth from '../Thirteenth/Thirteenth';
import Fourteenth from '../Fourteenth/Fourteenth';
import Fifteen from '../Fifteenth/Fifteen';

function App() {
  return (
    <div className="appcontainer">
   
     <Routes>
      <Route path ="/" element ={<Links />}/>,
      <Route path="/two" element={<Two />} />,
      <Route path="/fifth" element={<Fifth />} />,
      <Route path = "/fourth" element = {<Fourth />}/>,
      <Route path = "/seventh" element = {<Seven />}/>,
      <Route path="/eighth" element={<Eigth />}/>,
      <Route path = "/nineth" element={<Nineth />}/>,
      <Route path = "/Eleventh" element ={<Eleventh />}/>,
      <Route path = "/Twelveth" element = {<Twelveth />}/>,
      <Route path = "/Thirteenth" element = {<Thirteenth />}/>,
      <Route path = "/Fourteenth" element= {<Fourteenth />}/>,
      <Route path = "/Fifteenth" element = {<Fifteen />}/>
    </Routes>
    </div>
  );
}

export default App;
