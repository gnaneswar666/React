import React from 'react'

const UserName = ({name}) => {
  return (
    <div>

     <marquee behavior="alternate" direction="left" scrollamount="20"> UserName - {name}</marquee>
    </div>
  )
}

export default UserName