import React from 'react'
import Logo from '../components/headers/Logo'
import Navigation from '../components/headers/Navigation'

const UserHeader = () => {
  return (
    <header className='bg-dark'>
      <div className='main-container d-flex justify-content-between align-items-center py-2'>
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}

export default UserHeader
