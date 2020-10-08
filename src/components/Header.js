import React from 'react'
import './Header.css'

import logo from '../assets/pocket.png'
import { Button } from '@material-ui/core'

const Header = () => {
  return (
    <div className='header'>
      <img className='header__icon' src={logo} alt='' />
      <Button variant='contained' color='secondary'>
        Aneesa
      </Button>
    </div>
  )
}

export default Header
