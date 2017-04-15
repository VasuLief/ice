import React from 'react'

export default class User extends React.Component {

  render () {
    return <div>
      <p>Mitarbeiter: {this.props.first_name} {this.props.last_name}</p>
    </div>
  }
}
