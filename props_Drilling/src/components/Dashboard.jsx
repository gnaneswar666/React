import React from 'react'
import Profile from './profile'
const Dashboard = ({name}) => {
  return (
    <div>
        <h2>Dashboard</h2>
        <Profile name={name}/>
    </div>
  )
}

export default Dashboard