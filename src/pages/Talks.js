import React, { useEffect } from 'react'
import Background from '../components/Background'
import Navibar from '../components/Navbar'

export default function Talks() {
  return (
    <div className='myTalks d-flex align-items-center justify-content-center'>
        <Navibar/>
        <Background/>
        <h1 style={{color:"#ff4500", textAlign:"center" ,fontSize:"10vw"}}>Coming Soon</h1>
    </div>
  )
}
