import React from 'react'
import { render } from 'react-dom'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Content from '../../components/content'
import store from '../../features/store/store'
import StoreAPI from '../../features/api/store.api'

const rootElement: React$Element<any> = (
  <div>
    <Header />
    <Content store={store} />
    <Footer />
  </div>
)

export default function (root: ?HTMLElement) {
  render(rootElement, root)
  const storeAPI = new StoreAPI()
  storeAPI.getUsers().then(users => store.dispatch('ADD_USER', {user: users}))
  storeAPI.getTeams().then(teams => store.dispatch('ADD_TEAM', {team: teams}))
  storeAPI.getProducts().then(products => store.dispatch('ADD_PRODUCT', {product: products}))
}
