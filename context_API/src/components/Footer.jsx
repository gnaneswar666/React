import React from 'react'
import { userNameContext } from '../contexts/userContext'
import { useContext } from 'react'
const Footer = () => {
    const {name}=useContext(userNameContext);
  return (
    <div>Footer -  {name}</div>
  )
}

export default Footer