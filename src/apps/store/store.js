import { createStore } from 'redux'

const defaultStore = {
  team: [],
  user: [],
  product: [],
  cart: {}
}

function shopReducer (state = defaultStore, action) {
  switch (action.type) {
    case 'ADD_TEAM':
      return {...state, 'team': state.team.concat(action.payload)}
    case 'SELECT_TEAM':
    case 'ADD_USER':
    case 'ADD_USER_TO_TEAM':
    case 'SELECT_USER':
    case 'ADD_PRODUCT':
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
