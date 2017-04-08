import React from 'react'
import { render } from 'react-dom'
import Header from './../components/header'
import Footer from './../components/footer'
import Content from './../components/content'
import store from './../store/store'

const rootElement: React$Element<any> = (
  <div>
    <Header />
    <Content store={store} />
    <Footer />
  </div>
)

export default function (root: ?HTMLElement) {
  render(rootElement, root)
}
