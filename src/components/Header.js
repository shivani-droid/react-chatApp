import React from 'react'
import { HiUsers } from "react-icons/hi";
const Header = () => {
  return (
    <div className='header container-fluid bg-grey px-3 py-2'>
        <div className="row justify-content-between">
            <div className="col-9">
                <h4 className='fw-bold'>#Introductions</h4>
                <div className="lead fs-10">This Channel is for Company Wide Chatter</div>
            </div>
            <div className="col-3 col-lg-1 col-md-2 align-self-center">
               <span className='lead fs-10'>3/100</span>
               <HiUsers fontSize={22} className='ms-2' /> 
            </div>
        </div>
        <div className="border-grey mt-2"></div>
    </div>
  )
}

export default Header