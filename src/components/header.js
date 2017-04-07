import React from 'react'
import { IndexLink, Link } from 'react-router'
import style from './header.scss'

export const Header = () => (
  <div className={style.header}>
    <IndexLink to='/' activeClassName='route--active'>
      Test
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
  </div>
)

export default Header
