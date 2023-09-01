import React from 'react'
import '../../styles/videoStyles.css'

export default function HeroVideo() {
  return (
    <div className='videoDiv'>
    <video autoPlay muted loop>
        <source src="/assets/css/heroVideo.mp4" type='video/mp4'/>
    </video>
    </div>
  )
}
