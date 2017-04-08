import React from 'react'
import User from './user'

export default class Team extends React.Component {

  render () {
    const users = this.props.users.map(user => {
      return <User key={user.abbr} {...user} />
    })

    return <div>
      <h2>Team: {this.props.name}</h2>
      {users}
    </div>
  }
}
