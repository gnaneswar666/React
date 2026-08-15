import React from 'react'

import { userNameContext } from '../contexts/userContext'
import { useContext } from 'react'
const UserName = () => {
    const {name,increment}=useContext(userNameContext)
  return (
    <div>UserName -  {name}
        <button onClick={increment}>add</button>
    </div>
  )
}

export default UserName