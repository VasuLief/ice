export default class StoreAPI {
  getTeams (): Promise<Array<Object>> {
    return Promise.resolve([])
  }

  getUsers (): Promise<Array<Object>> {
    return Promise.resolve([])
  }

  getProducts (): Promise<Array<Object>> {
    return Promise.resolve([])
  }

  buy (user: Object, cart: Object): Promise<boolean> {
    return Promise.resolve(false)
  }
}
