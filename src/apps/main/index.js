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
  const storeAPI = new StoreAPI()
  storeAPI.getUsers().then(users => store.dispatch({type: 'ADD_USER', payload: {user: users}}))
  storeAPI.getTeams().then(teams => store.dispatch({type: 'ADD_TEAM', payload: {team: teams}}))
  storeAPI.getProducts().then(products => store.dispatch({type: 'ADD_PRODUCT', payload: {product: products}}))
}
