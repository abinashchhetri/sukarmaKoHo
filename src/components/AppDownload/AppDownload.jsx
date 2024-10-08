import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Sainik Hardware App</p>
        <div className="app-download-platform">
            <img src={assets.play1} alt=""  />
            <img src={assets.app2} alt=""  />
        </div>
      
    </div>
  )
}

export default AppDownload
