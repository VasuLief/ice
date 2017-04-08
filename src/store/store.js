import { createStore } from 'redux'

const defaultStore = {
  teams: [],
  users: [],
  products: [],
  cart: {}
}

function shopReducer (state = defaultStore, action) {
  switch (action.type) {
    case 'ADD_TEAM':
      return {...state, teams: state.teams.concat(action.payload)}
    case 'SELECT_TEAM':
      return {...state, cart: {...state.cart, team: action.payload}}
    case 'ADD_USER':
      return {...state, users: state.users.concat(action.payload)}
    case 'ADD_USER_TO_TEAM':
      // TODO
      break
    case 'SELECT_USER':
      return {...state, cart: {...state.cart, user: action.payload}}
    case 'ADD_PRODUCT':
      return {...state, products: state.products.concat(action.payload)}
    case 'REMOVE_PRODUCT':
      return {...state, 'cart': {}}
    case 'FINISH':
      return {...state, 'cart': {}}
    default:
      return state
  }
}

let store = createStore(shopReducer, defaultStore)

store.dispatch({
  type: 'ADD_TEAM',
  payload: {
    name: 'Myrddin'
  }
})

store.dispatch({
  type: 'ADD_TEAM',
  payload: {
    name: 'Kartell'
  }
})

export default store
