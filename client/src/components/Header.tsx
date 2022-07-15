import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

export const Header = () => {
  return (
    <>
      <Link to='/' className='logo'>
        <h1 className='logo-text'></h1>
      </Link>
      <header>

      </header>
    </>
  )
}