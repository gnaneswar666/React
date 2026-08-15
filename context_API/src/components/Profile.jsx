import React from 'react'
import UserName from './UserName'
import { userNameContext } from '../contexts/userContext'
import { useContext } from 'react'
const Profile = () => {
    const {count}=useContext(userNameContext);
  return (
    <div >
        <h1>Count - {count}</h1>
        <UserName/>
    </div>
  )
}

export default Profile