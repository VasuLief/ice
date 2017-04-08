import React from 'react'
import { render } from 'react-dom'

const rootElement: React$Element<any> = (
  <h1>ICE, ICE, Baby...</h1>
)

export default function (root: ?HTMLElement) {
  render(rootElement, root)
}
