import React from 'react'
import UserName from './UserName'

const profile = ({name}) => {
  return (
    <div>
        <h3>Pofile</h3>
        <UserName name={name}/>
    </div>
  )
}

export default profile

