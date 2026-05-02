import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const MyAppointments = () => {
  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p>My Appointment</p>
      <div>
        {doctors.slice(0,2).map((item,index) => (
          <div key={index}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
