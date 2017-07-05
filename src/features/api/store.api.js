import teams from './mocks/teams.json'
import users from './mocks/users.json'
import products from './mocks/products.json'

export default class StoreAPI {
  getTeams (): Promise<Array<Object>> {
    return Promise.resolve(teams)
  }

  getUsers (): Promise<Array<Object>> {
    return Promise.resolve(users)
  }

  getProducts (): Promise<Array<Object>> {
    return Promise.resolve(products)
  }

  buy (user: Object, cart: Object): Promise<boolean> {
    return Promise.resolve(false)
  }
}
