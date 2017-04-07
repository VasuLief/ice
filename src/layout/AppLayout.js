import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import './AppLayout.scss'

export const AppLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
    <Footer />
  </div>
)

AppLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default AppLayout
