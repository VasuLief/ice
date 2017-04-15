import teams from './mocks/teams.json'
import users from './mocks/users.json'

export default class StoreAPI {
  getTeams (): Promise<Array<Object>> {
    return Promise.resolve(teams)
  }

  getUsers (): Promise<Array<Object>> {
    return Promise.resolve(users)

  }

  getProducts (): Promise<Array<Object>> {
    return Promise.resolve([])
  }

  buy (user: Object, cart: Object): Promise<boolean> {
    return Promise.resolve(false)
  }
}
