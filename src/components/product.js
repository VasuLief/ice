import React from 'react'

export default class Product extends React.Component {
  render () {
    return <div>
      <p>Product: {this.props.name}</p>
    </div>
  }
}
