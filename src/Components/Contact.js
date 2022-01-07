import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Cntct from './Contact/Cntct';
import Cont from './Contact/Cont';
import BreadCrumb from '../Components/BreadCrumb'

function Contact (){
  return(<>
    <Header></Header>
    <div className="mt-3 ">
<BreadCrumb value={"/ Contact Us"}></BreadCrumb></div>
    <Cntct></Cntct>
    <Cont></Cont>
    <Footer></Footer>
  </>)
}
export default Contact;