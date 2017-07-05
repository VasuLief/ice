import React from 'react'
import { render } from 'react-dom'
import App from '../../components/app'
import store from '../../features/store/store'

const rootElement: React$Element<any> = (
  <App store={store} />
)

export default function (root: ?HTMLElement) {
  render(rootElement, root)
}
