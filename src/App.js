import React from 'react';
import {Route,Switch} from "react-router-dom";
import Homepage from './HomePage/Homepage';
import FAQ from "./FAQ/Faq";
import Course from "./Components/Course";
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Misfueling from "./Components/Misfueling";
import Browcher from './Browchers/Browcher';

function App(){
  return(
  <div className="">
    <Switch>
  <Route  path="/"  exact component={Homepage}></Route>
  <Route path="/FAQ" component={FAQ}></Route>
  <Route path ="/Course" component={Course}></Route>
  <Route path ="/AboutUs" component={AboutUs}></Route>
  <Route path ="/Contact" component={Contact}></Route>
  <Route path ="/Misfueling" component={Misfueling}></Route>
  <Route path ="/Browcher" component={Browcher}></Route>
  </Switch>
</div>)
}
export default App;