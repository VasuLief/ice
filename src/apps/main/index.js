import React from 'react'
import { render } from 'react-dom'
import App from '../../components/app'
import store from '../../features/store/store'

const rootElement: React$Element<any> = (
  <div>
    <App store={store} />
  </div>
)

export default function (root: ?HTMLElement) {
  render(rootElement, root)
}
