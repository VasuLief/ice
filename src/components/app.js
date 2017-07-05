import React from 'react'
import { connect } from 'react-redux'
import store from '../features/store/store'
import StoreAPI from '../features/api/store.api'
import Header from './header'
import Footer from './footer'
import TeamList from './teamlist'
import UserList from './userlist'
import ProductList from './productlist'

class App extends React.Component {
  componentDidMount () {
    this.loadTeams()
  }

  loadTeams () {
    const storeAPI = new StoreAPI()
    storeAPI.getUsers().then(users => store.dispatch({type: 'ADD_USER', payload: users}))
    storeAPI.getTeams().then(teams => store.dispatch({type: 'ADD_TEAM', payload: teams}))
    storeAPI.getProducts().then(products => store.dispatch({type: 'ADD_PRODUCT', payload: products}))
  }

  render () {
    const currentView = () => {
      if (this.props.state.cart.user) {
        return <ProductList store={this.props.store} />
      }

      if (this.props.state.cart.team) {
        return <UserList store={this.props.store} />
      }

      return <TeamList store={this.props.store} />
    }

    return (
      <div>
        <Header />
        {currentView()}
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(App)
