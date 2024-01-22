import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import {RiServiceLine} from "react-icons/ri";
import {LuInspect} from "react-icons/lu";
const Main = () => {
  return (
    <div className='main-dash-content'>
      <div className='left-part'>
        <div className='part-1'>
          <div>
            <div><h5>Total Doctor</h5></div>
            <div className="part-1-details"> <h2>20</h2> <i><FaUserDoctor color='green'/></i></div>
          </div>
          <div>
            <div><h5>Total Specialties</h5></div>
            <div className="part-1-details"> <h2>6</h2> <i><LuInspect color='orange'/></i></div>
          </div>
          <div>
            <div><h5>Total Services</h5></div>
            <div className="part-1-details"> <h2>22</h2> <i><RiServiceLine color='red'/></i></div>
          </div>
        </div>
        <div className='part-2'></div>
        <div className='part-3'></div>
      </div>
      <div className='right-part'>
        <div className='part-1'></div>
        <div className='part-2'></div>
      </div>

    </div>
  )
}

export default Main
