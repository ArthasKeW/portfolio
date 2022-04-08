import React from 'react'
import './recentproject.css'
import spaceman from '../../assets/sapceman.PNG'
import attendance from '../../assets/attendance.PNG'
import ReactPlayer from 'react-player'

const recentproject = () => {
  return (
    <section id='recentproject'>
      <h2>Recent projects</h2>

      <div className='container recentproject_container'>
        <div className='recentproject'>
        <h2>The Slaughterer Spaceman</h2>
          <div className='project_photo'>
          <img src={spaceman} alt='spaceman' />
          </div>
            <small className='project_details'>
              First ever game created by me and my groupmates <br/>
              Game demo:
              
            </small>
            <div className='video'>
              <ReactPlayer className='react-player' url='https://youtu.be/A6s3nRVm89k'  width= '95%' />
            </div>
        </div>
        <div className='recentproject'>
        <h2>Smart Face Attendance System</h2>
          <div className='project_photo'>
          <img src={attendance} alt='attendance' />
          </div>
            
            <small className='project_details'>
            A attendance system that uses a facial recognition system to record the attendance.
            </small>
        </div>
      </div>
    </section>
  )
}

export default recentproject