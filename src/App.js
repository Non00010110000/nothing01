
import React from 'react';
import Img1 from "./img/419952756_1120741356037657_7042958937139558790_n.jpg";
import img2 from "./img/419880362_895553765361237_9196834759349463979_n.jpg";
import imgPooter from "./img/419097003_834402321791393_4455345570007160317_n.jpg";

import { MdDashboard } from "react-icons/md";
import { LuInspect } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { LuContact } from "react-icons/lu";
import { TiNews } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import {Link} from "react-router-dom";
import {Routes,Route} from "react-router-dom"


import Main from './components/content/Main';
import Specialites from './components/Specialites';
import Servoices from './components/Services';
import Doctors from './components/Doctores';
import Contact from './components/Contact';
import News from './components/News';
import Settings from './components/Settings';

const App = () => {
  return (
    <div className='app'>


 <div className="dashboard">
        <img src={Img1} alt="bla" className='img-1' width={150} />
        <ul>
          <li><Link to="/"> <MdDashboard/> Dashboard </Link></li>
          <li><Link to="/speci"><LuInspect/>  Specialites </Link> </li>
          <li><Link to="/serv"><RiServiceLine/>  Services </Link></li>
          <li><Link to="/doct" ><FaUserDoctor/>  Doctors </Link></li> 
          <li><Link to="/cont" ><LuContact/> Contact</Link> </li>
          <li> <Link to="/news" ><TiNews/> Contact</Link></li>
          <li><Link to="/sett" ><CiSettings/> Settings</Link> </li>
        </ul>
      <img src={img2} alt="bla"  width={150} className='img-2'/>
    <span className='span-1'>&#169; 2024 SACLAY CENTER</span>
    </div>


<div className='main'>
  <div className='part-1-main'>
  <div>
  <h1>Dashboard</h1>
  </div>
<div className='info-header'>
  <h6>AbdAlrhman Pooter</h6>
  <img src={imgPooter} alt='bla' className='img-pooter' width={40} height={40} />
  <IoIosArrowDown className='btn-profile'/>
</div>
  </div>
  
  
<div className='main-contnet'>
    <Routes>
      <Route path='/' Component={Main} />
      <Route path='/speci' Component={Specialites}/>
      <Route path='/serv' Component={Servoices}/>
      <Route path='/doct' Component={Doctors}/>
      <Route path='/cont' Component={Contact}/>
      <Route path='/news' Component={News}/>
      <Route path='/sett' Component={Settings}/>
    </Routes>
</div>
  
</div>


    </div>
  )
}

export default App