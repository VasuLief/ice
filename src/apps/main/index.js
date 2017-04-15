import React from 'react'
import { render } from 'react-dom'
import Header from '../../components/header'
import Footer from '../../components/footer'
import TeamList from '../../components/teamlist'
import store from '../../features/store/store'

const rootElement: React$Element<any> = (
  <div>
    <Header />
    <TeamList store={store} />
    <Footer />
  </div>
)

export default function (root: ?HTMLElement) {
  render(rootElement, root)
}
