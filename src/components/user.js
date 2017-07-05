import React from 'react'

export default class User extends React.Component {
  render () {
    return <p>
      <a href='' onClick={this.props.onClick}>{this.props.first_name} {this.props.last_name}</a>
    </p>
  }
}
