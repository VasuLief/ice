import React from 'react'
import { connect } from 'react-redux'
import store from '../features/store/store'
import User from './user'

class UserList extends React.Component {
  onClick (id) {
    store.dispatch({type: 'SELECT_USER', payload: id})
  }

  render () {
    const teamUsers = this.props.users.filter(user => user.team_id === this.props.team)
    const users = teamUsers.map(user => {
      return <User key={user.id} {...user} onClick={(ev) => { ev.preventDefault(); this.onClick(user.id) }} />
    })

    return <div id='users'>
      { users }
    </div>
  }
}

function mapStateToProps (state) {
  return {
    users: state.users,
    team: state.cart.team
  }
}

export default connect(mapStateToProps)(UserList)
